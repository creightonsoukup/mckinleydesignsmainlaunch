import _ from 'lodash';
import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux'
import async from 'async';
import { fetchAllProducts , fetchCart, addToCart,
  searchAllProductsByTags } from '../actions/index'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
  Col,
  Jumbotron,
  Button,
  Form,
} from 'reactstrap';

import ProductList from '../components/product_list'
import FilterBar from '../components/filter_bar'
import Navigation from '../components/navbar'
import NavbarScroll from '../components/navbar-scroll'
import VideoPlayer from '../components/video_player'
import Footer from '../components/footer'
import BannerImage from '../components/banner_image'
import Waypoint from 'react-waypoint';


class AllProducts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      sortedProducts: [],
      productsFromVideo: [],
      scrollNav: false,
      cart: null,
      cartOpen: false,
      cartLineItems: null
    }

    this.searchProducts = this.searchProducts.bind(this)
    this.sortProducts = this.sortProducts.bind(this)
    this.sortProductTypes = this.sortProductTypes.bind(this)
    this.navOnLeave = this.navOnLeave.bind(this)
    this.navOnEnter = this.navOnEnter.bind(this)
    this.addToCart = this.addToCart.bind(this)
  }

  componentWillMount() {
    this.props.fetchCart()
      .then((data) => {
        this.setState({cart: data.payload, cartLineItems: data.payload.lineItemCount})
      })
    this.fetchProducts()
  }

  navOnLeave() {
    this.setState({scrollNav: true})

  }

  navOnEnter() {
    this.setState({scrollNav: false})
  }

  fetchProducts() {
    if(this.state.products.length === 0) {
      this.props.fetchAllProducts()
        .then((data) => this.setState({products: data.payload}))
    }
  }

  searchProducts(value) {
    var termArray = value.split(" ")
    this.props.searchAllProductsByTags(termArray)
      .then((data) => this.setState({products: data.payload}))
  }

  sortPriceAscending() {
    const products = this.state.sortedProducts.length === 0 ? this.state.products : this.state.sortedProducts
    const sortedProducts = products.sort((a ,b) => a.attrs.variants[0].price - b.attrs.variants[0].price)
    sortedProducts.length === products.length && this.setState({sortProducts: sortedProducts})
  }

  sortPriceDescending() {
    const products = this.state.sortedProducts.length === 0 ? this.state.products : this.state.sortedProducts
    const sortedProducts = products.sort((a ,b) => b.attrs.variants[0].price - a.attrs.variants[0].price)
    sortedProducts.length === products.length && this.setState({sortedProducts: sortedProducts})
  }

  sortTitleAscending() {
    const products = this.state.sortedProducts.length === 0 ? this.state.products : this.state.sortedProducts
    const sortedProducts = products.sort((a, b) => {
      let nameA = a.title.toUpperCase()
      let nameB = b.title.toUpperCase()
      if (nameA < nameB) {
        return -1
      }
      if (nameA > nameB) {
        return 1
      }
      return 0
    })
    sortedProducts.length === products.length && this.setState({sortedProducts: sortedProducts})
  }

  sortTitleDescending() {
    const products = this.state.sortedProducts.length === 0 ? this.state.products : this.state.sortedProducts
    const sortedProducts = products.sort((a, b) => {
      let nameA = a.title.toUpperCase()
      let nameB = b.title.toUpperCase()
      if (nameA < nameB) {
        return 1
      }
      if (nameA > nameB) {
        return -1
      }
      return 0
    })
    sortedProducts.length === products.length && this.setState({sortedProducts: sortedProducts})
  }

  sortProducts(sortBy) {
    switch (sortBy)  {
      case 'price-ascending':
         return this.sortPriceAscending()
      case 'price-descending':
        return this.sortPriceDescending()
      case 'title-ascending':
        return this.sortTitleAscending()
      case 'title-descending':
        return this.sortTitleDescending()
      case 'default':
        return this.fetchProducts()
    }
  }

  sortProductTypes(type) {
    const products =  this.state.products
    let sortedProducts = []
    async.map(products,
    function(product) {
      if(product.attrs.product_type === type) {
        sortedProducts.push(product)
      }
    })
    this.setState({sortedProducts: sortedProducts})
  }

  addToCart(variantObj, quantity) {
    this.props.addToCart(variantObj, quantity, this.state.cart)
      .then((data) => {
        localStorage.setItem('MckinleyCart', data.payload.id)
        this.setState({cart: data.payload, cartLineItems: data.payload.lineItemCount, cartOpen: true, scrollNav: true})
      })
  }

  render() {
    const video = 'https://s3-us-west-1.amazonaws.com/madison-mckinley/product-video.mp4'
    const search = _.debounce((value) => {this.searchProducts(value)}, 500)
    return (
      <div className='all-products animated fadeIn'>
      { window.innerWidth < 576 || this.state.scrollNav ? (
        <NavbarScroll
        lineItemCount={this.state.cartLineItems}
        cartOpen={this.state.cartOpen}
        cartData={this.state.cart}/>
      ) : (
        <Navigation
        lineItemCount={this.state.cartLineItems}
        cartOpen={this.state.cartOpen}
        cartData={this.state.cart}/>
      )}
      <Waypoint
      topOffset={'-20%'}
      onEnter={this.navOnEnter}
      onLeave={this.navOnLeave}/>
      <Row noGutters className='banner-component animated fadeInDown'>
        <VideoPlayer
        video={video} loop={true}/>
      </Row>
      <Row noGutters className='header'>
        <h1>Shop Jewelry</h1>
      </Row>
      <FilterBar
        showSearchBar={true}
        sortProducts={this.sortProducts}
        sortProductTypes={this.sortProductTypes}
        searchProducts={search} />


          <ProductList
          addToCart={this.addToCart}
          products={this.state.sortedProducts.length === 0 ? this.state.products : this.state.sortedProducts}/>

      <Footer
      homepage={false}
      show={this.state.products.length > 0}/>
      </div>
    )
  }
}

function mapStateToProps({products}) {
 return { products }
}

export default connect(mapStateToProps, { fetchAllProducts, addToCart, fetchCart, searchAllProductsByTags })(AllProducts)

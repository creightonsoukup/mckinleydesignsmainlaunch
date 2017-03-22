import _ from 'lodash';
import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux'
import async from 'async';
import { fetchAllProducts , createCart,
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
import VideoPlayer from '../components/video_player'
import Footer from '../components/footer'


class AllProducts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      sortedProducts: [],
      productsFromVideo: []
    }

    this.searchProducts = this.searchProducts.bind(this)
    this.sortProducts = this.sortProducts.bind(this)
    this.sortProductTypes = this.sortProductTypes.bind(this)
  }

  componentWillMount() {
    this.props.createCart()
    this.fetchProducts()
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

    const products = this.state.sortedProducts.length === 0 ? this.state.products : this.state.sortedProducts
    let sortedProducts = []
    async.map(products,
    function(product) {
      if(product.attrs.product_type === type) {
        sortedProducts.push(product)
      }
    })
    this.setState({sortedProducts: sortedProducts})
  }

  render() {
    const video = 'https://res.cloudinary.com/deekcijv9/video/upload/v1490057497/loop_video.mov'
    const search = _.debounce((value) => {this.searchProducts(value)}, 300)
    return (
      <div>
      <Navigation />
      <VideoPlayer video={video}/>
      <Container>
        <FilterBar
        sortProducts={this.sortProducts}
        sortProductTypes={this.sortProductTypes}
        searchProducts={search} />
        <div>
        {this.state.products.length === 0 ? (
          <div>Products Loading</div>
        ) : (
          <ProductList products={this.state.sortedProducts.length === 0 ? this.state.products : this.state.sortedProducts}/>
        )}
        </div>
      </Container>
      <Footer
      show={this.state.products.length > 0}/>
      </div>
    )
  }
}

function mapStateToProps({products}) {
 return { products }
}

export default connect(mapStateToProps, { fetchAllProducts, createCart, searchAllProductsByTags })(AllProducts)

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navigation from '../components/navbar';
import Footer from '../components/footer';
import NavbarScroll from '../components/navbar-scroll'
import BannerImage from '../components/banner_image';
import FilterBar from '../components/filter_bar';
import async from 'async';
import ProductList from '../components/product_list'
import CollectionHeader from '../components/collection_header'
import { fetchPerlineCollection, getGoldCollection,
  fetchWildCollection, fetchSteerheadRanchCollection, fetchCart, addToCart,
  fetchCoinCollection, fetchOccidentaleCollection, fetchCollectionContent,
fetchCameoCollection, fetchEastwoodCollection, searchCollectionByTags } from '../actions/index';

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
import Waypoint from 'react-waypoint';


class SingleCollection extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: [],
      sortedProducts: [],
      collection: '',
      collectionContent: '',
      cart: null,
      scrollNav: false,
      cartLineItems: null,
      viewSortedProducts: false
    }
    //
    this.searchProducts = this.searchProducts.bind(this)
    this.sortProducts = this.sortProducts.bind(this)
    this.sortProductTypes = this.sortProductTypes.bind(this)
    this.addToCart = this.addToCart.bind(this)
    this.navOnLeave = this.navOnLeave.bind(this)
    this.navOnEnter = this.navOnEnter.bind(this)
  }

  componentWillMount() {
    this.getProducts(this.props.params.collection)
    this.props.fetchCollectionContent()
      .then((data) => {
        let collections = data.payload.data
        collections.map((collection) => {
          if(collection.name.toLowerCase() === this.props.params.collection.split('-').join(" ")) {
            this.setState({collectionContent: collection})
          }
        })
      })
    this.props.fetchCart()
      .then((data) => {
        this.setState({cart: data.payload, cartLineItems: data.payload.lineItemCount})
      })
  }

  navOnLeave() {
    this.setState({scrollNav: true})

  }

  navOnEnter() {
    this.setState({scrollNav: false})
  }

  addToCart(variantObj, quantity) {
    this.props.addToCart(variantObj, quantity, this.state.cart)
      .then((data) => {
        localStorage.setItem('MckinleyCart', data.payload.id)
        this.setState({cart: data.payload, cartLineItems: data.payload.lineItemCount, cartOpen: true, scrollNav: true})
      })
  }

  getProducts(collection) {
    switch (collection) {
      case 'coin-collection':
        return (
           this.props.fetchCoinCollection()
              .then((data) => {
                  this.setState({
                    products: data.payload,
                    collection: collection.split('-').join(" ")

                  })
                })
        )
      case 'occidentale-collection':
        return (
           this.props.fetchOccidentaleCollection()
              .then((data) => {
                  this.setState({
                    products: data.payload,
                    collection: collection.split('-').join(" ")
                  })
                })
        )
      case 'wild-collection':
        return (
           this.props.fetchWildCollection()
              .then((data) => {
                  this.setState({
                    products: data.payload,
                    collection: collection.split('-').join(" "),
                    viewSortedProducts: false
                  })
                })
        )
      case 'gold-collection':
        return (
           this.props.getGoldCollection()
              .then((data) => {
                  this.setState({
                    products: data.payload,
                    collection: collection.split('-').join(" ")
                  })
                })
        )
      case 'perline-collection':
        return (
           this.props.fetchPerlineCollection()
              .then((data) => {
                  this.setState({
                    products: data.payload,
                    collection: collection.split('-').join(" ")
                  })
                })
        )
      case 'steerhead-ranch-collection':
        return (
           this.props.fetchSteerheadRanchCollection()
              .then((data) => {
                  this.setState({
                    products: data.payload,
                    collection: collection.split('-').join(" ")
                  })
                })
        )
      case 'eastwood-collection':
        return (
           this.props.fetchEastwoodCollection()
              .then((data) => {
                  this.setState({
                    products: data.payload,
                    collection: collection.split('-').join(" ")
                  })
                })
        )
      case 'cameo-collection':
        return (
           this.props.fetchCameoCollection()
              .then((data) => {
                  this.setState({
                    products: data.payload,
                    collection: collection.split('-').join(" ")
                  })
                })
        )
    }
  }

  searchProducts(value) {
    var termArray = value.split(" ")
    if (termArray.length === 0) {
      return
    }
    this.props.searchCollectionByTags(termArray)
      .then((data) => this.setState({sortedProducts: data.payload, viewSortedProducts: true}))
  }

  sortPriceAscending() {
    const products = this.state.sortedProducts.length === 0 ? this.state.products : this.state.sortedProducts
    const sortedProducts = products.sort((a ,b) => a.attrs.variants[0].price - b.attrs.variants[0].price)
    sortedProducts.length === products.length && this.setState({sortProducts: sortedProducts, viewSortedProducts: true})
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
    this.setState({viewSortedProducts: true})
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
        return this.setState({viewSortedProducts: false})
      }
    }

  sortProductTypes(type) {
      if (type === 'default') {
        this.setState({viewSortedProducts: false})
        return
      }
      const products =  this.state.products
      let sortedProducts = []
      async.map(products,
        function(product) {
          if(product.attrs.product_type === type) {
            sortedProducts.push(product)
          }
        })
      if (sortedProducts.length === 0) {
        this.setState({sortedProducts: [], viewSortedProducts: true})
        return
      }
      this.setState({sortedProducts: sortedProducts, viewSortedProducts: true})
  }

  render() {
      const search = _.debounce((value) => {this.searchProducts(value)}, 300)
    return (
    <div className='animated fadeIn'>
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
    onEnter={this.navOnEnter}
    onLeave={this.navOnLeave}/>
      <BannerImage
        fileName={`${this.props.params.collection}.jpg`}/>
      <div>
        <Row noGutters className="collection-title">
          <h1>{this.state.collection.toUpperCase()}</h1>
        </Row>
        <CollectionHeader
        collectionContent={this.state.collectionContent} />
        <FilterBar
        showSearchBar={false}
        sortProducts={this.sortProducts}
        sortProductTypes={this.sortProductTypes}
        searchProducts={search} />
        <ProductList
          addToCart={this.addToCart}
          products={this.state.viewSortedProducts ? this.state.sortedProducts : this.state.products}/>
        <Footer
          homepage={false}
          show={this.state.products.length > 0}/>
      </div>
    </div >
    )
  }
}

function mapStateToProps({collection, collectionContent}) {
  return {collection, collectionContent}
}

export default connect(mapStateToProps, {fetchPerlineCollection, getGoldCollection,
  fetchWildCollection, fetchSteerheadRanchCollection, fetchCollectionContent, addToCart,
  fetchCoinCollection, fetchOccidentaleCollection, searchCollectionByTags, fetchCart,
fetchCameoCollection, fetchEastwoodCollection})(SingleCollection)

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
fetchCameoCollection, fetchEastwoodCollection, searchCollectionByTag } from '../actions/index';

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


class SingleCollection extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: [],
      sortedProducts: [],
      collection: '',
      collectionContent: '',
      cart: null
    }
    //
    this.searchProducts = this.searchProducts.bind(this)
    this.sortProducts = this.sortProducts.bind(this)
    this.sortProductTypes = this.sortProductTypes.bind(this)
    this.addToCart = this.addToCart.bind(this)
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
        this.setState({cart: data.payload})
      })
  }

  addToCart(variantObj, quantity) {
    this.props.addToCart(variantObj, quantity, this.state.cart)
      .then((data) => {
        localStorage.setItem('MckinleyCart', data.payload.id)
        this.setState({cart: data.payload})
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
                    collection: collection.split('-').join(" ")
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
      case 'steerhead-ranch_collection':
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
    this.props.searchCollectionByTags(termArray)
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
      const search = _.debounce((value) => {this.searchProducts(value)}, 300)
    return (
      <div className='animated fadeIn'>
      <NavbarScroll />
      <BannerImage
        fileName={`${this.props.params.collection}.jpg`}/>
      <Container fluid>
        <h1 className="collection-title">{this.state.collection.toUpperCase()}</h1>
        <CollectionHeader
        collectionContent={this.state.collectionContent} />
        <FilterBar
        sortProducts={this.sortProducts}
        sortProductTypes={this.sortProductTypes}
        searchProducts={search} />
        <div>
        {this.state.products.length === 0 ? (
          <div>Products Loading</div>
        ) : (
          <ProductList
          addToCart={this.addToCart}
          products={this.state.sortedProducts.length === 0 ? this.state.products : this.state.sortedProducts}/>
        )}
        </div>
        <Footer
          show={this.state.products.length > 0}/>
      </Container>
      </div >
    )
  }
}

function mapStateToProps({collection, collectionContent}) {
  return {collection, collectionContent}
}

export default connect(mapStateToProps, {fetchPerlineCollection, getGoldCollection,
  fetchWildCollection, fetchSteerheadRanchCollection, fetchCollectionContent, addToCart,
  fetchCoinCollection, fetchOccidentaleCollection, searchCollectionByTag, fetchCart,
fetchCameoCollection, fetchEastwoodCollection})(SingleCollection)

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navigation from '../components/navbar';
import Footer from '../components/footer';
import BannerImage from '../components/banner_image';
import FilterBar from '../components/filter_bar';
import async from 'async';
import ProductList from '../components/product_list'
import { fetchPerlineCollection, getGoldCollection,
  fetchWildCollection, fetchSteerheadRanchCollection,
  fetchCoinCollection, fetchOccidentaleCollection,
fetchCameoCollection, fetchEastwoodCollection, searchCollectionByTag } from '../actions/index'

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
      collection: ''
    }
    //
    this.searchProducts = this.searchProducts.bind(this)
    this.sortProducts = this.sortProducts.bind(this)
    this.sortProductTypes = this.sortProductTypes.bind(this)
  }

  componentWillMount() {
    this.getProducts(this.props.params.collection)
      // .then((data) => this.setState({products: data.payload}))
  }

  getProducts(collection) {
    switch (collection) {
      case 'coin-collection':
        return (
           this.props.fetchCoinCollection()
              .then((data) => {
                  this.setState({
                    products: data.payload,
                    bannerImage: ''
                  })
                })
        )
      case 'occidentale-collection':
        return (
           this.props.fetchOccidentaleCollection()
              .then((data) => {
                  this.setState({
                    products: data.payload,
                    bannerImage: ''
                  })
                })
        )
      case 'wild-collection':
        return (
           this.props.fetchWildCollection()
              .then((data) => {
                  this.setState({
                    products: data.payload,
                    bannerImage: ''
                  })
                })
        )
      case 'gold-collection':
        return (
           this.props.getGoldCollection()
              .then((data) => {
                  this.setState({
                    products: data.payload,
                    bannerImage: ''
                  })
                })
        )
      case 'perline-collection':
        return (
           this.props.fetchPerlineCollection()
              .then((data) => {
                  this.setState({
                    products: data.payload,
                    bannerImage: ''
                  })
                })
        )
      case 'steerhead-ranch_collection':
        return (
           this.props.fetchSteerheadRanchCollection()
              .then((data) => {
                  this.setState({
                    products: data.payload,
                    bannerImage: ''
                  })
                })
        )
      case 'eastwood-collection':
        return (
           this.props.fetchEastwoodCollection()
              .then((data) => {
                  this.setState({
                    products: data.payload,
                    bannerImage: ''
                  })
                })
        )
      case 'cameo-collection':
        return (
           this.props.fetchCameoCollection()
              .then((data) => {
                  this.setState({
                    products: data.payload,
                    bannerImage: ''
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
    console.log(this.state)
    return (
      <div>
      <Navigation />
      <BannerImage
        collection={this.props.params.collection}/>
      <Container fluid>
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
      <Footer/>
      </div >
    )
  }
}

function mapStateToProps({collection}) {
  return {collection}
}

export default connect(mapStateToProps, {fetchPerlineCollection, getGoldCollection,
  fetchWildCollection, fetchSteerheadRanchCollection,
  fetchCoinCollection, fetchOccidentaleCollection, searchCollectionByTag,
fetchCameoCollection, fetchEastwoodCollection})(SingleCollection)

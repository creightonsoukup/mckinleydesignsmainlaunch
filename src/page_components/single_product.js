import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import { fetchProduct, fetchCart, addToCart } from '../actions/index';
import async from 'async';
import ProductGallery from '../components/product_gallery'
import ProductDetail from '../components/product_detail'
import Navigation from '../components/navbar'
import Footer from '../components/footer'

class SingleProduct extends Component {
  static contextTypes = {
    router: PropTypes.object
  }
  constructor(props) {
    super(props)

    this.state = {
      product: null,
      cart: null
    }
    this.getThumbnails = this.getThumbnails.bind(this)
    this.addToCart = this.addToCart.bind(this)
  }

  componentWillMount() {
    this.props.fetchCart()
      .then((data) => {
        this.setState({cart: data.payload})
      })
    this.props.fetchProduct(this.props.params.handle)
      .then((data) => {
        this.setState({product: data.payload[0]})
        this.getThumbnails()
        this.getGalleryImages()
        this.getRegImages()
      })

  }

  addToCart(variantObj, quantity) {
    this.props.addToCart(variantObj, quantity, this.state.cart)
      .then((data) => {
        console.log(data)
      })
  }


  getThumbnails() {
    const productImages = this.state.product.images
    let thumbnails = []
    async.map(productImages,
    function(image) {
      thumbnails.push(image.variants[2].src)
    })
    this.setState({imagesThumb: thumbnails})
  }

  getGalleryImages() {
    const productImages = this.state.product.images
    let images = []
    async.map(productImages,
    function(image) {
      images.push({
        src:image.variants[8].src,
        id: productImages.indexOf(image)
      })
    })
    this.setState({imagesGallery: images})
  }

  getRegImages() {
    const productImages = this.state.product.images
    let images = []
    async.map(productImages,
    function(image) {
      images.push(image.variants[7].src)
    })
    this.setState({imagesReg: images})
  }

  render() {
    if(!this.state.imagesReg) {
      return <div></div>
    }
    console.log(this.state)
    return (

      <div>
        <Navigation />
        <ProductGallery
        regular={this.state.imagesReg}
        gallery={this.state.imagesGallery}
        thumbnails={this.state.imagesThumb}/>
        <ProductDetail
        name={this.state.product.title}
        addToCart={this.addToCart}
        description={this.state.product.description}
        variants={this.state.product.variants} />
        <Footer
        show={true} />
      </div>

    )
  }
}

function mapStateToProps({product, cart}) {
  return { product, cart }
}

export default connect(mapStateToProps, { fetchProduct, fetchCart, addToCart })(SingleProduct)

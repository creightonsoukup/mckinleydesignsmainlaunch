import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import { fetchProduct, fetchCart, addToCart } from '../actions/index';
import async from 'async';
import ProductGallery from '../components/product_gallery'
import ProductDetail from '../components/product_detail'
import Navigation from '../components/navbar-scroll'
import Footer from '../components/footer'
import { Row, Col } from 'reactstrap';
import ProductFooter from '../components/product-footer'

class SingleProduct extends Component {
  static contextTypes = {
    router: PropTypes.object
  }
  constructor(props) {
    super(props)

    this.state = {
      product: null,
      cart: null,
      cartOpen: false,
      cartLineItems: null
    }
    this.getThumbnails = this.getThumbnails.bind(this)
    this.addToCart = this.addToCart.bind(this)
  }

  componentWillMount() {
    this.props.fetchCart()
      .then((data) => {
        this.setState({cart: data.payload, cartLineItems: data.payload.lineItemCount})
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
        localStorage.setItem('MckinleyCart', data.payload.id)
        this.setState({cart: data.payload, cartLineItems: data.payload.lineItemCount, cartOpen: true, scrollNav: true })
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
    return (
      <div className='animated fadeInRight'>
        <Navigation
        lineItemCount={this.state.cartLineItems}
        cartOpen={this.state.cartOpen}
        cartData={this.state.cart} />
        <Row noGutters className='single-product'>
          <Col xs='12' sm='12' md='6' lg='6' xl='6'>
            { window.innerWidth < 576 &&
              <h1 className='mobile-title'>{this.state.product.title}</h1>
            }
            <ProductGallery
            regular={this.state.imagesReg}
            gallery={this.state.imagesGallery}
            thumbnails={this.state.imagesThumb}/>
          </Col>
          <Col xs='12' sm='12' md='6' lg='6' xl='6'>
            <ProductDetail
              name={this.state.product.title}
              addToCart={this.addToCart}
              description={this.state.product.description}
              variants={this.state.product.variants} />
          </Col>
          <Col xs='12' sm='12' md='12' lg='12' xl='12'>
              <ProductFooter />
          </Col>
        </Row>
        <Footer
        homepage={false}
        show={true} />
      </div>

    )
  }
}

function mapStateToProps({product, cart}) {
  return { product, cart }
}

export default connect(mapStateToProps, { fetchProduct, fetchCart, addToCart })(SingleProduct)

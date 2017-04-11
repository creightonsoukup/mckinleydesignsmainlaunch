import React, { Component, PropTypes } from 'react';
import SmallGallery from './small_gallery';
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

class ProductQuickView extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  constructor(props) {
    super(props);

    this.state = {
      product: this.props.product
    }
    this.viewProduct = this.viewProduct.bind(this)
    this.addToCart = this.addToCart.bind(this)
  }

  viewProduct () {
    this.context.router.push(`/product/${this.state.product.attrs.product.attrs.handle}`)
  }

  addToCart() {
    this.props.addToCart(this.state.product, 1)
  }

  render() {
    console.log(this.state.product)
    return (
          <div>
              <SmallGallery
              changeImage={this.props.changeImage}
              handle={this.state.product.attrs.product.attrs.handle}
              image={this.props.galleryImageSrc} />
              <div className="product-quick-info">
               <h2 onClick={this.viewProduct}>{this.state.product.productTitle}</h2>
               <h2>{`$ ${this.state.product.price}`}</h2>
              <div className='add-to-cart-btn' onClick={this.addToCart}>Add To Cart</div>
              </div>
          </div>
    )
  }
}

export default ProductQuickView

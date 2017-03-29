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
  }

  viewProduct () {
    this.context.router.push(`/product/${this.state.product.attrs.product.attrs.handle}`)
  }

  render() {
    console.log(this.state.product)
    return (
      <div>
        {this.props.offset ? (
          <Row>
            <Col xs="12" sm="12" md='6' lg="6" xl="6">
              <SmallGallery
              image={this.props.galleryImageSrc} />
            </Col>
            <Col xs="12" sm="12" md='6' lg="6" xl="6">
              <div>{this.state.product.productTitle}</div>
              <div>{this.state.product.price}</div>
              <Button>Add To Cart</Button>
              <Button
              onClick={this.viewProduct}
              >View Product</Button>
            </Col>
          </Row>
        ) : (
          <Row>
            <Col xs="12" sm="12" md='6' lg="6" xl="6">
              <div>{this.state.product.productTitle}</div>
              <div>{this.state.product.price}</div>
              <Button>Add To Cart</Button>
              <Button
              onClick={this.viewProduct}
              >View Product</Button>
            </Col>
            <Col xs="12" sm="12" md='6' lg="6" xl="6">
              <SmallGallery
              image={this.props.galleryImageSrc} />
            </Col>
          </Row>
        )}
      </div>
    )
  }
}

export default ProductQuickView

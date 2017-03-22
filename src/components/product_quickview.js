import React, { Component } from 'react';
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
  constructor(props) {
    super(props);

    this.state = {
      product: this.props.product
    }

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
            </Col>
          </Row>
        ) : (
          <Row>
            <Col xs="12" sm="12" md='6' lg="6" xl="6">
              <div>{this.state.product.productTitle}</div>
              <div>{this.state.product.price}</div>
              <Button>Add To Cart</Button>
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

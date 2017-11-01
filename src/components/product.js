import React, { Component } from 'react';
import async from 'async';

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
  Form
} from 'reactstrap';

import ProductQuickView from './product_quickview';

class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: false
    };
  }

  render() {
    const width = this.state.selected ? '12' : '6';
    return (
      <div xs="12" sm="12" md={width} lg={width} className="product">
        <ProductQuickView
          addToCart={this.props.addToCart}
          product={this.props.product.selectedVariant}
          galleryImageSrc={
            this.props.product.selectedVariant.imageVariants[5].src
          }
        />
      </div>
    );
  }
}

export default Product;

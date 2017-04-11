import React, { Component } from 'react';
import { Link } from 'react-router';
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
  Form,
} from 'reactstrap';
import Product from './slider_product'
import Waypoint from 'react-waypoint';
import CustomizeProduct from './customize-product'

export default class CustomizeSelect extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selected: false
    }
    this.renderProducts = this.renderProducts.bind(this)
  }

  renderProducts(product) {
    const index = this.props.products.indexOf(product)
    const key = product.id
      return (
        <CustomizeProduct
        key={key}
        selectProduct={this.props.select}
        deselectProduct={this.props.deselect}
        product={product}
        selected={this.props.selected}
        index={index} />
      )
  }

  render() {
    return (
      <div>
        <div className='cust-slider'>
          {this.props.products.map(this.renderProducts)}
        </div>
      </div>

    )
  }
}

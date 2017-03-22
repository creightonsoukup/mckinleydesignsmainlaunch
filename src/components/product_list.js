import React, { Component } from 'react';
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
import Product from './product'
import SelectedProduct from './selected_product'

export default class ProductList extends Component {

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
        <Product
          key={key}
          index={index}
          product={product}/>
      )
  }

  render() {
    return (
      <Row>
        {this.props.products.map(this.renderProducts)}
      </Row>
    )
  }
}

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
        <Col key={key} xs='12' sm='12' md='4' lg='3' xl='3'>
        <Product
          addToCart={this.props.addToCart}
          key={key}
          index={index}
          product={product}/>
        </Col>
      )
  }

  render() {
    return (
      <Row className='product-list'>
        {this.props.products.map(this.renderProducts)}
      </Row>
    )
  }
}

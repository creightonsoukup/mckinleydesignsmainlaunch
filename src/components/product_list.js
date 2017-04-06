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
        <Col sm='12' md='6' lg='6' xl='6'>
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

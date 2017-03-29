import React, { Component } from 'react';
import * as ScrollMajic from 'scrollmagic'
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

export default class ProductSlider extends Component {

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
      <div>
        <div className='slider-text'>
          <h2>{"Madison's Favorites"}</h2>
        </div>
        <div className='horizontal-slider'>
          {this.props.products.map(this.renderProducts)}
        </div>
      </div>

    )
  }
}

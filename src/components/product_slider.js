import React, { Component } from 'react';
import { Link } from 'react-router';
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
    console.log(product)
      return (
        <div className='slider'>
          <Product
            key={key}
            index={index}
            product={product}/>
          <div className='slider-product-info'>
            <h1>{product.title}</h1>
            <Link to={`/product/${product.attrs.handle}`}><div className='slider-button'>
              View Product
            </div></Link>
          </div>
        </div>
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

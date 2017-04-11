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
import Product from './slider_product'

export default class CustomizeSelect extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selected: false
    }
    this.selectProduct = this.selectProduct.bind(this)
    this.deselectProduct = this.deselectProduct.bind(this)
    this.checkIfSelceted = this.checkIfSelceted.bind(this)
  }

  selectProduct() {
    this.setState({selected: true})
    this.props.selectProduct(this.props.product)
  }

  deselectProduct() {
    this.setState({selected: false})
    this.props.deselectProduct(this.props.product)
  }

  componentWillMount() {
    this.props.selected.map(this.checkIfSelceted)
  }

  checkIfSelceted(product) {
    if (this.props.product === product) {
      this.setState({selected: true})
    }
    return
  }

  render() {
    return (
      <div>
        { this.state.selected ? (
          <div className='slider-product slider-selected'>
            <div  onClick={this.deselectProduct}>
            <Product
              index={this.props.index}
              product={this.props.product}/>
            </div>
            <div className='slider-product-info'>
              <h1>{this.props.product.title}</h1>
              <h2>{`$ ${this.props.product.variants[0].price}`}</h2>
              <div className='slider-button'>
                Select
              </div>

            </div>
          </div>
        ) : (
          <div className='slider-product'>
            <div onClick={this.selectProduct}>
            <Product
              index={this.props.index}
              product={this.props.product}/>
            </div>
            <div className='slider-product-info'>
              <h1>{this.props.product.title}</h1>
              <h2>{`$ ${this.props.product.variants[0].price}`}</h2>
              <div
              onClick={this.selectProduct}
              className='slider-button'>
                Select
              </div>
            </div>
          </div>
        )}
      </div>

    )
  }
}

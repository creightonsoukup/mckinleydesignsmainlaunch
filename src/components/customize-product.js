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
  Input,
  Select
} from 'reactstrap';
import Product from './slider_product'

export default class CustomizeSelect extends Component {

  constructor(props) {
    super(props);
    this.state = {
      product: null,
      selected: false,
      selectedVariant: null,
      quantity: 1,
      price: null,
      variantIdx: 0,
      variants: null
    }
    this.selectProduct = this.selectProduct.bind(this)
    this.deselectProduct = this.deselectProduct.bind(this)
    this.checkIfSelected = this.checkIfSelected.bind(this)
    this.renderOptions = this.renderOptions.bind(this)
    this.changeQuantity = this.changeQuantity.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentWillMount() {
    this.props.selected.map(this.checkIfSelected)
    this.setState({
      price: parseInt(this.props.product.selectedVariant.price),
      product: this.props.product,
      selectedVariant: this.props.variants[0],
      variants: this.props.variants
    })
  }

  selectProduct() {
    this.setState({selected: true})
    this.props.selectProduct({
      product: this.state.selectedVariant,
      quantity: this.state.quantity,
      price: this.state.price
    })
  }

  deselectProduct() {
    this.setState({selected: false})
    this.props.deselectProduct(this.state.selectedVariant)
  }

  renderOptions(variant) {
    return (
      <option
      key={variant.id}
      value={this.state.variants.indexOf(variant)}
      >{variant.title}</option>
    )
  }

  checkIfSelected(product) {
    if (this.props.product.title === product.product.productTitle) {
      this.setState({selected: true})
    }
    return
  }

  changeQuantity(event) {
    const quantity = parseInt(event.target.value)
    this.setState({
      quantity: quantity,
      price: this.state.selectedVariant.price * quantity,
    })
  }

  handleChange(event) {
    const idx = parseInt(event.target.value)
    this.setState({
      variantIdx: idx,
      selectedVariant: this.state.variants[idx],
      price: this.state.variants[idx].price * this.state.quantity,
    })
  }

  render() {
    return (
      <Col xs='12' sm='12' md='6' lg='4' xl='4'>
        { this.state.selected ? (
          <div className='slider-product slider-selected'>
            <div onClick={this.selectProduct}>
            <Product
              index={this.props.index}
              product={this.props.product}/>
            </div>
            <div className='slider-product-info'>
              <h1>{this.props.product.title}</h1>
              <h2>{`$ ${this.state.price}.00`}</h2>
              <div className='select-options'>
                <Form>
                  { this.props.showVariants &&
                    <div className='variants'>
                      <h3>{this.props.product.selectedVariant.attrs.variant.option_values[0].name}: </h3>
                      <Input value={this.state.variantId} onChange={this.handleChange} type='select' name='select'>
                        {this.state.variants.map(this.renderOptions)}
                      </Input>
                    </div>
                  }
                  <div className='quantity'>
                    <h3>Quantity: </h3>
                    <Input value={this.state.quantity} onChange={this.changeQuantity} type='select' name='select'>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                    </Input>
                  </div>
                </Form>
              </div>
              <div
              onClick={this.deselectProduct}
              className='slider-button'>
                Deselect
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
              <h2>{`$ ${this.state.price}.00`}</h2>
              <div className='select-options'>
                <Form>
                  { this.props.showVariants &&
                    <div className='variants'>
                      <h3>{this.props.product.selectedVariant.attrs.variant.option_values[0].name}: </h3>
                      <Input value={this.state.variantId} onChange={this.handleChange} type='select' name='select'>
                        {this.state.variants.map(this.renderOptions)}
                      </Input>
                    </div>
                  }
                  <div className='quantity'>
                    <h3>Quantity: </h3>
                    <Input value={this.state.quantity} onChange={this.changeQuantity} type='select' name='select'>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                    </Input>
                  </div>
                </Form>
              </div>
              <div
              onClick={this.selectProduct}
              className='slider-button'>
                Select
              </div>
            </div>
          </div>
        )}
      </Col>

    )
  }
}

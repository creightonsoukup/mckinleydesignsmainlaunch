import React, { Component } from 'react'
import { Form, Input, Button } from 'reactstrap';
import async from 'async';

class ProductDetail extends Component  {
  constructor(props) {
    super(props)
    this.state = {
      variants: this.props.variants,
      price: parseInt(this.props.variants[0].price),
      available: this.props.variants[0].available,
      variantIdx: 0,
      selectedVariant: this.props.variants[0],
      quantity: 1
      }

    this.renderDescription = this.renderDescription.bind(this)
    this.renderOptions = this.renderOptions.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.changeQuantity = this.changeQuantity.bind(this)
    this.addToCart = this.addToCart.bind(this)
  }

  componentWillMount() {
    this.renderDescription()
  }

  renderOptions(variant) {
    return (
      <option
      key={this.state.variants.indexOf(variant)}
      value={this.state.variants.indexOf(variant)}
      >{variant.title}</option>
    )
  }

  handleChange(event) {
    const idx = parseInt(event.target.value)
    this.setState({
      variantIdx: idx,
      selectedVariant: this.state.variants[idx],
      price: this.state.variants[idx].price * this.state.quantity,
    })
  }

  changeQuantity(event) {
    const quantity = parseInt(event.target.value)
    this.setState({
      quantity: quantity,
      price: this.state.selectedVariant.price * quantity,
    })
  }

  renderDescription() {
    const regex = /(<([^>]+)>)/ig
    ,   body = this.props.description
    ,   result = body.replace(regex, '');
    this.setState({description: result})
    console.log(result);
  }

  renderHTML() {
    return {__html: this.props.description}
  }

  addToCart() {
    this.props.addToCart(this.state.selectedVariant, this.state.quantity)
  }

  render() {
    console.log(this.state)
    return (
      <div className='product-info'>
        <h2>{this.props.name}</h2>
        <h3>{`$ ${this.state.price}.00`}</h3>
        { this.state.variants.length > 1 ? (
          <Form>
            <h3>{this.state.selectedVariant.attrs.variant.option_values[0].name}: </h3>
            <Input value={this.state.variantId} onChange={this.handleChange} type='select' name='select'>
              {this.state.variants.map(this.renderOptions)}
            </Input>
            <h3>Quantity: </h3>
            <Input value={this.state.quantity} onChange={this.changeQuantity} type='select' name='select'>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
            </Input>
          </Form>
        ) : (
          <Form>
            <h3>Size: {this.state.selectedVariant.title}</h3><br/>
            <h3>Quantity: </h3>
            <Input value={this.state.quantity} onChange={this.changeQuantity} type='select' name='select'>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
            </Input>
          </Form>
        )}

        <div>
              <p>Details:</p>
              {<div dangerouslySetInnerHTML={this.renderHTML()}/>}
        </div>
        { this.state.available ? (
          <div className='add-to-cart-btn'
          onClick={this.addToCart}
          >Add To Cart</div>
        ) : (
          <Button>Out of Stock</Button>
        )}
      </div>
    )
  }

}

export default ProductDetail

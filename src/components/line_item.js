import React, { Component } from 'react';
import {Row, Col, Form, Input, Button} from 'reactstrap';

class LineItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quantity: '',
      updateButton: false,
      price: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
  }

  componentWillMount() {
    this.setState({quantity: this.props.lineItem.quantity})
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.updateCart(this.state.quantity, this.props.lineItem.id)
    this.setState({updateButton: false})
  }

  handleChange(event) {
    this.setState({
      quantity: event.target.value,
      updateButton: true,
      price: true,
      totalPrice: event.target.value * this.props.lineItem.price
    })
  }

  deleteItem() {
    this.props.deleteItem(this.props.lineItem.id)
  }

  render() {
    console.log(this.state)
    return (
      <tr>
        <td>
          <img src={this.props.lineItem.imageVariants[3].src}/>
        </td>
        <td>
          <div className='lineItem-info'>
            <h2>{this.props.lineItem.title}</h2>
            <h3>{`$ ${this.props.lineItem.price}`}</h3>
            <h3>{this.props.lineItem.variant_title}</h3>
          </div>
        </td>
        <td>
          <Form onSubmit={this.handleSubmit}>
            <Input
            name='quantity'
            type='number'
            value={this.state.quantity}
            onChange={this.handleChange}
            />
            {this.state.updateButton &&
              <div>
              <Button type='submit'>Update</Button>
              <Button onClick={this.deleteItem}><i className="fa fa-delete"></i></Button>
              </div>
            }
          </Form>

        </td>
        <td>
          <div>
            {this.state.price ? (
              <h3>{`$ ${this.state.totalPrice}.00`}</h3>
            ) : (
              <h3>{`$ ${this.props.lineItem.line_price}`}</h3>
            )}
          </div>
        </td>
      </tr>
    )
  }
}

export default LineItem

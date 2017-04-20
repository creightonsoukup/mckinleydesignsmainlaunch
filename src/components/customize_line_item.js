import React, { Component } from 'react';
import {Row, Col, Form, Input, Button} from 'reactstrap';

class CustomizeLineItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
    }
    this.handleSubmit = this.handleSubmit.bind(this)

  }


  handleSubmit(event) {
    event.preventDefault()
    this.setState({updateButton: false})
  }


  render() {
    return (
      <tr>
        <td>
          <img src={this.props.product.imageVariants[3].src}/>
        </td>
        <td>
          <div className='lineItem-info'>
            <h2>{this.props.product.productTitle}</h2>
            <h3>{`$ ${this.props.product.price}`}</h3>
            <h3>{this.props.product.title}</h3>
          </div>
        </td>
        <td>
          <h2>{this.props.quantity}</h2>
        </td>
        <td>
          <h2>{`$ ${this.props.price}`}</h2>
        </td>
      </tr>
    )
  }
}

export default CustomizeLineItem

import React, { Component } from 'react';
import LineItem from './line_item'
import { Table } from 'reactstrap';

class CartList extends Component {
  constructor(props) {
    super(props);

    this.renderCart = this.renderCart.bind(this);
  }

  renderCart(lineItem) {
    const key = lineItem.id
    return (
      <LineItem
      deleteItem={this.props.deleteItem}
      updateCart={this.props.updateCart}
      lineItem={lineItem}
      key={key}/>
    )
  }


  render() {
    if (!this.props.cart.lineItems) {
      return <div></div>
    }
    return (
      <div>
        <Table responsive>
          <thead>
            <tr>
              <th>Item</th>
              <th></th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {this.props.cart.lineItems.map(this.renderCart)}
          </tbody>
        </Table>

      </div>
    )
  }
}

export default CartList

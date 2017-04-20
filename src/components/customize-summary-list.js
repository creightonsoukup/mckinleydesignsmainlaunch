import React, { Component } from 'react';
import CustomizeLineItem from './customize_line_item'
import { Table } from 'reactstrap';

class CustomizeSummaryList extends Component {
  constructor(props) {
    super(props);

    this.renderCart = this.renderCart.bind(this);
  }

  renderCart(lineItem) {
    const key = lineItem.product.id
    return (
      <CustomizeLineItem
      quantity={lineItem.quantity}
      product={lineItem.product}
      price={lineItem.price}
      key={key}/>
    )
  }


  render() {
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
            {this.props.products.map(this.renderCart)}
          </tbody>
        </Table>

      </div>
    )
  }
}

export default CustomizeSummaryList

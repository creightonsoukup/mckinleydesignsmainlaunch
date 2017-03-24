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
import CollectionPanel from './collection_panel'

export default class CollectionList extends Component {

  constructor(props) {
    super(props);
    this.renderProducts = this.renderProducts.bind(this)
  }

  renderProducts(product) {
    const index = this.props.products.indexOf(product)
    const key = product.id
      return (
        <CollectionPanel
          key={key}
          index={index}
          collection={collection}/>
      )
  }

  render() {
    return (
      <Row>
        {this.props.products.map(this.renderCollections)}
      </Row>
    )
  }
}

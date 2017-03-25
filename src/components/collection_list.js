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
    this.renderCollections = this.renderCollections.bind(this)
  }

  renderCollections(collection) {
    const index = this.props.collections.indexOf(collection)
    const key = collection.id
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
        {this.props.collections[0].map(this.renderCollections)}
      </Row>
    )
  }
}

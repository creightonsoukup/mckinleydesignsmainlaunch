import React, { Component } from 'react';
import { Link } from 'react-router'

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


class CollectionPanel extends Component {

  constructor(props) {
    super(props)

    this.state = {
      hover: false,
      collection: this.props.collection
    }
  }

  render() {
    const handle = this.state.collection.name.split(' ').join('-').toLowerCase()
    return (
      <Col
      className="collection-panel" xs='12' sm='12' md='6' lg='6' xl='6'>
      {
        this.state.hover ? (

          <div classname="back">
            <h2>{this.state.collection.name}</h2>
            <h3>{this.state.collection.subtitle}</h3>
            <p>{this.state.collection.description}</p>
            <Link to={`collections/${handle}`}>Explore</Link>
          </div>

        ) : (
          <div className="front">
            <h2>{this.state.collection.name}</h2>
          </div>

        )
      }
      </Col>
    )
}
}



export default CollectionPanel

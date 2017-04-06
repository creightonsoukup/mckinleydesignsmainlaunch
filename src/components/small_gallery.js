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


class SmallGallery extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div>
        <img
        className="product-image"
        src={this.props.image} />

      </div>
    )
  }
}

export default SmallGallery

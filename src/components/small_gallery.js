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
      <span><i
      className="fa fa-angle-left" aria-hidden="true"></i></span>
        <img
        className="product-image"
        src={this.props.image} />
      <span
      onclick={this.props.onImageClick}>
      <i className="fa fa-angle-right" aria-hidden="true"></i></span>
      </div>
    )
  }
}

export default SmallGallery

import React, { Component, PropTypes } from 'react';
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
  static contextTypes = {
    router: PropTypes.object
  }
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div className='small-gallery'>
        <img
        onClick={() => {this.context.router.push(`/product/${this.props.handle}`)}}
        className="product-image"
        src={this.props.image} />
        <div onClick={() => {this.props.changeImage()}} className='arrow'>
        <i className="fa fa-angle-right"></i>
        </div>
      </div>
    )
  }
}

export default SmallGallery

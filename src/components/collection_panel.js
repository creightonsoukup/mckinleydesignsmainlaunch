import React, { Component, PropTypes } from 'react';
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
  static contextTypes = {
    router: PropTypes.object
  };
  constructor(props) {
    super(props)

    this.state = {
      hover: false,
      collection: this.props.collection
    }
  }

  render() {
    console.log(this.props)
    const handle = this.state.collection.name.split(' ').join('-').toLowerCase()
    return (
      <Col xs='12' sm='12' md='6' lg='6' xl='6'
      onMouseEnter = { () => this.setState({hover: false})}
      onMouseLeave = { () => this.setState({hover: false})}
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
          <div onClick={() => {this.context.router.push(`/shop/collections/${handle}`)}} className="front">
            <img className={this.state.collection.id % 2 == 0 ? 'panel-image panel-image-text-left' : 'panel-image panel-image-text-right'} src={`https://s3-us-west-1.amazonaws.com/madison-mckinley/${handle}-text.png`}></img>
            <img className="panel-image" src={`https://s3-us-west-1.amazonaws.com/madison-mckinley/${handle}-pic.jpg`}></img>
            <div className='collection-action'>
            </div>
          </div>

        )
      }
      </Col>
    )
}
}



export default CollectionPanel

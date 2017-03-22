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

class App extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default App;

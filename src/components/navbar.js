import React, {Component} from 'react'
import { Row,  Navbar, Collapse, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'

class Navigation extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: false
    }

    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  render() {
    return (

        <Navbar color="faded" light toggleable>
          <NavbarToggler right onClick={this.toggle} />
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/allproducts">Shop</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/lookbook">Lookbook</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="">Menu</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>

    )
  }
}

export default Navigation

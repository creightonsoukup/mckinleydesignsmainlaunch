import React, {Component} from 'react'
import { Row,  Navbar, Collapse, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'
import Menu from './menu';

class Navigation extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: false,
      menuOpen: false
    }

    this.toggle = this.toggle.bind(this)
    this.toggleMenu = this.toggleMenu.bind(this)
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  toggleMenu() {
    this.setState({menuOpen: !this.state.menuOpen})
  }
  render() {
    console.log(this.state)
    return (
      <div>
        { this.state.menuOpen &&
          <div>
            <Menu
            toggleMenu={this.toggleMenu} />
          </div>
        }
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
                <NavLink type='button' onClick={this.toggleMenu}>Menu</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

export default Navigation

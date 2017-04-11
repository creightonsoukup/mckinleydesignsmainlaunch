import React, {Component} from 'react'
import { Row,  Navbar, Collapse, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'
import Menu from './menu';
import Cart from '../page_components/cart'

class Navigation extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: false,
      menuOpen: false,
      cartOpen: false
    }

    this.toggle = this.toggle.bind(this)
    this.toggleMenu = this.toggleMenu.bind(this)
    this.toggleCart = this.toggleCart.bind(this)
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  toggleMenu() {
    if (this.state.cartOpen) {
      this.setState({cartOpen: !this.state.cartOpen})
      setTimeout(() => {this.setState({menuOpen: !this.state.menuOpen})}, 500);
      return
    }
    this.setState({menuOpen: !this.state.menuOpen})
  }

  toggleCart() {
    if (this.state.menuOpen) {
      this.setState({menuOpen: !this.state.menuOpen})
      setTimeout(() => {this.setState({cartOpen: !this.state.cartOpen})}, 500);
      return
    }
    this.setState({cartOpen: !this.state.cartOpen})
  }
  render() {
    console.log(this.state)
    return (
      <div>
        { this.state.menuOpen &&
          <div>
            <Menu
            toggleMenu={this.toggleMenu}
            toggleCart={this.toggleCart} />
          </div>
        }
        { this.state.cartOpen &&
          <div>
            <Cart
            toggleCart={this.toggleCart} />
          </div>
        }
        <Navbar className='animated fadeIn' color="transparent" light toggleable>
          <NavbarToggler right onClick={this.toggle} />
          <NavbarBrand href="/">MADISON MCKINLEY</NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink onClick={this.toggleMenu}><i className="fa fa-bars" aria-hidden="true"></i></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

export default Navigation

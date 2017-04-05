import React, { Component } from 'react';
import { Row,  Navbar, Collapse, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'
import Menu from './menu';
import { Link } from 'react-router';
import Cart from '../page_components/cart'

class NavbarScroll extends Component {
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

  componentWillUnmount() {
    this.setState({animation: 'fadeOutUp'})
  }
  render() {
    console.log(this.state)
    return (

      <div className='scroll-nav'>
        { this.state.menuOpen &&
          <div>
            <Menu
            toggleCart={this.toggleCart}
            toggleMenu={this.toggleMenu} />
          </div>
        }
        { this.state.cartOpen &&
          <div>
            <Cart
            toggleCart={this.toggleCart} />
          </div>
        }
        <nav className={`nav-items animated ${this.props.animation}`}>
            <div className="search">
              <Link><i className="fa fa-search" aria-hidden="true"></i></Link>
            </div>
            <Link>
              <h1>MADISON MCKINLEY</h1>
            </Link>
            <div className='nav-links'>
              <Link to='/shop/all-products'>Shop</Link>
              <Link>
                <i onClick={this.toggleCart} className="fa fa-shopping-cart" aria-hidden="true"></i>
              </Link>
              <Link><i onClick={this.toggleMenu} className="fa fa-bars" aria-hidden="true"></i></Link>
            </div>
        </nav>
      </div>


    )
  }
}

export default NavbarScroll

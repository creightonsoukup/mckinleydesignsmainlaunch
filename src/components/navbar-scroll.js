import React, { Component,PropTypes } from 'react';
import { Row,  Navbar, Collapse, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'
import Menu from './menu';
import { Link } from 'react-router';
import Cart from '../page_components/cart'
import { fetchCart } from '../actions/index'
import { connect } from 'react-redux'

class NavbarScroll extends Component {
  static contextTypes = {
    router: PropTypes.object
  }
  constructor(props) {
    super(props)

    this.state = {
      isOpen: false,
      menuOpen: false,
      cartOpen: false,
      cart: null,
      lineItemCount: null
    }

    this.toggle = this.toggle.bind(this)
    this.toggleMenu = this.toggleMenu.bind(this)
    this.toggleCart = this.toggleCart.bind(this)
  }

  componentWillMount() {
    this.setState({cart: this.props.cartData, lineItemCount: this.props.lineItemCount})
  }

  componentWillReceiveProps(nextProps) {
    this.setState({cart: nextProps.cartData, lineItemCount: nextProps.lineItemCount, cartOpen: nextProps.cartOpen })
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
    return (

      <Row noGutters className='scroll-nav'>
        { this.state.menuOpen &&
          <div>
            <Menu
            lineItemCount={this.state.lineItemCount}
            toggleCart={this.toggleCart}
            toggleMenu={this.toggleMenu} />
          </div>
        }
        { this.state.cartOpen &&
          <div>
            <Cart
            cartData={this.state.cart}
            toggleCart={this.toggleCart} />
          </div>
        }
        <nav className={`nav-items animated ${this.props.animation}`}>

            <Link to='/'>
              <h1>MADISON MCKINLEY</h1>
            </Link>
            <div className="nav-links-left">
              <Link to='/shop/all-products'>Shop</Link>
              <Link to='/about-the-brand'>About</Link>
            </div>
              <div className='mobile'>
                <Link className='bars'><i onClick={this.toggleMenu} className="fa fa-bars" aria-hidden="true"></i></Link>
              </div>
              <div className='nav-links'>
                <Link>
                  <i onClick={this.toggleCart} className="fa fa-shopping-cart" aria-hidden="true"></i><h6>{this.state.lineItemCount}</h6>
                </Link>
                <Link><i onClick={this.toggleMenu} className="fa fa-bars" aria-hidden="true"></i></Link>
              </div>
        </nav>
      </Row>


    )
  }
}

export default connect(null, { fetchCart })(NavbarScroll)

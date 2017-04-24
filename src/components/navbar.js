import React, {Component} from 'react'
import { Row,  Navbar, Collapse, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'
import Menu from './menu';
import Cart from '../page_components/cart'
import { Link } from 'react-router';

class Navigation extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: false,
      menuOpen: false,
      cartOpen: false,
      cartData: null,
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
      <div>
        { this.state.menuOpen &&
          <div>
            <Menu
            lineItemCount={this.state.lineItemCount}
            toggleMenu={this.toggleMenu}
            toggleCart={this.toggleCart} />
          </div>
        }
        { this.state.cartOpen &&
          <div>
            <Cart
            cartData={this.state.cart}
            lineItemCount={this.state.lineItemCount}
            toggleCart={this.toggleCart} />
          </div>
        }
        <Row noGutters className='fixed-nav'>
          <Link to="/"><h1>MADISON MCKINLEY</h1></Link>
          <div className='bars' onClick={this.toggleMenu}><i className="fa fa-bars" aria-hidden="true"></i></div>
        </Row>
      </div>
    )
  }
}

export default Navigation

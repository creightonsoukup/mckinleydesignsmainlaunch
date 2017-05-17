import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchCart, updateCart, deleteItem } from '../actions/index'
import CartList from '../components/cart_list'
import CartFooter from '../components/cart_footer'
import { Link } from 'react-router'
import { Row,Col } from 'reactstrap';

class Cart extends Component {
  static contextTypes = {
    router: PropTypes.object
  }
  constructor(props) {
    super(props);

    this.state = {
      cart: null
    }
    this.updateCart = this.updateCart.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    this.keepShopping = this.keepShopping.bind(this)
    this.checkout = this.checkout.bind(this)
  }

  componentWillMount() {
    this.setState({cart: this.props.cartData})
  }

  keepShopping() {
    this.context.router.push('/shop/all-products')
  }

  checkout() {
    window.location.href = this.state.cart.checkoutUrl
  }

  updateCart(quantity, id) {
    this.props.updateCart(quantity, id, this.state.cart)
      .then((data) => {
        this.setState({cart: data.payload})
      })
  }

  deleteItem(id) {
    this.props.deleteItem(id, this.state.cart)
      .then((data) => {
        this.setState({cart: data.payload})
      })
  }

  render() {

    if(this.state.cart === null) {
      return <div></div>
    }
    return (
      <div>
      <div className='cart-background animated fadeIn'></div>
        <div className='cart animated slideInRight'>
        <div className='cart-header'>
          <h1>Cart</h1>
          <i onClick={this.props.toggleCart} className="fa fa-times" aria-hidden="true"></i>
        </div>
        {this.state.cart.lineItemCount === 0 ? (
          <div className='empty-cart'>
            <h2>Your Cart Is Empty</h2>
            <h3>Shop <Link to='/shop/collections'>Collections <i className="fa fa-arrow-right"></i></Link></h3>
            <h3>Shop <Link to='/shop/all-products'>All Products <i className="fa fa-arrow-right"></i></Link></h3>
          </div>
        ) : (
          <div className='cart-body'>
            <CartList
            updateCart={this.updateCart}
            deleteItem={this.deleteItem}
            cart={this.state.cart}
            lineItems={this.state.cart.lineItems}/>
          </div>
        )}
        <CartFooter
        keepShopping={this.keepShopping}
        checkout={this.checkout}
        cart={this.state.cart}/>
      </div>
      </div>
    )
  }
}

function mapStateToProps({cart}) {
  return {cart}
}
export default connect(mapStateToProps, { fetchCart, updateCart, deleteItem })(Cart)

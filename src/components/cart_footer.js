import React from 'react'
import { Row, Button } from 'reactstrap';
import { Link } from 'react-router';

const CartFooter = ({cart, checkout, keepShopping}) => {
  return (
    <div className='cart-footer'>
      <div className='keep-shopping button-trans'
        onClick={keepShopping}>
        Keep Shopping
      </div>
      <div className='checkout button-trans'
        onClick={checkout}>
        Checkout
      </div>
      <div className='subtotal'>
        <h3>{`$${cart.subtotal}`}</h3>
      </div>
    </div>
  )
}

export default CartFooter

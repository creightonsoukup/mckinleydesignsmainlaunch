import React from 'react'
import { Row, Button } from 'reactstrap';

const CartFooter = ({cart, checkout}) => {
  return (
    <div className='cart-footer'>
      <div className='keep-shopping button-trans'>
        Keep Shopping
      </div>
      <div
      onClick={checkout}
      className='checkout button-trans'>
        Checkout
      </div>
      <div className='subtotal'>
        <h3>Subtotal: </h3>
        <h3>{`$${cart.subtotal}`}</h3>
      </div>
    </div>
  )
}

export default CartFooter

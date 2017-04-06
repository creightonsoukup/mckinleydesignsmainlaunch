import React, {Component} from 'react';
import { Button, Row, Col } from 'reactstrap'
import { Link } from 'react-router';

const Menu = ({toggleMenu, toggleCart}) => {

    return (
      <div>
        <div onClick={toggleMenu} className=' animated fadeIn menu-background'></div>
        <div className='menu animated slideInDown'>
          <div  className='close-menu'>
            <i onClick={toggleMenu} className="fa fa-times" aria-hidden="true"></i>
            <p onClick={toggleMenu} >CLOSE</p>
          </div>
          <Link to='/shop/collections'>Shop Collections</Link>
          <Link to='/shop/all-products'>Shop All Products</Link>
          <br/>
          <Link to='/create-your-own'>Create Your Own Pendant</Link>
          <Link to='/special-order'>Special Order</Link>
          <br/>
          <Link to='/in-the-saddle'>In The Saddle</Link>
          <Link to='/about-the-brand'>About The Brand</Link>
          <Link to='/meet-the-team'>Meet The Team</Link>
          <Link to='/charity'>Charity</Link>
          <br/>
          <Link onClick={toggleCart}>Cart</Link>
          <Link to='/contact'>Contact Us</Link>
          <Link to='/'><img src='https://s3-us-west-1.amazonaws.com/madison-mckinley/Anvil.png'/></Link>
          <div className="social">
            <Link href="https://www.pinterest.com/madkooldesigns"><i className="fa fa-pinterest-box" aria-hidden="true"></i></Link>
            <Link href="https://www.pinterest.com/madkooldesigns"><i className="fa fa-twitter-box" aria-hidden="true"></i></Link>
            <Link href="https://www.facebook.com/madisonmckinleydesigns/"><i className="fa fa-facebook-box" aria-hidden="true"></i></Link>
            <Link href="https://www.instagram.com/madisonmckinleydesigns"><i className="fa fa-instagram" aria-hidden="true"></i></Link>
            <Link href="https://www.instagram.com/madisonmckinleydesigns"><i className="fa fa-linkedin-box" aria-hidden="true"></i></Link>
          </div>
        </div>
      </div>
    )

}

export default Menu

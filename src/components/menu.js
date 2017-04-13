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
      
          </div>
          <h2>Shop</h2>
          <Row className='shop'>
            <Col xs='12' sm='12' md='6' lg='6' xl='6'><Link to='/shop/collections'> Collections</Link></Col>
            <Col xs='12' sm='12' md='6' lg='6' xl='6'> <Link to='/shop/all-products'>Products</Link></Col>
            <Col xs='12' sm='12' md='6' lg='6' xl='6'><Link to='/create-your-own'>Create Your Own</Link></Col>
            <Col xs='12' sm='12' md='6' lg='6' xl='6'> <Link to='/special-order'>Special Order</Link></Col>
          </Row>
          <br/>
          <h2>The Brand</h2>
          <Row className='shop'>
            <Col xs='12' sm='12' md='6' lg='6' xl='6'><Link to='/about-the-brand'>About</Link></Col>
            <Col xs='12' sm='12' md='6' lg='6' xl='6'><Link to='/charity'>Charity</Link></Col>
            <Col xs='12' sm='12' md='6' lg='6' xl='6'><Link to='/meet-the-team'>Meet The Team</Link></Col>
            <Col xs='12' sm='12' md='6' lg='6' xl='6'><Link to='/in-the-saddle'>In The Saddle</Link></Col>
          </Row>
          <br/>
          <Link onClick={toggleCart}><i className="fa fa-shopping-cart" aria-hidden="true"></i></Link>
          <Link to='/contact'>Contact</Link>
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

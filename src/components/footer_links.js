import React, { Component } from 'react';
import { Link } from 'react-router'

const FooterLinks = () => {
  return (
    <div className='links'>
      <div className="social">
        <span><i className="fa fa-copyright" aria-hidden="true"></i>Madison Mckinley Designs</span>
      </div>
      <div className="customer-links">
        <Link to='/customer-care'>Customer Care</Link>
        <Link to="/policies">Policies</Link>
        <Link to="/contact">Contact</Link>
        <Link href="https://www.pinterest.com/madkooldesigns"><i className="fa fa-pinterest" aria-hidden="true"></i></Link>
        <Link href="https://www.facebook.com/madisonmckinleydesigns/"><i className="fa fa-facebook-square" aria-hidden="true"></i></Link>
        <Link href="https://www.instagram.com/madisonmckinleydesigns"><i className="fa fa-instagram" aria-hidden="true"></i></Link>
      </div>

    </div>
  )
}

export default FooterLinks

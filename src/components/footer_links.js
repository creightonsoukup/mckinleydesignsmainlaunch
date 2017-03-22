import React, { Component } from 'react';
import { Link } from 'react-router'

const FooterLinks = () => {
  return (
    <div>
      <Link href="https://www.pinterest.com/madkooldesigns"><i className="fa fa-pinterest" aria-hidden="true"></i></Link>
      <Link href="https://www.facebook.com/madisonmckinleydesigns/"><i className="fa fa-facebook-square" aria-hidden="true"></i></Link>
      <Link href="https://www.instagram.com/madisonmckinleydesigns"><i className="fa fa-instagram" aria-hidden="true"></i></Link>
      <Link to="/contact">Contact</Link>
      <Link to='/customer-care'>Customer Care</Link>
      <Link to="/policies">Policies</Link>
      <p>{"2017 Madison Mckinley Designs"}</p>
      <i className="fa fa-copyright" aria-hidden="true"></i>
    </div>
  )
}

export default FooterLinks

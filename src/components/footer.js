import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router';

import FooterLinks from './footer_links'
import EmailSignup from '../containers/email_signup'

const Footer = (props) => {
    if(!props.show) {
      return <div></div>
    }
    return (
      <Row className="footer">
        <Col xs='12' sm='12' md='6' lg='6' xl='6'>
        <EmailSignup />
        </Col>
        <Col className='links' xs='12' sm='12' md='6' lg='6' xl='6'>
          <div className="social">
            <Link href="https://www.pinterest.com/madkooldesigns"><i className="fa fa-pinterest-box" aria-hidden="true"></i></Link>
            <Link href="https://www.pinterest.com/madkooldesigns"><i className="fa fa-twitter-box" aria-hidden="true"></i></Link>
            <Link href="https://www.facebook.com/madisonmckinleydesigns/"><i className="fa fa-facebook-box" aria-hidden="true"></i></Link>
            <Link href="https://www.instagram.com/madisonmckinleydesigns"><i className="fa fa-instagram" aria-hidden="true"></i></Link>
            <Link href="https://www.instagram.com/madisonmckinleydesigns"><i className="fa fa-linkedin-box" aria-hidden="true"></i></Link>
          </div>
          <Link to='/customer-care'>Customer Care</Link>
          <Link to="/privacy">Privacy Policies</Link>
          <Link to="/terms">Terms of Use</Link>
          <Link to="/contact">Contact</Link>
        </Col>
        <Col xs='12' sm='12' md='12' lg='12' xl='12'>
            <FooterLinks />
        </Col>
      </Row>
    )
 }

export default Footer

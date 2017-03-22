import React, { Component } from 'react';

import FooterLinks from './footer_links'
import EmailSignup from '../containers/email_signup'

const Footer = (props) => {
    if(!props.show) {
      return <div></div>
    }
    return (
      <div>
        <EmailSignup />
        <FooterLinks />
      </div>
    )
 }

export default Footer

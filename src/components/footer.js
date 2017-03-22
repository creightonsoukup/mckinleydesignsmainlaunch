import React, { Component } from 'react';

import FooterLinks from './footer_links'
import EmailSignup from '../containers/email_signup'

const Footer = () => {
    return (
      <div>
        <EmailSignup />
        <FooterLinks />
      </div>
    )
 }

export default Footer

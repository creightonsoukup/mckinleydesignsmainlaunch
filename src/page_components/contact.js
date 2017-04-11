import React from 'react';
import NavbarScroll from '../components/navbar-scroll'
import Footer from '../components/footer'
import EmailSignup from '../containers/email_signup'
import ContactForm from '../containers/contact_form'

const Contact = () => {
  return (
    <div>
      <div className='contact'>
        <NavbarScroll />
        <div className='sign-up'>
          <h1>DROP US A LINE</h1>
          <ContactForm />
        </div>
      </div>
      <Footer
        show={true} />
    </div>
  )
}

export default Contact

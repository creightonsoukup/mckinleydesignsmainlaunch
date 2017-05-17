import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchCart } from '../actions/index'
import NavbarScroll from '../components/navbar-scroll'
import Footer from '../components/footer'
import EmailSignup from '../containers/email_signup'
import ContactForm from '../containers/contact_form'

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cart: null,
      cartOpen: false,
      cartLineItems: null
    }
  }

  componentWillMount() {
    this.props.fetchCart()
      .then((data) => {
        this.setState({cart: data.payload, cartLineItems: data.payload.lineItemCount})
      })
  }

  render() {
    return (
      <div>
        <div className='contact'>
          <NavbarScroll
          lineItemCount={this.state.cartLineItems}
          cartOpen={this.state.cartOpen}
          cartData={this.state.cart} />
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
}

export default connect(null, {fetchCart})(Contact)

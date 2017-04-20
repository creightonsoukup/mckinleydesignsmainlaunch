import React from 'react';
import NavbarScroll from '../components/navbar-scroll'
import Footer from '../components/footer'

const Terms = () => {
  return (
    <div>
      <NavbarScroll />
      <div className='terms'>
        <h1>{'Terms of Use'}</h1>
        <h2>{'PROCESSING'}</h2>
        <p>{'Our goal is to process all orders within one business day of receipt. '}</p>
        <h2>{'SHIPPING POLICY'}</h2>
        <p>{'All orders will be shipped within 3-4 business days. We will email you tracking information the day we ship it. '}</p>
        <h2>{'RETURNS'}</h2>
        <p>{'All items may be returned within 10 days. Merchandise damaged or shipped incorrectly if notice of condition is given within of receiving the merchandise. Returns will be credited to Customer’s or replaced. Please note that shipping charges are nonrefundable.'}</p>
        <h2>{'PAYMENT'}</h2>
        <p>{'Visa, Mastercard, American Express, Discover. '}</p>
        <h2>{'SALES TAX'}</h2>
        <p>{'Sales tax on the merchandise and shipping total is charged for Texas only. Out of state will not be charged sales tax.'}</p>
        <h2>{'REPAIR POLICY'}</h2>
        <p>{'We will replace any item purchased within 6 months for free. All items purchased more than 6 months is subject to repair fee. Please email sales@madisonmckinley.us for repairs.'}</p>
        <h2>{'ADDITIONAL QUESTIONS'}</h2>
        <p>{'If you have any other questions or concerns, please contact sales@madisonmckinley.us'}</p>
      </div>
      <Footer
      show={true} />
    </div>

  )
}

export default Terms

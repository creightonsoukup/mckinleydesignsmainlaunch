import React, { Component } from 'react';
import BannerImage from '../components/banner_image'
import { Container, Row } from 'reactstrap';
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import SpecialOrderInfo from '../components/special-order-info'
import NavbarScroll from '../components/navbar-scroll'


class SpecialOrder extends Component {
  render() {
    return (
      <div className='special-order'>
      <Navbar/>
      { window.innerWidth > 786 ? (
        <div>
        <Navbar/>
        <BannerImage
            fileName={'special-order.jpg'}/>
        <Row fluid className='animated fadeIn'>
              <h1 className="collection-title">{('Special Order').toUpperCase()}</h1>
              <SpecialOrderInfo />
        </Row>
        </div>
      ) : (
        <div>
          <NavbarScroll />
          <h1 className="mobile-title">{('Charity').toUpperCase()}</h1>
          <SpecialOrderInfo />
        </div>
      )}
      <Footer
      homepage={true}
      show={true}/>
      </div>
    )
  }
}

export default SpecialOrder

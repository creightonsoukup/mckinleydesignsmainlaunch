import React, { Component } from 'react';
import BannerImage from '../components/banner_image'
import { Container } from 'reactstrap';
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import SpecialOrderInfo from '../components/special-order-info'

class SpecialOrder extends Component {
  render() {
    return (
      <div className='special-order'>
      <Navbar/>
      <BannerImage
          fileName={'special-order.jpg'}/>
      <Container fluid className='animated fadeIn'>
        <h1 className="collection-title">{('Special Order').toUpperCase()}</h1>
        <SpecialOrderInfo />
        <Footer
        show={true}/>
      </Container>
      </div>
    )
  }
}

export default SpecialOrder

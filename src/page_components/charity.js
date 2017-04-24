import React, { Component } from 'react';
import BannerImage from '../components/banner_image'
import { Container } from 'reactstrap';
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import CharityInfo from '../components/charity-info'

class Charity extends Component {
  render() {
    return (
      <div className='charity'>
      <Navbar/>
      <BannerImage
          fileName={'charity.jpg'}/>
      <Container fluid >
        <h1 className="collection-title">{('Charity').toUpperCase()}</h1>
        <CharityInfo />
      </Container>
      <Footer
      homepage={false}
      show={true}/>
      </div>
    )
  }
}

export default Charity

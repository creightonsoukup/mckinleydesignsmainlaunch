import React, { Component } from 'react';
import BannerImage from '../components/banner_image'
import { Container } from 'reactstrap';
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import CharityInfo from '../components/charity-info'
import NavbarScroll from '../components/navbar-scroll'

class Charity extends Component {
  render() {
    return (
      <div className='charity'>
      { window.innerWidth > 576 ? (
        <div>
        <Navbar/>
        <BannerImage
            fileName={'charity.jpg'}/>
        <Container fluid >
              <h1 className="collection-title">{('Charity').toUpperCase()}</h1>
              <CharityInfo />
        </Container>
        </div>
      ) : (
        <div>
          <NavbarScroll/>
          <h1 className="mobile-title">{('Charity').toUpperCase()}</h1>
          <CharityInfo />
        </div>
      )}
      <Footer
      homepage={true}
      show={true}/>
      </div>
    )
  }
}

export default Charity

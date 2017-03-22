import React, { Component } from 'react';
import Navigation from '../components/navbar'
import BannerImage from '../components/banner_image'
import Footer from '../components/footer'

const AllCollections = (props) => {
  return (
    <div>
      <Navigation/>
      <BannerImage
      fileName={'collections'} />
      <Footer
      show={true}/>
    </div>
  )
}

export default AllCollections

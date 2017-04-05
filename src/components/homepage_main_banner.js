import React, { Component } from 'react';
import ImageLoader from 'react-imageloader'
import { Row, Col, Container} from 'reactstrap'

const HomepageMainBanner = ({fileName, fade}) => {
  const componentClasses = []
  if (fade) {
    componentClasses.push('fade')
  }
  return (
    <Row noGutters>
        <img
        src={`https://s3-us-west-1.amazonaws.com/madison-mckinley/banner-images/${fileName}`}/>
    </Row>
  )
}

export default HomepageMainBanner

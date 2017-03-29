import React, { Component } from 'react';
import ImageLoader from 'react-imageloader'
import { Row, Col, Container} from 'reactstrap'

const BannerImage = (props) => {
  return (
    <Row noGutters className="banner-component">
        <img
        className='banner-image'
        src={`https://s3-us-west-1.amazonaws.com/madison-mckinley/banner-images/${props.fileName}`}/>
    </Row>
  )
}

export default BannerImage

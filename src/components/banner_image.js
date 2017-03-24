import React, { Component } from 'react';
import ImageLoader from 'react-imageloader'
import { Row, Col, Container} from 'reactstrap'

const BannerImage = (props) => {
  return (
    <Row noGutters className="banner">
        <ImageLoader
        src={`/src/images/${props.fileName}`}
        >
        Image load failed!
        </ImageLoader>
    </Row>
  )
}

export default BannerImage

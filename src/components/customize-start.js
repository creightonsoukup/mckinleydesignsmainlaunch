import React from 'react';
import BannerImage from './banner_image'
import CustomizeLoader from './customize_loader'
import { Container } from 'reactstrap'
import Footer from './footer'


const CustomizeStart = ({start}) => {
  return (
    <div>
    <BannerImage
        fileName={'customize.jpg'}/>
    <Container fluid className='customize-start'>
      <h1 className="collection-title">{('Create Your Own').toUpperCase()}</h1>
      <CustomizeLoader start={start} />
    </Container>
    </div>
  )
}

export default CustomizeStart

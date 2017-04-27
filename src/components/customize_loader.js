import React, { Component } from 'react'
import { Button, Col, Row } from 'reactstrap';

const CustomizeLoader = (props) => {
  return (
    <Row className='customize-intro'>
      { window.innerWidth < 576 &&
        <Col xs="12" s='12' md='8' lg='8' xl='8' className='mobile-title'>
          <h3>{'Create Your Own'}</h3>
        </Col>
      }
      <Col xs="12" s='12' md='8' lg='8' xl='8' className='text'>
        <h3>{'You be the designer and layer on the love!'}</h3>
      </Col>
      <Col xs="12" s='12' md='4' lg='4' xl='4' className='button'>
        <div onClick={props.start}>Start Designing</div>
      </Col>
    </Row>
  )
}

export default CustomizeLoader

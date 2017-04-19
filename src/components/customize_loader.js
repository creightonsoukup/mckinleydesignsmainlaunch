import React, { Component } from 'react'
import { Button, Col, Row } from 'reactstrap';

const CustomizeLoader = (props) => {
  console.log(props)
  return (
    <Row className='customize-intro'>
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

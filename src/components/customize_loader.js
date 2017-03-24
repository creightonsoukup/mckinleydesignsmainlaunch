import React, { Component } from 'react'
import { Button, Col, Row } from 'reactstrap';

const CustomizeLoader = (props) => {
  console.log(props)
  return (
    <Row>
      <Col xs="12" s='12' md='8' lg='9' xl='9'>
        <h3>{'Pick from any of our handmade pendants and add one (or more..the more the merrier in our opinion)'}</h3>
        <h3>{'Chain lengths come in 18, 24, 28, and 32 inches.'}</h3>
        <h3>{'You be the designer and layer on the love!'}</h3>
      </Col>
      <Col xs="12" s='12' md='4' lg='3' xl='3'>
        <Button
          onClick={props.startButtonClick}>Start</Button>
      </Col>
    </Row>
  )
}

export default CustomizeLoader

import React from 'react';
import { Button, Col, Row } from 'reactstrap'
const CustomizeNav = (props, event) => {

  return (
    <div>
      <Row>
        <Col xs='12' sm='12' md='3' lg='3' xl='3'>
          <Button
          onClick={props.lastPage}
          >Back</Button>
        </Col>
        <Col>
          <Button
          value={'pendants'}
          onClick={props.showPendants}
          >Choose Pendant</Button>
        </Col>
        <Col>
          <Button
            value={'chains'}
            onClick={props.showChains}
          >Choose Chain</Button>
        </Col>
        <Col>
          <Button
            value={'summary'}
            onClick={props.showSummary}
          >Summary</Button>
        </Col>
      </Row>
    </div>
  )
}

export default CustomizeNav

import React from 'react';
import { Button, Col, Row } from 'reactstrap'
const CustomizeNav = (props, event) => {

  return (
    <div className='customize-nav'>
      <Row>
        <Col xs='12' sm='12' md='4' lg='4' xl='4'>
          <div className='custom-nav-btn'
          value={'pendants'}
          onClick={props.showPendants}
          >Pick Your Pendant</div>
          { props.pendants &&
            <div className='btn-selected'></div>
          }
        </Col>
        <Col xs='12' sm='12' md='4' lg='4' xl='4'>
          <div className='custom-nav-btn'
            value={'chains'}
            onClick={props.showChains}
          >Choose Your Chain</div>
          { props.chains &&
            <div className='btn-selected'></div>
          }
        </Col>
        <Col xs='12' sm='12' md='4' lg='4' xl='4'>
          <div className='custom-nav-btn'
            value={'summary'}
            onClick={props.showSummary}
          >Summary</div>
          { props.summary &&
            <div className='btn-selected'></div>
          }
        </Col>
      </Row>
    </div>
  )
}

export default CustomizeNav

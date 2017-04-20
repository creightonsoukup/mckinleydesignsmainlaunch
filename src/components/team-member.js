import React from 'react'
import { Row, Col } from 'reactstrap'

const TeamMember = (props) => {
  const handle = props.member.name.toLowerCase().split(' ').join('+')
  return (
    <Row className='member'>
      <Col sm='12' md='6' lg='6' xl='6'>
        <img src={`https://s3-us-west-1.amazonaws.com/madison-mckinley/team/${handle}.jpg`}/>
      </Col>
      <Col sm='12' md='6' lg='6' xl='6' className='content'>
        <h2>{props.member.name}</h2>
        <h3>{props.member.title}</h3>
        <br/>
        <h3>Homebase: {props.member.home}</h3>
        <h3>Favorite Food: {props.member.food}</h3>
        <h3>Favorite Thing To Do During Spare Time: {props.member.fav_thing}</h3>
        <h3>Guilty Pleasure: {props.member.guilty}</h3>
        <h3>{"Can't Live Without: "}{props.member.cant_live_without}</h3>
      </Col>
    </Row>
  )
}

export default TeamMember

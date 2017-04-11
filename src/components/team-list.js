import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
  Col,
  Jumbotron,
  Button,
  Form,
} from 'reactstrap';
import TeamMember from './team-member'

export default class TeamList extends Component {

  constructor(props) {
    super(props);
    this.renderTeam = this.renderTeam.bind(this)
  }

  renderTeam(member) {
    const index = this.props.team.indexOf(member)
    const key = member.id
      return (
        <Col key={key} sm='12' md='12' lg='12' xl='12'>
          <TeamMember
          member={member} />
        </Col>
      )
  }

  render() {
    return (
      <Row className='team-list'>
        {this.props.team.map(this.renderTeam)}
      </Row>
    )
  }
}

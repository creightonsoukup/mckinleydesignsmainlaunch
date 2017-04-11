import React, { Component } from 'react';
import BannerImage from '../components/banner_image'
import { Container } from 'reactstrap';
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import TeamList from '../components/team-list'
import {fetchTeam} from '../actions/index'
import { connect } from 'react-redux'

class Team extends Component {

  componentWillMount() {
    this.props.fetchTeam()
  }
  render() {
    if (this.props.team.length === 0) {
      return <div></div>
    }
    return (
      <div className='team'>
      <Navbar/>
      <BannerImage
          fileName={'team.jpg'}/>
      <Container fluid >
        <h1 className="collection-title">{('Meet The Amazing Humans Behind the Madison Mckinley Team').toUpperCase()}</h1>
        <TeamList
        team={this.props.team[0]} />
        <Footer
        show={true}/>
      </Container>
      </div>
    )
  }
}

function mapStateToProps({team}) {
  return {team}
}

export default connect(mapStateToProps, {fetchTeam})(Team)
import React, { Component } from 'react';
import BannerImage from '../components/banner_image'
import { Container, Row } from 'reactstrap';
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import TeamList from '../components/team-list'
import {fetchTeam, fetchCart} from '../actions/index'
import { connect } from 'react-redux'
import NavbarScroll from '../components/navbar-scroll';

class Team extends Component {

  constructor(props) {
    super(props);

    this.state = {
      cart: null,
      cartOpen: false,
      cartLineItems: null
    }
  }

  componentWillMount() {
    this.props.fetchTeam()

    this.props.fetchCart()
      .then((data) => {
        this.setState({cart: data.payload, cartLineItems: data.payload.lineItemCount})
      })

  }
  render() {
    if (this.props.team.length === 0) {
      return <div></div>
    }
    return (
      <div className='team'>
      { window.innerWidth > 576 ? (
        <div>
        <BannerImage
            fileName={'team.jpg'}/>
        <Container fluid >
        <Navbar
        lineItemCount={this.state.cartLineItems}
        cartOpen={this.state.cartOpen}
        cartData={this.state.cart}/>
        <Row>
          <h1 className="collection-title">{('Meet The Amazing Humans Behind the Madison Mckinley Team').toUpperCase()}</h1>
        </Row>
          <TeamList
          team={this.props.team[0]} />
        </Container>
        </div>
      ) : (
        <div>
        <NavbarScroll
        lineItemCount={this.state.cartLineItems}
        cartOpen={this.state.cartOpen}
        cartData={this.state.cart}/>
        <Row>
        <h1 className='mobile-title'>{'Meet The Team'}</h1>
        </Row>
        <TeamList
        team={this.props.team[0]} />
        </div>
      )}

      <Footer
      homepage={true}
      show={true}/>
      </div>
    )
  }
}

function mapStateToProps({team}) {
  return {team}
}

export default connect(mapStateToProps, {fetchTeam, fetchCart})(Team)

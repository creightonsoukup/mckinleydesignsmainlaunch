import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loader from '../components/customize_loader'
import { fetchChains, fetchPendants } from '../actions/index'

class Customize extends Component {
  constructor(props) {
    super(props);

    this.state= {
      chains: [],
      pendants: []
    }
  }

  componentWillMount() {
    this.props.fetchChains()
      .then((data) => {
        this.setState({chains: data.payload})
      })
    this.props.fetchPendants()
      .then((data) => {
        this.setState({pendants: data.payload})
      })
  }


  render() {
    console.log(this.state)
    return (
      <div>
        <Loader />
        Customize
      </div>
    )
  }
}

function mapStateToProps({chains, pendants}) {
  return ({chains, pendants})
}

export default connect(mapStateToProps, {fetchPendants, fetchChains})(Customize)

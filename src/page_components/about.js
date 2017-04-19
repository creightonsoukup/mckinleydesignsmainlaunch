import React, { Component } from 'react'
import Footer from '../components/footer'
import { connect } from 'react-redux';
import {  fetchCart } from '../actions/index'
import Navigation from '../components/navbar-scroll'
import VideoPlayer from '../components/video_player'

class About extends Component {

  constructor(props) {
    super(props);

    this.state = {
      cartOpen: false,
      cart: null,
      cartLineItems: null,
      playBrandVideo: false
    }
  }

  componentWillMount() {
    this.props.fetchCart()
      .then((data) => {
        this.setState({cart: data.payload, cartLineItems: data.payload.lineItemCount})
      })
  }

  render() {
    const placeholderVideo = 'https://s3-us-west-1.amazonaws.com/madison-mckinley/loop_video.mov'
    const logo = 'https://s3-us-west-1.amazonaws.com/madison-mckinley/ANVIL-LOGO.png'
    return (
      <div className='animated fadeIn about-background'>
      <Navigation
      lineItemCount={this.state.cartLineItems}
      cartOpen={this.state.cartOpen}
      cartData={this.state.cart}/>
      {this.state.playBrandVideo ? (
        <div>
          <iframe src="https://player.vimeo.com/video/209853714?autoplay=1&loop=1&autopause=0" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
        </div>
      ) : (
        <div className="homepage-video" onClick={() => this.setState({playBrandVideo: true})}>
          <div className="video-text" >
            <div className="text-block-2">
            <h2>Brand Video</h2>
            </div>
            <div className="video-action">
              <h2>Click to Play</h2>
            </div>
          </div>
          <div>
            <VideoPlayer loop={true} video={placeholderVideo} playVideo={this.playBrandVideo}/>
          </div>
        </div>
      )}
      <div className="logo">
        <img src={logo} />
      </div>
      <div className='about'>
      </div>
      <Footer
      show={true}/>
      </div>
    )
  }

}

export default connect(null, { fetchCart })(About)

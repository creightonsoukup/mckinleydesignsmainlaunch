import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';
import Navigation from '../components/navbar'
import VideoPlayer from '../components/video_player'
import ProductSlider from '../components/product_slider'
import BannerImage from '../components/banner_image'
import { fetchMadisonFavorites } from '../actions/index'
import Footer from '../components/footer'
import Quote from '../containers/quote'

class Homepage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      favorites: [],
      playBrandVideo: false
    }

    this.playBrandVideo = this.playBrandVideo.bind(this)
  }

  componentWillMount() {
    this.props.fetchMadisonFavorites()
      .then((data) => {
        this.setState({favorites: data.payload})
      })
  }

  playBrandVideo() {
    this.setState({playBrandVideo: true})
  }

  render() {
    console.log(this.state)
    const horseVideo = 'https://res.cloudinary.com/madisonmckinley/video/upload/fl_advanced_resize/v1490312893/horse_video.mov'
    const placeholderVideo = 'https://res.cloudinary.com/madisonmckinley/video/upload/v1490312893/loop_video_n0thkq.mov'
    const brandVideo = ''

    return (

      <div>
        <VideoPlayer loop={false} video={horseVideo}/>
        <Navigation />
        <BannerImage fileName='homepage1.jpg'/>
        { this.state.favorites.length > 0 &&
          <ProductSlider
          products={this.state.favorites} />
        }
        {this.state.playBrandVideo ? (
          <div>
            <iframe src="https://player.vimeo.com/video/209853714?autoplay=1&loop=1&autopause=0" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
          </div>
        ) : (
          <VideoPlayer loop={true} video={placeholderVideo} playVideo={this.playBrandVideo}/>
        )}
        <BannerImage fileName='quote.jpg'/>
        <Quote />
        <BannerImage fileName='homepage1.jpg'/>
        <BannerImage fileName='homepage1.jpg'/>
        <Footer
        show={true} />
      </div>
    )
  }
}

function mapStateToProps({collection}) {
  return {collection}
}

export default connect(mapStateToProps, { fetchMadisonFavorites })(Homepage)

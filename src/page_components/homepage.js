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
import _ from 'lodash';
import HomepageLoader from '../components/homepage_loader'
import HomepageMainBanner from '../components/homepage_main_banner'

class Homepage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      favorites: [],
      playBrandVideo: false,
      loadingScreen: true
    }

    this.playBrandVideo = this.playBrandVideo.bind(this)
  }

  componentWillMount() {
    this.props.fetchMadisonFavorites()
      .then((data) => {
        this.setState({favorites: data.payload})
      })
  }

  playBrandVideo(e) {
    console.log('j')
    e.preventDefault()
    if (e.shiftKey) {
      this.setState({playBrandVideo: true})
    }
  }

  render() {
    const horseVideo = 'https://res.cloudinary.com/madisonmckinley/video/upload/fl_advanced_resize/v1490481031/homepage-loader.mp4'
    const otherHorseVideo ='https://res.cloudinary.com/madisonmckinley/video/upload/fl_advanced_resize/v1490329828/horse-video.mov'
    const placeholderVideo = 'https://res.cloudinary.com/madisonmckinley/video/upload/v1490312893/loop_video_n0thkq.mov'
    const loader = _.debounce(() => {this.setState({loadingScreen: false})}, 2500)
    if(this.state.loadingScreen) {
    loader()
    return (
        <div>
          <HomepageLoader video={horseVideo}/>
        </div>
    )
    }

    return (
      <div className='homepage'>
        <Navigation />
        <div className='banner1 banner parallax parallax-1'>
          <h2>ITALIAN COWBOY COOL</h2>
          <h4>SHOP NOW</h4>
        </div>
        <div className='content'>
        { this.state.favorites.length > 0 &&
          <ProductSlider
          products={this.state.favorites} />
        }
        {this.state.playBrandVideo ? (
          <div>
            <iframe src="https://player.vimeo.com/video/209853714?autoplay=1&loop=1&autopause=0" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
          </div>
        ) : (
          <div className="homepage-video" onClick={() => this.setState({playBrandVideo: true})}>
            <div className="video-text" >
              <div className="text-block">
                <h2>Love Your Freedom</h2>
                <h2>Live Your Moment</h2>
                <h2>Own Your Vision</h2>
              </div>
              <div className="text-block-2">
                <h2>Brand Video</h2>
              </div>
              <div className="video-action">
                <h2>Press</h2><span>SPACEBAR</span><h2>To Play</h2>
              </div>

            </div>
            <div>
              <VideoPlayer loop={true} video={placeholderVideo} playVideo={this.playBrandVideo}/>
            </div>
          </div>
        )}
        </div>
        <div className='quote banner parallax parallax-2'>
          <Quote />
        </div>
        <div className="content">
        <div className="banner2">
          <div className="content">
            <h2>DISCOVER <br/>OUR STORY</h2>
            <h3>LEARN MORE<i className="fa fa-arrow-right" aria-hidden="true"></i></h3>
          </div>
        </div>
        <div className="banner3">
          <div className="content">
            <h2>MEANWHILE,<br/>IN THESADDLE</h2>
            <h3>STAY UP TO DATE WITH EVERYTHING MADKOOL</h3>
            <h4>FOLLOW US ON THE BLOG<i className="fa fa-arrow-right" aria-hidden="true"></i></h4>
          </div>
        </div>
        <Footer
        show={true} />
        </div>
      </div>
    )
  }
}

function mapStateToProps({collection}) {
  return {collection}
}

export default connect(mapStateToProps, { fetchMadisonFavorites })(Homepage)

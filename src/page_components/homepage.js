import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';
import Navigation from '../components/navbar';
import VideoPlayer from '../components/video_player';
import ProductSlider from '../components/product_slider';
import BannerImage from '../components/banner_image';
import { fetchMadisonFavorites, addToCart, fetchCart } from '../actions/index';
import Footer from '../components/footer';
import Quote from '../containers/quote';
import _ from 'lodash';
import HomepageLoader from '../components/homepage_loader';
import HomepageMainBanner from '../components/homepage_main_banner';
import NavbarScroll from '../components/navbar-scroll';
import Waypoint from 'react-waypoint';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Starling from '../components/starling';
import 'whatwg-fetch';

class Homepage extends Component {
  static contextTypes = {
    router: PropTypes.object
  };
  constructor(props) {
    super(props);

    this.state = {
      favorites: [],
      playBrandVideo: false,
      loadingScreen: true,
      scrollNav: false,
      banner1ClassNames: [
        'banner1',
        'parallax',
        'banner',
        'animated',
        'fadeIn'
      ],
      cart: null,
      cartOpen: false,
      cartLineItems: null
    };

    this.playBrandVideo = this.playBrandVideo.bind(this);
    this.navOnLeave = this.navOnLeave.bind(this);
    this.navOnEnter = this.navOnEnter.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  componentWillMount() {
    this.props.fetchMadisonFavorites().then(data => {
      this.setState({ favorites: data.payload });
    });
    this.props.fetchCart().then(data => {
      this.setState({
        cart: data.payload,
        cartLineItems: data.payload.lineItemCount
      });
    });
  }

  playBrandVideo(e) {
    e.preventDefault();
    if (e.shiftKey) {
      this.setState({ playBrandVideo: true });
    }
  }

  navOnLeave() {
    if (this.state.banner1ClassNames.length === 6) {
      this.setState({
        scrollNav: true
      });
    } else {
      this.setState({
        banner1ClassNames: ['banner1-darken', ...this.state.banner1ClassNames],
        scrollNav: true
      });
    }
  }

  navOnEnter() {
    if (this.state.banner1ClassNames.length === 6) {
      const classnames = this.state.banner1ClassNames.splice(1, 5);
      this.setState({
        scrollNav: false,
        banner1ClassNames: classnames
      });
    } else {
      this.setState({
        scrollNav: false
      });
    }
  }

  addToCart(product, quantity) {
    this.props.addToCart(product, quantity, this.state.cart).then(data => {
      localStorage.setItem('MckinleyCart', data.payload.id);
      this.setState({
        cart: data.payload,
        cartLineItems: data.payload.lineItemCount,
        cartOpen: true,
        scrollNav: true
      });
    });
  }

  render() {
    const horseVideo =
      'https://s3-us-west-1.amazonaws.com/madison-mckinley/homepage-loader.mp4';
    const placeholderVideo =
      'https://s3-us-west-1.amazonaws.com/madison-mckinley/loop_video.mov';
    const loader = _.debounce(() => {
      this.setState({ loadingScreen: false });
    }, 2500);
    if (this.state.loadingScreen) {
      loader();
      return (
        <div className="loader animated fadeIn">
          <HomepageLoader video={horseVideo} />
        </div>
      );
    }
    return (
      <div className="homepage animated fadeIn">
        {window.innerWidth < 576 || this.state.scrollNav ? (
          <NavbarScroll
            lineItemCount={this.state.cartLineItems}
            cartOpen={this.state.cartOpen}
            cartData={this.state.cart}
          />
        ) : (
          <Navigation
            lineItemCount={this.state.cartLineItems}
            cartOpen={this.state.cartOpen}
            cartData={this.state.cart}
          />
        )}
        <Waypoint
          topOffset={'-20%'}
          onEnter={this.navOnEnter}
          onLeave={this.navOnLeave}
        />
        <Row
          noGutters
          onClick={() => {
            this.context.router.push('/shop/collections');
          }}
          className={
            screen.innerWidth < 1024
              ? 'banner1'
              : this.state.banner1ClassNames.join(' ')
          }
        >
          <h2>ITALIAN COWBOY COOL</h2>
          <h4>
            SHOP NOW <i className="fa fa-arrow-right" aria-hidden="true" />
          </h4>
          <h4 className="arrow">
            <i className="fa fa-angle-down" />
          </h4>
        </Row>
        <div className="content">
          {this.state.favorites.length > 0 &&
            window.innerWidth >= 768 && (
              <ProductSlider
                addToCart={this.addToCart}
                products={this.state.favorites}
              />
            )}
          <Starling />
          {this.state.playBrandVideo || window.innerWidth <= 768 ? (
            <Row noGutters className="homepage-iframe">
              <iframe
                src="https://player.vimeo.com/video/209853714?autoplay=1&loop=1&autopause=0"
                width="640"
                height="360"
                frameborder="0"
                webkitallowfullscreen
                mozallowfullscreen
                allowfullscreen
              />
            </Row>
          ) : (
            <Row
              noGutters
              className="homepage-video"
              onClick={() => this.setState({ playBrandVideo: true })}
            >
              <div className="video-text">
                <div className="text-block">
                  <Waypoint onEnter={this.showVideoAnimation} />
                  <h2>Love Your Freedom</h2>
                  <h2>Own Your Moment</h2>
                  <h2>Live Your Vision</h2>
                </div>
                <div className="text-block-2">
                  <h2>Brand Video</h2>
                </div>
                <div className="video-action">
                  <h2>Click to Play</h2>
                </div>
              </div>
              <div>
                <VideoPlayer
                  loop={true}
                  video={placeholderVideo}
                  playVideo={this.playBrandVideo}
                />
              </div>
            </Row>
          )}
        </div>
        <div className="quote banner parallax parallax-2">
          <Quote />
        </div>
        <div className="content">
          <Row noGutters className="banner2">
            <div
              className="content"
              onClick={() => {
                this.context.router.push('/about-the-brand');
              }}
            >
              <h2>
                DISCOVER <br />OUR STORY
              </h2>
              <h3>
                LEARN MORE<i className="fa fa-arrow-right" aria-hidden="true" />
              </h3>
            </div>
          </Row>
          <Row
            noGutters
            className="banner3"
            onClick={() => {
              this.context.router.push('/in-the-saddle');
            }}
          >
            <div className="content">
              <h2>
                MEANWHILE,<br />IN THE SADDLE
              </h2>
              <h3>STAY UP TO DATE WITH EVERYTHING MADKOOL</h3>
              <h4>
                FOLLOW US ON THE BLOG<i
                  className="fa fa-arrow-right"
                  aria-hidden="true"
                />
              </h4>
            </div>
          </Row>
        </div>
        <Footer homepage={false} show={true} />
      </div>
    );
  }
}

function mapStateToProps({ collection, cart }) {
  return { collection, cart };
}

export default connect(mapStateToProps, {
  fetchMadisonFavorites,
  addToCart,
  fetchCart
})(Homepage);

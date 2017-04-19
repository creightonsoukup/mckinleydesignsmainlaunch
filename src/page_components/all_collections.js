import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navigation from '../components/navbar';
import BannerImage from '../components/banner_image';
import Footer from '../components/footer';
import { fetchCollectionContent, fetchCart } from '../actions/index'
import CollectionList from '../components/collection_list'
import SlimVideoPlayer from '../components/slim_video_player'
import NavbarScroll from '../components/navbar-scroll'


class AllCollections extends Component {

  constructor(props) {
    super(props)

    this.state = {
      cartOpen: false,
      cart: null,
      cartLineItems: null
    }
  }

  componentWillMount() {
    this.props.fetchCollectionContent()
    this.props.fetchCart()
      .then((data) => {
        this.setState({cart: data.payload, cartLineItems: data.payload.lineItemCount})
      })
  }

  render() {
    if(this.props.collectionContent.length === 0) {
      return <div></div>
    }
    const video = 'https://s3-us-west-1.amazonaws.com/madison-mckinley/collection.mp4'
    console.log(this.props.collectionContent)
    return (
      <div className="all-collections animated fadeIn">
        <div >
        <NavbarScroll
        lineItemCount={this.state.cartLineItems}
        cartOpen={this.state.cartOpen}
        cartData={this.state.cart}/>
        <SlimVideoPlayer loop={true} video={video}/>
        <CollectionList
        collections={this.props.collectionContent}/>
        <Footer
        show={true}/>
        </div>
      </div>
    )
  }
}

function mapStateToProps({collectionContent}) {
  return {collectionContent}
}

export default connect(mapStateToProps, { fetchCollectionContent, fetchCart })(AllCollections)

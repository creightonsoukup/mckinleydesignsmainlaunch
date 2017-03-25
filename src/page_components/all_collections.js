import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navigation from '../components/navbar';
import BannerImage from '../components/banner_image';
import Footer from '../components/footer';
import { fetchCollectionContent } from '../actions/index'
import CollectionList from '../components/collection_list'
import VideoPlayer from '../components/video_player'


class AllCollections extends Component {

  componentWillMount() {
    this.props.fetchCollectionContent()
  }

  render() {
    if(this.props.collectionContent.length === 0) {
      return <div></div>
    }
    const video = 'https://res.cloudinary.com/madisonmckinley/video/upload/v1490409608/collection_banner.mp4'
    return (
      <div className="all-collections">
        <Navigation/>
        <VideoPlayer loop={true} video={video}/>
        <CollectionList
        collections={this.props.collectionContent}/>
        <Footer
        show={true}/>

      </div>
    )
  }
}

function mapStateToProps({collectionContent}) {
  return {collectionContent}
}

export default connect(mapStateToProps, { fetchCollectionContent })(AllCollections)

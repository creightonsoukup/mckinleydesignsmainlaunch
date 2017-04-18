import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navigation from '../components/navbar';
import BannerImage from '../components/banner_image';
import Footer from '../components/footer';
import { fetchBlogPosts } from '../actions/index'
import CollectionList from '../components/collection_list'
import SlimVideoPlayer from '../components/slim_video_player'
import NavbarScroll from '../components/navbar-scroll'


class Blog extends Component {

  componentWillMount() {
    this.props.fetchCollectionContent()
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
        <NavbarScroll/>
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

function mapStateToProps({blog}) {
  return {blog}
}

export default connect(mapStateToProps, { fetchBlogPosts })(Blog)

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navigation from '../components/navbar';
import BannerImage from '../components/banner_image';
import Footer from '../components/footer';
import { fetchCollectionContent } from '../actions/index'

class AllCollections extends Component {

  componentWillMount() {
    this.props.fetchCollectionContent()
  }

  render() {
    if(this.props.collectionContent.length === 0) {
      return <div></div>
    }
    return (
      <div>
        <Navigation/>
        <BannerImage
        fileName={'collections.png'} />
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

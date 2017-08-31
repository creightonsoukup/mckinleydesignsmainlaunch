import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navigation from '../components/navbar';
import BannerImage from '../components/banner_image';
import Footer from '../components/footer';
import { fetchBlogPosts } from '../actions/index'
import CollectionList from '../components/collection_list'
import NavbarScroll from '../components/navbar-scroll'
import { Row } from 'reactstrap';


class Blog extends Component {

  constructor(props) {
    super(props);

    this.resizeFrame = this.resizeFrame.bind(this)
  }

  resizeFrame() {

  }


  render() {
    return (
      <div>
        <NavbarScroll/>
        <Row  noGutters className='blog-banner'>
        </Row>
        <Row noGutters className='blog-frame'>
          <iframe className="blog" src="https://in-the-saddle.squarespace.com/" width='100%' frameBorder="0" scrolling="no" height='200%' >
            <p>Please use a different browser to view blog. Sorry for the inconvenience!</p>
          </iframe>
        </Row>
        <Footer
        homepage={false}
        show={true}/>
      </div>
    )
  }
}

function mapStateToProps({blog}) {
  return {blog}
}

export default connect(mapStateToProps, { fetchBlogPosts })(Blog)

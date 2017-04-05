import React, { Component } from 'react';
import Lightbox from 'react-images';
import FullpageGallery from './fullpage_gallery'

class ProductGallery extends Component {
  constructor(props) {
    super(props)
    this.state = {
      regular: this.props.regular,
      thumbnails: this.props.thumbnails,
      gallery: this.props.gallery,
      currentPhotoIdx: 0,
      lightboxIsOpen: false,
      currentImage: 0
    }
    this.renderTumbnails = this.renderTumbnails.bind(this)
    this.changePhotobyThumbnail = this.changePhotobyThumbnail.bind(this)
    this.changePhotoLeft = this.changePhotoLeft.bind(this)
    this.changePhotoRight = this.changePhotoRight.bind(this)
    this.openLightbox = this.openLightbox.bind(this)
    this.closeLightbox = this.closeLightbox.bind(this)
  }

  closeLightbox() {
    this.setState({lightboxIsOpen: false})
  }

  openLightbox() {
    this.setState({lightboxIsOpen: true})
  }

  changePhotobyThumbnail(event) {
    const index = parseInt(event.target.name)
    this.setState({currentPhotoIdx: index})
  }

  changePhotoLeft() {
    if(this.state.currentPhotoIdx === 0) {
      let newIdx = this.state.thumbnails.length - 1
      this.setState({ currentPhotoIdx: newIdx})
    } else {
      this.setState({ currentPhotoIdx: (this.state.currentPhotoIdx - 1)})
    }
  }

  changePhotoRight() {
    let lastIdx = this.state.thumbnails.length - 1
    if(this.state.currentPhotoIdx === lastIdx) {
      this.setState({ currentPhotoIdx: 0})
    } else {
      this.setState({ currentPhotoIdx: (this.state.currentPhotoIdx + 1)})
    }
  }

  renderTumbnails(thumbnail) {
    const idx = this.state.thumbnails.indexOf(thumbnail)
    return (
      <img className='thumbnails'
      onClick={this.changePhotobyThumbnail}
      name={idx}
      key={idx} src={thumbnail} />
    )
  }


  render() {
    return (
      <div>
        { this.state.lightboxIsOpen &&
          <div>
            <FullpageGallery
            images={this.state.gallery}
            closeLightbox={this.closeLightbox}
            lightboxIsOpen={this.state.lightboxIsOpen}
            gotoNext={this.goToNext}
            current={this.state.currentPhotoIdx}/>
          </div>
        }
        <div className='product-gallery'>
          <i
          onClick = {this.changePhotoLeft}
          className="fa fa-angle-left" aria-hidden="true"></i>
          <img
          onClick={this.changePhotoRight}
          src={this.state.regular[this.state.currentPhotoIdx]}/>
          <i
          onClick = {this.changePhotoRight}
          className="fa fa-angle-right" aria-hidden="true"></i>
        </div>
        <div>
          {this.state.thumbnails.map(this.renderTumbnails)}
        </div>
      </div>
    )
  }
}

export default ProductGallery

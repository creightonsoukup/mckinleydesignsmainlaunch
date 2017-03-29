import React, { Component } from 'react';
import Lightbox from 'react-images'

class FullpageGallery extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentImage: 0,
      lightboxIsOpen: true
    }
    this.closeLightbox = this.closeLightbox.bind(this)
    this.gotoNext = this.gotoNext.bind(this);
		this.gotoPrevious = this.gotoPrevious.bind(this);
		this.gotoImage = this.gotoImage.bind(this);
		this.handleClickImage = this.handleClickImage.bind(this);
    this.closeLightbox = this.closeLightbox.bind(this)

  }

  componentWillMount() {

  }

	closeLightbox () {
		this.props.closeLightbox()
	}
	gotoPrevious () {
		this.setState({
			currentImage: this.state.currentImage - 1,
		});
	}
	gotoNext () {
    console.log('hi')
		this.setState({
			currentImage: this.state.currentImage + 1,
		});
	}
	gotoImage (index) {
		this.setState({
			currentImage: index,
		});
	}
	handleClickImage () {
		if (this.state.currentImage === this.props.images.length - 1) return;
		this.gotoNext();
	}

  render() {
    console.log(this.state)
    return (
      <div>
      <Lightbox
      closeLightbox={this.closeLightbox}
      current={this.state.currentImage}
      images={this.props.images}
      isOpen={this.props.lightboxIsOpen}
      onClickImage={this.handleClickImage}
      onClickThumbnail={this.gotoImage}
      onClickPrev={this.gotoPrevious}
      onClickNext={this.gotoNext}
      onClose={this.closeLightbox}
       />
      </div>
    )
  }
}

export default FullpageGallery

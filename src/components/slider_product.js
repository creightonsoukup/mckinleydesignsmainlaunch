import React, { Component } from 'react';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
  Col,
  Jumbotron,
  Button,
  Form,
} from 'reactstrap';

import ProductQuickView from './product_quickview'

class Product extends Component {

  constructor(props) {
    super(props)

    this.state = {
      selected: false,
      galleryImageIdx: 0,
      product: this.props.product
    }
  }


  renderSelectedProduct(selectedVariant, sortedImages) {
    const product = selectedVariant
    const images = sortedImages
    const offset = this.props.index % 2 === 0 ? '0' : '6'
    const nextIdx = images.length - 1 === this.state.galleryImageIdx ? 0 : parseInt(this.state.galleryImageIdx) + 1
    return (
      <div
      onClick={() => this.setState({galleryImageIdx: nextIdx })}>
        { images.length === this.state.product.images.length  &&
          <ProductQuickView
            product={product}
            galleryImageSrc={images[this.state.galleryImageIdx].src}
            offset={offset === '0'}/>
        }
      </div>
    )
  }

  render() {
    const images = this.state.product.images
    const selectedVariant = this.state.product.selectedVariant
    const mainImage = this.state.product.selectedVariantImage
    const sortedImages = this.state.product.images.sort((a ,b) => a.position - b.position)
    const selected = this.state.selected
    return (
    <div>
        <div>
          { images.length > 0 &&
            <img
            className="product-image"
            src={mainImage.src}/>
          }
        </div>
    </div>
    )
  }
}


export default Product

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


  changeImage() {

  }


  renderSelectedProduct(selectedVariant, sortedImages) {
    const product = selectedVariant
    const images = sortedImages
    const offset = this.props.index % 2 === 0 ? '0' : '6'
    const nextIdx = images.length - 1 === this.state.galleryImageIdx ? 0 : parseInt(this.state.galleryImageIdx) + 1
    const changeImage = () => {this.setState({galleryImageIdx: nextIdx })}
    return (
      <div>
        { images.length === this.state.product.images.length  &&
          <ProductQuickView
            addToCart={this.props.addToCart}
            product={product}
            changeImage={changeImage}
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
    const width = this.state.selected ? '12' : '6'
    const mouseEnter = _.debounce(() => {this.setState({selected: true})}, 1000)
    return (
    <div xs='12' sm='12' md={width} lg={width}
    className='product'
      onMouseEnter={mouseEnter}>
        {this.renderSelectedProduct(selectedVariant, sortedImages)}
    </div>
    )
  }
}


export default Product

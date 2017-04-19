import React, { Component } from 'react';
import { connect } from 'react-redux';
import CustomizeStart from '../components/customize-start'
import { fetchChains, fetchPendants, fetchCart } from '../actions/index'
import Navigation from '../components/navbar';
import NavbarScroll from '../components/navbar-scroll'
import BannerImage from '../components/banner_image'
import Footer from '../components/footer'
import CustomizeNav from '../components/customize_nav'
import CustomizeSelect from '../components/customize-select-piece'
import { Row, Container } from 'reactstrap'
import async from 'async';
import update from 'react-addons-update';
import CustomizeSummary from '../components/customize-summary'

class Customize extends Component {
  constructor(props) {
    super(props);

    this.state= {
      chains: [],
      pendants: [],
      start: true,
      showPendants: false,
      showChains: false,
      showSummary: false,
      selectedProducts: [],
      cart: null,
      cartOpen: false,
      cartLineItems: null
    }

    this.showPendants = this.showPendants.bind(this)
    this.showChains = this.showChains.bind(this)
    this.showSummary = this.showSummary.bind(this)
    this.selectProduct = this.selectProduct.bind(this)
    this.deselectProduct = this.deselectProduct.bind(this)
    this.addToCart = this.addToCart.bind(this)

  }


  componentWillMount() {
    this.props.fetchChains()
      .then((data) => {
        this.setState({chains: data.payload})
      })
    this.props.fetchPendants()
      .then((data) => {
        this.setState({pendants: data.payload})
      })
    this.props.fetchCart()
      .then((data) => {
        this.setState({cart: data.payload, cartLineItems: data.payload.lineItemCount})
      })

  }

  showPendants() {
    this.setState({
      showPendants: true,
      showChains: false,
      start: false,
      showSummary: false
    })
  }

  showChains() {
    this.setState({
      showPendants: false,
      showChains: true,
      start: false,
      showSummary: false
    })
  }

  showSummary() {
    this.setState({
      showPendants: false,
      showChains: false,
      start: false,
      showSummary: true
    })
  }

  selectProduct(newProduct) {
    if (this.state.selectedProducts.length === 0) {
      this.setState({selectedProducts: [newProduct]})
      return
    }
    this.setState({selectedProducts: [newProduct, ...this.state.selectedProducts]})
  }

  deselectProduct(product) {
      let index = this.state.selectedProducts.indexOf(product)
      this.setState({
        selectedProducts: update(this.state.selectedProducts, {$splice: [[index,1]]})
      })
  }

  addToCart(products) {
    products.map((product) => {
      return (
        this.props.addToCart(product.product, product.quantity, this.state.cart)
          .then((data) => {
            localStorage.setItem('MckinleyCart', data.payload.id)
            this.setState({cart: data.payload, cartLineItems: data.payload.lineItemCount,  cartOpen: true, scrollNav: true})
          })
      )
    })
  }

  render() {
    let pendentText = 'Pick from any of our handmade pendants and add one (or more..the more the merrier in our opinion).'
    let chainText = 'Chain lengths come in 18, 24, 28, and 32 inches.'
    let reviewText = 'Review your creation, then add to your shopping cart'


    return (
      <div className='customize'>
        { this.state.start &&
          <div className='start'>
            <Navigation/>
            <CustomizeStart
            start={this.showPendants}/>
            </div>
        }
        { this.state.showPendants &&
            <div>
              <NavbarScroll
              lineItemCount={this.state.cartLineItems}
              cartOpen={this.state.cartOpen}
              cartData={this.state.cart}/>
              <h2 className='select-header'>{pendentText}</h2>
              <CustomizeNav
              showPendants={this.showPendants}
              showSummary={this.showSummary}
              showChains={this.showChains}
              pendants={true}
              chains={false}
              summary={false} />
              <CustomizeSelect
              select={this.selectProduct}
              deselect={this.deselectProduct}
              products={this.state.pendants}
              selected={this.state.selectedProducts} />
            </div>
        }
        { this.state.showChains &&
          <div>
            <NavbarScroll
            lineItemCount={this.state.cartLineItems}
            cartOpen={this.state.cartOpen}
            cartData={this.state.cart}/>
            <h2 className='select-header'>{chainText}</h2>
            <CustomizeNav
            showPendants={this.showPendants}
            showChains={this.showChains}
            showSummary={this.showSummary}
            pendants={false}
            chains={true}
            summary={false} />
            <CustomizeSelect
            select={this.selectProduct}
            deselect={this.deselectProduct}
            selected={this.state.selectedProducts}
            products={this.state.chains} />
          </div>
        }
        { this.state.showSummary &&

          <div>
            <NavbarScroll
            lineItemCount={this.state.cartLineItems}
            cartOpen={this.state.cartOpen}
            cartData={this.state.cart}/>
            <h2 className='select-header'>{reviewText}</h2>
            <CustomizeNav
            showPendants={this.showPendants}
            showChains={this.showChains}
            showSummary={this.showSummary}
            selected={this.state.selectedProducts}
            pendants={false}
            chains={false}
            summary={true} />
            <CustomizeSummary
            removeProduct={this.deselectProduct}
            products={this.state.selectedProducts} />
            <div className='summary-footer'>
              <h1>Price</h1>
              <div onClick={this.addToCart}>Add To Cart</div>
            </div>
          </div>
        }
      </div>
    )
  }
}

function mapStateToProps({chains, pendants}) {
  return ({chains, pendants})
}

export default connect(mapStateToProps, {fetchPendants, fetchChains, fetchCart})(Customize)

import React, { Component } from 'react';
import { connect } from 'react-redux';
import CustomizeStart from '../components/customize-start'
import { fetchChains, fetchPendants, fetchCart, addProductsToCart } from '../actions/index'
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
import CustomizeLoader from '../components/customize_loader'


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
    this.renderPrice = this.renderPrice.bind(this)
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

  renderPrice() {
    let selectedProducts = this.state.selectedProducts
    let price = 0
    if (selectedProducts.length > 0) {
      for (var i = 0; i < selectedProducts.length; i++) {
        price += parseInt(selectedProducts[i].price)
      }
    }
    return (
      <span>{`$ ${price}.00`}</span>
    )
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

  deselectProduct(productDelete) {
      let selectedProducts = this.state.selectedProducts
      let newProducts = []
      async.map(selectedProducts, function(product) {
        if (product.product.id !== productDelete.id) {
          newProducts.push(product)
        }
      })
      this.setState({
        selectedProducts: newProducts
      })
  }

  addToCart() {
    let items = []
    async.map(this.state.selectedProducts, (product) => {
      items.push({variant: product.product, quantity: product.quantity})
    })
    this.props.addProductsToCart(items, this.state.cart)
    .then((data) => {
      localStorage.setItem('MckinleyCart', data.payload.id)
      this.setState({
        cart: data.payload,
        cartLineItems: data.payload.lineItemCount,
        cartOpen: true,
        scrollNav: true,
        selectedProducts: []
      })
    })
  }

  render() {
    let pendentText = 'Pick from any of our handmade pendants and add one (or more..the more the merrier in our opinion).'
    let chainText = 'Chain lengths come in 18, 24, 28, and 32 inches.'
    let reviewText = 'Review your creation, then add to your shopping cart'
    let price = this.renderPrice()

    return (
      <div className='customize'>
        { this.state.start &&
          <div className='start'>
          { window.innerWidth < 576 || this.state.scrollNav ? (
            <div>
            <NavbarScroll
            lineItemCount={this.state.cartLineItems}
            cartOpen={this.state.cartOpen}
            cartData={this.state.cart}/>
            <CustomizeLoader
            start={this.showPendants} />
            </div>
          ) : (
            <div>
            <Navigation
            lineItemCount={this.state.cartLineItems}
            cartOpen={this.state.cartOpen}
            cartData={this.state.cart}/>
            <CustomizeStart
            start={this.showPendants}/>
            </div>
          )}
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
              showVariants={false}
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
            showVariants={true}
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
            products={this.state.selectedProducts} />
            <div className='summary-footer'>
              <h3>Total: {price}</h3>
              <div className='custom-add' onClick={this.addToCart}>Add To Cart</div>
            </div>
          </div>
        }
        <Footer
        homepage={true}
        show={true}/>
      </div>
    )
  }
}

function mapStateToProps({chains, pendants}) {
  return ({chains, pendants})
}

export default connect(mapStateToProps, {fetchPendants, addProductsToCart, fetchChains, fetchCart})(Customize)

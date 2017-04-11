import React, { Component } from 'react';
import { connect } from 'react-redux';
import CustomizeStart from '../components/customize-start'
import { fetchChains, fetchPendants } from '../actions/index'
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
      selectedProducts: []
    }

    this.showPendants = this.showPendants.bind(this)
    this.showChains = this.showChains.bind(this)
    this.showSummary = this.showSummary.bind(this)
    this.selectProduct = this.selectProduct.bind(this)
    this.deselectProduct = this.deselectProduct.bind(this)

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

  render() {
    console.log(this.state)
    return (
      <div className='customize animated fadeIn'>
        { this.state.start &&
          <div className='start'>
            <Navigation/>
            <CustomizeStart
            start={this.showPendants}/>
            </div>
        }
        { this.state.showPendants &&
            <div className='animated fadeInRight'>
              <NavbarScroll />
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
          <div className='animated fadeInRight'>
            <NavbarScroll />
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

          <div className='animated slideInRight'>
            <NavbarScroll />
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
          </div>
        }
      </div>
    )
  }
}

function mapStateToProps({chains, pendants}) {
  return ({chains, pendants})
}

export default connect(mapStateToProps, {fetchPendants, fetchChains})(Customize)

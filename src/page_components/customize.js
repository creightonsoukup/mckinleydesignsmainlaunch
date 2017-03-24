import React, { Component } from 'react';
import { connect } from 'react-redux';
import CustomizeLoader from '../components/customize_loader'
import { fetchChains, fetchPendants } from '../actions/index'
import Navigation from '../components/navbar';
import BannerImage from '../components/banner_image'
import Footer from '../components/footer'
import CustomizeNav from '../components/customize_nav'
import ProductSlider from '../components/product_slider'
import { Row } from 'reactstrap'

class Customize extends Component {
  constructor(props) {
    super(props);

    this.state= {
      chains: [],
      pendants: [],
      showLoader: true,
      showBanner: true,
      showPendants: false,
      showChains: false,
      showSummary: false,
      showSecondNav: false,
    }

    this.startButtonClick = this.startButtonClick.bind(this)
    this.showPendants = this.showPendants.bind(this)
    this.showChains = this.showChains.bind(this)
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

  startButtonClick() {
    console.log('hi')
    this.setState({showLoader: false, showBanner:false, showPendants: true, showSecondNav: true})
  }

  showPendants() {
    this.setState({showPendants: true, showChains: false})
  }
  showChains() {
    this.setState({showPendants: false, showChains: true})
  }

  show(component) {
    console.log(component)
  }
  render() {
    console.log(this.state)
    return (
      <div>
        <Navigation/>
        { this.state.showBanner &&
          <div>
          <BannerImage
            fileName={'customize.png'}/>
          </div>
        }
        { this.state.showSecondNav &&
          <div>
            <CustomizeNav
            showPendants={this.showPendants}
            showChains={this.showChains} />
          </div>

        }
        { this.state.showLoader &&
          <div>
          <CustomizeLoader
          startButtonClick={this.startButtonClick}/>
          </div>
        }
        { this.state.showPendants &&
          <div>
            <ProductSlider
            products={this.state.pendants} />
          </div>
        }
        { this.state.showChains &&
          <div>
            <ProductSlider
            products={this.state.chains} />
          </div>
        }
        { this.state.showSummary &&
          <div>
            summary

          </div>

        }


         <Footer
         show={true}/>
      </div>
    )
  }
}

function mapStateToProps({chains, pendants}) {
  return ({chains, pendants})
}

export default connect(mapStateToProps, {fetchPendants, fetchChains})(Customize)

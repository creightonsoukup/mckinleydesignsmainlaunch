import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux'

class AllProducts extends Component {

  render() {
    return (
      <div>
        All Products
      </div>
    )
  }
}

export default connect(null, null)(AllProducts)

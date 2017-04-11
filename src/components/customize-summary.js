import React, { Component } from 'react';
import { connect } from 'react-redux';
import CustomizeSummaryList from './customize-summary-list';

const CustomizeSummary = (props) => {
  console.log(props)
  let lineItems = []
  props.products.map((product) => {lineItems.push(product.selectedVariant)})
  return (
    <div>
      <CustomizeSummaryList
      lineItems={lineItems} />
    </div>
  )
}

export default CustomizeSummary

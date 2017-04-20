import React, { Component } from 'react';
import { connect } from 'react-redux';
import CustomizeSummaryList from './customize-summary-list';

const CustomizeSummary = (props) => {
  return (
    <div className='summary'>
      { props.products.length === 0 ? (
        <h1>Select a Chain or pendant</h1>
      ) : (
        <CustomizeSummaryList
        products={props.products} />
      )}
    </div>
  )
}

export default CustomizeSummary

import React, { Component } from 'react';
import { connect } from 'react-redux';
import CustomizeSummaryList from './customize-summary-list';

const CustomizeSummary = (props) => {
  return (
    <div className='summary'>
      <CustomizeSummaryList
      products={props.products} />
    </div>
  )
}

export default CustomizeSummary

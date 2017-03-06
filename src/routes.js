import React from 'react';
import { Route, IndexRoute } from 'react-router';
import AllProducts from './page_components/all_products'

export default (
  <Route path='/' component={App}>
    <IndexRoute component={AllProducts}>
    <Route path='/allproducts' component={AllProducts} />
  </Route>
)

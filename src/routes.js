import React from 'react';
import { Route, IndexRoute } from 'react-router';

import AllProducts from './page_components/all_products'
import App from './page_components/app.js'
import SingleCollection from './page_components/single_collection'
import AllCollections from './page_components/all_collections'
import NotFound from './components/not_found'

export default (
  <Route path='/' component={App}>
    <IndexRoute component={AllProducts} />
    <Route path='/allproducts' component={AllProducts} />
    <Route path='/collections' component={AllCollections}/>
    <Route path='/collections/:collection' component={SingleCollection}/>
    <Route path='*' component={NotFound} />
  </Route>
)

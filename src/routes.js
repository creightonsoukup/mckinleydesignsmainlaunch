import React from 'react';
import { Route, IndexRoute } from 'react-router';

import AllProducts from './page_components/all_products'
import App from './page_components/app.js'
import SingleCollection from './page_components/single_collection'
import AllCollections from './page_components/all_collections'
import NotFound from './components/not_found'
import Customize from './page_components/customize'
import SingleProduct from './page_components/single_product'
import Homepage from './page_components/homepage'

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Homepage} />
    <Route path='/allproducts' component={AllProducts} />
    <Route path='/collections' component={AllCollections}/>
    <Route path='/collections/:collection' component={SingleCollection}/>
    <Route path='/customize' component={Customize} />
    <Route path='/product/:handle' component={SingleProduct} />
    <Route path='*' component={NotFound} />
  </Route>
)

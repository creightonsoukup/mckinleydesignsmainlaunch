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
import Cart from './page_components/cart'
import SpecialOrder from './page_components/special-order'
import Charity from './page_components/charity'
import Team from './page_components/team'
import CustomerCare from './page_components/customer-care';
import Privacy from './page_components/privacy'
import Terms from './page_components/terms'
import Contact from './page_components/contact'
import About from './page_components/about'
import Blog from './page_components/blog'

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Homepage} />
    <Route path='/shop/all-products' component={AllProducts} />
    <Route path='/shop/collections' component={AllCollections}/>
    <Route path='/shop/collections/:collection' component={SingleCollection}/>
    <Route path='/create-your-own' component={Customize} />
    <Route path='/product/:handle' component={SingleProduct} />
    <Route path='/special-order' component={SpecialOrder} />
    <Route path='/cart' component={Cart} />
    <Route path='/charity' component={Charity} />
    <Route path='/meet-the-team' component={Team} />
    <Route path='/customer-care' component={CustomerCare} />
    <Route path='/privacy' component={Privacy} />
    <Route path='/terms' component={Terms} />
    <Route path='/contact' component={Contact} />
    <Route path='/about-the-brand' component={About}/>
    <Route path='/in-the-saddle' component={Blog} />
    <Route path='*' component={NotFound} />
  </Route>
)

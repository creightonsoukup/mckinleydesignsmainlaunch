import { combineReducers } from 'redux';

import collectionReducer from './reducer_all_collections'
import productReducer from './reducer_all_products'
import createCartReducer from './reducer_create_cart'

const rootReducer = combineReducers({
  collection: collectionReducer,
  allProducts: productReducer,
  cart: createCartReducer
});

export default rootReducer;

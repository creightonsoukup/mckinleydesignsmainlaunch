import { combineReducers } from 'redux';

import colectionReducer from './reducer_all_collections'
import productReducer from './reducer_all_products'
import createCartReducer from './reducer_create_cart'

const rootReducer = combineReducers({
  collections: collectionReducer,
  products: productReducer,
  cart: createCartReducer
});

export default rootReducer;

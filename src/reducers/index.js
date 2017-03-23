import { combineReducers } from 'redux';

import collectionReducer from './reducer_all_collections'
import productReducer from './reducer_all_products'
import createCartReducer from './reducer_create_cart'
import chainReducer from './reducer_chains'
import pendantReducer from './reducer_pendants'

const rootReducer = combineReducers({
  collection: collectionReducer,
  allProducts: productReducer,
  cart: createCartReducer,
  chains: chainReducer,
  pendants: pendantReducer
});

export default rootReducer;

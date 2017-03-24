import { combineReducers } from 'redux';

import collectionReducer from './reducer_all_collections'
import productReducer from './reducer_all_products'
import createCartReducer from './reducer_create_cart'
import chainReducer from './reducer_chains'
import pendantReducer from './reducer_pendants'
import quoteReducer from './reducer_quote'
import collectionContentReducer from './reducer_collection_content'

const rootReducer = combineReducers({
  collection: collectionReducer,
  allProducts: productReducer,
  cart: createCartReducer,
  chains: chainReducer,
  pendants: pendantReducer,
  quote: quoteReducer,
  collectionContent: collectionContentReducer
});

export default rootReducer;

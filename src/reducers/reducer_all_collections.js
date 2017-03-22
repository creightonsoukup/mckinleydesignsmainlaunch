import { FETCH_ALL_COLLECTIONS, OCCIDENTALE_COLLECTION,
STEERHEAD_RANCH_COLLECTION, COIN_COLLECTION, PERLINE_COLLECTION,
EASTWOOD_COLLECTION, CAMEO_COLLECTION, GOLD_COLLECTION,
WILD_COLLECTION, COLLECTION_BY_TAGS } from '../actions/index';

const INITAL_STATE = []

export default function( state = INITAL_STATE, action) {
  switch(action.type) {
    case FETCH_ALL_COLLECTIONS:
      return [ action.payload.data, ...state]
    case OCCIDENTALE_COLLECTION:
      return [ action.payload.data, ...state]
    case STEERHEAD_RANCH_COLLECTION:
      return [ action.payload.data, ...state]
    case COIN_COLLECTION:
      return [ action.payload.data, ...state]
    case WILD_COLLECTION:
      return [ action.payload.data, ...state]
    case GOLD_COLLECTION:
      return [ action.payload.data, ...state]
    case PERLINE_COLLECTION:
      return [ action.payload.data, ...state]
    case EASTWOOD_COLLECTION:
      return [ action.payload.data, ...state]
    case CAMEO_COLLECTION:
      return [ action.payload.data, ...state]
    case COLLECTION_BY_TAGS:
      return [ action.payload.data, ...state]
    default:
      return state;

    }
}

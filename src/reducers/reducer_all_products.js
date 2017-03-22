import { FETCH_ALL_PRODUCTS, ALL_PRODUCTS_BY_TAGS,
ALL_PRODUCTS_BY_TYPE, ALL_PRODUCTS_ORDERED } from '../actions/index';

const INITAL_STATE = []

export default function( state = INITAL_STATE, action) {
  switch(action.type) {
    case FETCH_ALL_PRODUCTS:
      return [ action.payload.data, ...state]
    case ALL_PRODUCTS_BY_TAGS:
      return [ action.payload.data, ...state]
    case ALL_PRODUCTS_BY_TYPE:
      return [ action.payload.data, ...state]
    case ALL_PRODUCTS_ORDERED:
      return [ action.payload.data, ...state]
    default:
      return state;
  }
}

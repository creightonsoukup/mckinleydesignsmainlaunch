import { FETCH_ALL_PRODUCTS } from '../actions/index';

const INITAL_STATE = []

export default function( state = INITAL_STATE, action) {
  switch(action.type) {
    case: FETCH_ALL_PRODUCTS:
    return [ action.payload.data, ...state]
  }
  default:
  return state;
}

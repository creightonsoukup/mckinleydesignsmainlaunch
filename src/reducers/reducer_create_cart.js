import { CREATE_CART, ADD_TO_CART, UPDATE_CART } from '../actions/index';

const INITAL_STATE = []

export default function( state = INITAL_STATE, action) {
  switch(action.type) {
    case CREATE_CART:
      return [ action.payload.data, ...state]
    case ADD_TO_CART:
      return [ action.payload.data, ...state]
    case UPDATE_CART:
      return [ action.payload.data, ...state]
    default:
      return state;

    }
}

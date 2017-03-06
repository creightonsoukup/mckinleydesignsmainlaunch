import { CREATE_CART } from '../actions/index'; 

const INITAL_STATE = []

export default function( state = INITAL_STATE, action) {
  switch(action.type) {
    case: CREATE_CART:
    return [ action.payload.data, ...state]
  }
  default:
  return state;
}

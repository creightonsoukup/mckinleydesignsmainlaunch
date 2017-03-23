import { FETCH_CHAINS } from '../actions/index';

const INITAL_STATE = []

export default function( state = INITAL_STATE, action) {
  switch(action.type) {
    case FETCH_CHAINS:
      return [ action.payload.data, ...state]
    default:
      return state;
  }
}

import { CONTACT_REQUEST } from '../actions/index';

const INITAL_STATE = []

export default function( state = INITAL_STATE, action) {
  switch(action.type) {
    case CONTACT_REQUEST:
      return [ action.payload.data, ...state]
    default:
      return state;
  }
}

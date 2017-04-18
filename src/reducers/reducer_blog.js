import { FETCH_BLOG_POSTS } from '../actions/index';

const INITAL_STATE = []

export default function( state = INITAL_STATE, action) {
  switch(action.type) {
    case FETCH_BLOG_POSTS:
      return [ action.payload.data, ...state]
    default:
      return state;
  }
}

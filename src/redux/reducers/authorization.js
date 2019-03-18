import { LOGIN, LOGOUT } from '../actions/authorization';

// Whether admin logged in or not
const initialState = false;

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return true;

    case LOGOUT:
      return false;

    default:
      return state;
  }
}

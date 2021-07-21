import {
  REGISTER_USER, SUBMITTING, SET_USER, SET_LOGGEDIN,
} from './regtypes';

const initial = {
  users: [],
  submitted: false,
  isLoggedIn: false,
  user: null,
};

const reducer = (state = initial, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return { ...state, users: [...state.users, action.payload] };
    case SET_USER:
      return { ...state, user: action.payload };
    case SET_LOGGEDIN:
      return { ...state, isLoggedIn: action.payload };
    case SUBMITTING:
      return { ...state, submitted: action.payload };
    default:
      return state;
  }
};

export default reducer;

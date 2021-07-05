import {
  REGISTER_USER, SUBMITTING,
} from './regtypes';

const initial = {
  users: [],
  submitting: false,
};

const reducer = (state = initial, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return { ...state, users: [...state.users, action.payload] };
    case SUBMITTING:
      return { ...state, submitting: action.payload };
    default:
      return state;
  }
};

export default reducer;

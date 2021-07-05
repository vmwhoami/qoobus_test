import {
  REGISTER_USER,
} from './regtypes';

const initial = {
  users: [],
  error: false,
};

const reducer = (state = initial, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return { ...state, users: [...state.users, action.payload] };
    default:
      return state;
  }
};

export default reducer;

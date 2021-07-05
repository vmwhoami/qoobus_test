import {
  GET_USERS, ERROR, SET_IDNP, SET_PHONE, SET_ACCESS_DATE, CLEAR_FIELDS, SET_NAME, CLEAR_NAME,
} from './types';

const initial = {
  users: [],
  error: false,
  errors: {},
  idnpSelected: '',
  phoneSelected: '',
  dateSelected: '',
  displayName: '',
};

const reducer = (state = initial, action) => {
  switch (action.type) {
    case GET_USERS:
      return { ...state, users: action.payload };
    case SET_IDNP:
      return { ...state, idnpSelected: action.payload };
    case SET_PHONE:
      return { ...state, phoneSelected: action.payload };
    case SET_ACCESS_DATE:
      return { ...state, dateSelected: action.payload };
    case SET_NAME:
      return { ...state, displayName: action.payload };
    case CLEAR_FIELDS:
      return {
        ...state,
        idnpSelected: '',
        phoneSelected: '',
        dateSelected: '',
      };
    case CLEAR_NAME:
      return {
        ...state, displayName: '',
      };
    case ERROR:
      return { ...state, error: !state.error, errors: action.payload };
    default:
      return state;
  }
};

export default reducer;

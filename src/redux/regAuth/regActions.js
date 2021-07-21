import {
  REGISTER_USER, SUBMITTING, SET_USER, SET_LOGGEDIN,
} from './regtypes';

const addUser = (user) => ({
  type: REGISTER_USER,
  payload: user,
});

const setSubmit = (bool) => ({
  type: SUBMITTING,
  payload: bool,
});

const setLoggedInUser = (user) => ({
  type: SET_USER,
  payload: user,
});

const setLoggedIn = (bool) => ({
  type: SET_LOGGEDIN,
  payload: bool,
});

export {
  addUser, setSubmit, setLoggedInUser, setLoggedIn,
};

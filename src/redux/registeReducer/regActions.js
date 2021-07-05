import {
  REGISTER_USER, SUBMITTING,
} from './regtypes';

const addUser = (user) => ({
  type: REGISTER_USER,
  payload: user,
});

const setSubmit = (bool) => ({
  type: SUBMITTING,
  payload: bool,
});

export {
  addUser, setSubmit,
};

import {
  REGISTER_USER, ERROR,
} from './regtypes';

const addUser = (user) => ({
  type: REGISTER_USER,
  payload: user,
});

const addUserErr = (err) => ({
  type: ERROR,
  payload: err,
});

export {
  addUser, addUserErr,
};

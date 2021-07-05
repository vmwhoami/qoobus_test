import axios from 'axios';
import {
  GET_USERS, ERROR,
  SET_IDNP, SET_PHONE,
  SET_ACCESS_DATE,
  CLEAR_FIELDS,
  SET_NAME,
  CLEAR_NAME,
} from './types';

const clearName = () => ({
  type: CLEAR_NAME,
});

const setName = (name) => ({
  type: SET_NAME,
  payload: name,
});

const clearFields = () => ({
  type: CLEAR_FIELDS,
});

const setUsers = (users) => ({
  type: GET_USERS,
  payload: users,
});

const setIdnp = (indp) => ({
  type: SET_IDNP,
  payload: indp,
});

const setPhone = (phone) => ({
  type: SET_PHONE,
  payload: phone,
});
const setAccessDate = (date) => ({
  type: SET_ACCESS_DATE,
  payload: date,
});
const setError = (error) => ({
  type: ERROR,
  payload: error,
});
const getUsers = () => async (dispatch) => {
  axios.get('/api/users').then((users) => {
    const { data } = users;
    dispatch(setUsers(data.users));
  }).catch((error) => {
    dispatch(setError(error));
  });
};

export {
  getUsers, setIdnp, setPhone, setAccessDate, clearFields, setName, clearName,
};

import { combineReducers } from 'redux';
import UserReducer from './UsersReducer/reducer';
import DownloadsReducer from './downloadsReducer/reducer';
import regAuth from './regAuth/regReducer';

const rootReducer = combineReducers({
  users: UserReducer,
  downloads: DownloadsReducer,
  register: regAuth,
});

export default rootReducer;

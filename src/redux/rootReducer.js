import { combineReducers } from 'redux';
import UserReducer from './UsersReducer/reducer';
import DownloadsReducer from './downloadsReducer/reducer';

const rootReducer = combineReducers({ users: UserReducer, downloads: DownloadsReducer });

export default rootReducer;

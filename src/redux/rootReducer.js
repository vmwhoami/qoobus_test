import { combineReducers } from 'redux';
import UserReducer from './UsersReducer/reducer';
import DownloadsReducer from './downloadsReducer/reducer';
import registerReducer from './registeReducer/regReducer';

const rootReducer = combineReducers({
  users: UserReducer,
  downloads: DownloadsReducer,
  register: registerReducer,
});

export default rootReducer;

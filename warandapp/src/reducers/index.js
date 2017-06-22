import { combineReducers } from 'redux';
import { UserNavReducer } from './UserNavReducer';

export default combineReducers({
  userNav: UserNavReducer
});

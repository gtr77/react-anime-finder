import { combineReducers } from 'redux';
import UsersReducer from './usersReducer';

const reducers = combineReducers({
  users: UsersReducer
});

export default reducers;
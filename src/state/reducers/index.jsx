import { combineReducers } from 'redux';
import accountReducer from './accountReducer';
import showsReducer from './showsReducer';

const reducers = combineReducers({
  account: accountReducer,
  shows: showsReducer,
});

export default reducers;
// import { configureStore } from '@reduxjs/toolkit' 
import { createStore } from 'redux' 
import reducers from './reducers/index';

export const store = createStore({ 
  reducer: reducers 
});
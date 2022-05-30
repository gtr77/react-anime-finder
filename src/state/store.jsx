// import { createStore } from 'redux'
import { configureStore } from '@reduxjs/toolkit' 
// import { applyMiddleware } from 'redux'; 
import reducers from './reducers/index';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';


// import rootSaga from "../saga";
// import rootReducer from "./reducer";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: reducers,
  middleware: [sagaMiddleware],
  devTools: process.env.NODE_ENV !== "production",
});

sagaMiddleware.run(rootSaga);

// export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof store.getState>;
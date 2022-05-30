// import { createStore } from 'redux'
import { configureStore } from '@reduxjs/toolkit' 
import { applyMiddleware } from 'redux'; 
import reducers from './reducers/index';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
// import logger from 'redux-logger'

// const sagaMiddleware = createSagaMiddleware();
// console.log("sagaMiddleware", sagaMiddleware)
// console.log("applyMiddleware", applyMiddleware)
// // console.log(applyMiddleware(sagaMiddleware))


// // export const store = configureStore({reducer: reducers}, applyMiddleware(sagaMiddleware));

// const store = configureStore({
//   reducer: reducers,
//   middleware: composeEnhancers(applyMiddleware(sagaMiddleware)),
//   // middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()]
//   // middleware: applyMiddleware(sagaMiddleware),
  
//   // middleware: (getDefaultMiddleware) => getDefaultMiddlzeware().concat(logger),
// });

// sagaMiddleware.run(rootSaga);

const sagaMiddleware = createSagaMiddleware();
export const store = () => {
  const storeA = configureStore(
    reducers,
    applyMiddleware(sagaMiddleware),
  );
  sagaMiddleware.run(rootSaga);
  return storeA;
}

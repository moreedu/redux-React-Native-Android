import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

// const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;
const sagaMiddleware = createSagaMiddleware(); // { sagaMonitor }

const enhancer =
  process.env.NODE_ENV === 'development'
    ? applyMiddleware(sagaMiddleware)
    : applyMiddleware(sagaMiddleware); // enhancer chamada para Reactotron.

const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(rootSaga);

export default store;

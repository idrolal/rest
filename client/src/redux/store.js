import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './reducers/rootReducer';
import { globalWatcher } from './sagas/saga';

const saga = createSagaMiddleware();

export const store = createStore(rootReducer, applyMiddleware(saga));

saga.run(globalWatcher);

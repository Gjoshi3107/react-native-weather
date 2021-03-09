import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import logger from './middleware/logger';
import api from './middleware/api';
import thunk from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(thunk, logger, api));

export function getStateFromStore() {
  return store.getState();
}


export default store;
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import logger from './middleware/logger';
import api from './middleware/api';
import geoLoc from './middleware/geoLocation';
import thunk from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(thunk, logger, geoLoc, api));

export const state = store.getState();

export default store;
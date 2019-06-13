import {createStore,applyMiddleware} from 'redux';
import reducers from './reducers/index';
import logger from 'redux-logger';
import reduxThunk from 'redux-thunk';
import reduxPromise from 'redux-promise';
let store = createStore(reducers,applyMiddleware(logger,reduxThunk,reduxPromise));
export default store;
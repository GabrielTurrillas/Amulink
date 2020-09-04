import { createStore, applyMiddleware } from 'redux'
import pacientesReducer from './reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger'


const store = createStore(
    pacientesReducer, 
    applyMiddleware(thunk, logger) 
);

export default store;
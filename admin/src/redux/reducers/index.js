import { combineReducers } from 'redux';
import auth from './auth'
import pacientesReducer from './pacientesReducer'

export default combineReducers({
    auth,
    pacientesReducer
});
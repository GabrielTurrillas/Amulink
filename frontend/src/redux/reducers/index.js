import { combineReducers } from 'redux';
import auth from './auth';
import pacientesReducer from './pacientesReducer';
import terapiaReducer from './terapiaReducer';

export default combineReducers({
    auth,
    pacientesReducer,
    terapiaReducer
});
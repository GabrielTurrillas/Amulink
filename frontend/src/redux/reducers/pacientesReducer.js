import { 
    FETCH_PACIENTES_SUCCESS, 
    FETCH_PACIENTES_FAILURE,
    ADD_PACIENTE_SUCCESS,
    ADD_PACIENTE_FAILURE 
} from '../actions/types';


const initialState = {
    pacientes: [],
    errors: '',
};


const pacientesReducer = (state=initialState, action) => {
    switch (action.type) {
        case FETCH_PACIENTES_SUCCESS:
            return {
                ...state,
                pacientes: action.payload,
                errors: ''
            }
        case FETCH_PACIENTES_FAILURE:
            return {
                ...state,
                errors: action.payload,
            }
        case ADD_PACIENTE_SUCCESS:
            return [
                ...state,
                action.payload
            ]
        case ADD_PACIENTE_FAILURE:
            return {
                ...state,
                errors: action.payload,
            }
        default:
            return state
    }
}

export default pacientesReducer;




/* import { combineReducers } from 'redux';
import pacientesReducer from './pacientesReducer';

export default combineReducers({
    pacientes: pacientesReducer
}); */
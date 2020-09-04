import { 
    FETCH_PACIENTES_START, 
    FETCH_PACIENTES_SUCCESS, 
    FETCH_PACIENTES_FAILURE 
} from '../actions/types';


const initialState = {
    loading: false,
    pacientes: [],
    errors: '',
};


const pacientesReducer = (state=initialState, action) => {
    switch (action.type) {
        case FETCH_PACIENTES_START:
            return {
                ...state,
                loading: true,
            };
        case FETCH_PACIENTES_SUCCESS:
            return {
                ...state,
                pacientes: action.payload,
                loading: false,
                errors: []
            }
        case FETCH_PACIENTES_FAILURE:
            return {
                ...state,
                errors: action.payload,
                loading: false,
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
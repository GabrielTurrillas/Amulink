import {
    FETCH_SESIONES_SUCCESS,
    FETCH_SESIONES_FAILURE,
    ADD_SESION_SUCCESS,
    ADD_SESION_FAILURE,
    FETCH_TERAPIA_SUCCESS,
    FETCH_TERAPIA_FAILURE
} from '../actions/types';

const initialState = {
    sesiones: [],
    terapia: {
        id:''
    },
    errors:'',
}

const terapiaReducer = (state=initialState, action) => {
    switch (action.type) {
        case FETCH_SESIONES_SUCCESS:
            return {
                ...state,
                sesiones: action.payload,
                errors:''
            }
        case FETCH_SESIONES_FAILURE:
            return {
                ...state,
                errors: action.payload,
            }
        case ADD_SESION_SUCCESS:
            return {
                ...state,
                sesiones: [action.payload, ...state.sesiones],
                errors:'',
            }
        case ADD_SESION_FAILURE:
            return {
                ...state,
                errors: action.payload,
            }
        case FETCH_TERAPIA_SUCCESS:
            return {
                ...state,
                terapia: action.payload,
                errors: '',
            }
        case FETCH_TERAPIA_FAILURE:
            return {
                ...state,
                errors:action.payload,
            }
        default:
            return state
    }
}
export default terapiaReducer;
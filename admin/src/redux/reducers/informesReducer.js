import {
    FETCH_NUMERO_SESIONES_MES_SUCCESS,
    FETCH_NUMERO_SESIONES_MES_FAILURE,
} from '../actions/types';

const initialState = {
    numeroSesionesMes:0,
};

const terapeutaReducer = (state=initialState, action) => {
    switch (action.type) {
        case FETCH_NUMERO_SESIONES_MES_SUCCESS:
            return {
                ...state,
                numeroSesionesMes: action.payload,
                errors: '',
            }
        case FETCH_NUMERO_SESIONES_MES_FAILURE:
            return {
                ...state,
                errors: action
            }
        default:
            return state
    };
};
export default terapeutaReducer;
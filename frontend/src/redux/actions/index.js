import { FETCH_PACIENTES_START, FETCH_PACIENTES_SUCCESS, FETCH_PACIENTES_FAILURE } from './types';
import axios from 'axios';

export const fetchPacientes = () => dispatch => {
    dispatch({ type: FETCH_PACIENTES_START });
    axios
        .get('http://127.0.0.1:8000/api/paciente')
        .then(res => {
            dispatch({ type: FETCH_PACIENTES_SUCCESS, payload: res.data})
        }).catch(err => dispatch({ type: FETCH_PACIENTES_FAILURE, payload: err.message }));
};

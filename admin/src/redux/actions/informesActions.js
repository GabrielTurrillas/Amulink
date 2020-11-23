import axios from '../../axios';
import {
    FETCH_NUMERO_SESIONES_MES_SUCCESS,
    FETCH_NUMERO_SESIONES_MES_FAILURE,
} from './types';

export const fetchNumeroSesionesMensuales = (mes,anio) => async dispatch => {
    const config = {
        headers:{
            'Content-Type': 'application/json',
            'Authorization': `JWT ${localStorage.getItem('access')}`,
            'Accept': 'application/json'
        }
    };
    axios.get(`api/informes/numeroSesionesMensuales/${mes}/${anio}`, config)
    .then(res => {
        dispatch({
            type: FETCH_NUMERO_SESIONES_MES_SUCCESS,
            payload: res.data
        })
        console.log(res.data)
    })
    .catch(err => {
        dispatch({
            type: FETCH_NUMERO_SESIONES_MES_FAILURE,
            payload: err.data
        });
    });
}

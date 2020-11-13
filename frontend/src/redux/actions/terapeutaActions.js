import axios from '../../axios';
import {
    FETCH_PERFIL_SUCCESS,
    FETCH_PERFIL_FAILURE
} from './types';

export const fetchPerfil = () => async dispatch => {
    const config = {
        headers:{
            'Content-Type': 'application/json',
            'Authorization': `JWT ${localStorage.getItem('access')}`,
            'Accept': 'application/json'
        }
    };
    axios.get('/api/terapeuta/perfil', config)
    .then(res => {
        dispatch({
            type: FETCH_PERFIL_SUCCESS,
            payload: res.data
        })
    })
    .catch(err => {
        dispatch({
            type: FETCH_PERFIL_FAILURE,
            payload: err.data
        });
        console.log(err);
    });
};
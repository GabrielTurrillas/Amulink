import axios from '../../axios';
import {
    FETCH_SESIONES_SUCCESS,
    FETCH_SESIONES_FAILURE,
    ADD_SESION_SUCCESS,
    ADD_SESION_FAILURE,
    FETCH_TERAPIA_SUCCESS,
    FETCH_TERAPIA_FAILURE
} from './types';

export const fetchSesiones = (idPaciente) => async dispatch => {
    const config = {
        headers:{
            'Content-Type': 'application/json',
            'Authorization': `JWT ${localStorage.getItem('access')}`,
            'Accept': 'application/json'
        }
    };
    axios.get("/api/terapia/sesion/"+idPaciente, config)
    .then(res => {
        dispatch({
            type: FETCH_SESIONES_SUCCESS,
            payload: res.data
        })
    })
    .catch(err => {
        dispatch({
            type: FETCH_SESIONES_FAILURE,
            payload: err.data
        });
        console.log(err);
    });
};

export const fetchTerapia = (idPaciente) => async dispatch => {
    const config = {
        headers:{
            'Content-Type': 'application/json',
            'Authorization': `JWT ${localStorage.getItem('access')}`,
            'Accept': 'application/json'
        }
    };
    axios.get("/api/terapia/"+idPaciente, config)
    .then(res => {
        dispatch({
            type: FETCH_TERAPIA_SUCCESS,
            payload: res.data
        })
    })
    .catch(err => {
        dispatch({
            type: FETCH_TERAPIA_FAILURE,
            payload: err.data
        })
        console.log(err)
    });
};



export const agregarSesiones = (body, idPaciente) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : `JWT ${localStorage.getItem('access')}`,
            'Accept': 'application/json'
        }
    };
    axios.post('/api/terapia/sesion/'+idPaciente, body, config)
    .then(res => {
        dispatch({
            type: ADD_SESION_SUCCESS,
            payload: res.data
        });
    })
    .catch(err => {
        dispatch({
            type: ADD_SESION_FAILURE,
            payload: err.data
        });
    });
};
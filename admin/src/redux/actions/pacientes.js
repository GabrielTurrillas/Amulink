import axios from 'axios';
import { 
    FETCH_PACIENTES_START, 
    FETCH_PACIENTES_SUCCESS, 
    FETCH_PACIENTES_FAILURE ,
    ADD_PACIENTE_SUCCESS,
    ADD_PACIENTE_FAILURE
} from './types';


export const fetchPacientes = () => async dispatch => {
    dispatch({ type: FETCH_PACIENTES_START });
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `JWT ${localStorage.getItem('access')}`,
            'Accept': 'application/json'
        }
    };

    axios.get(`${process.env.REACT_APP_API_URL}/api/paciente/admin`, config)
    .then(res => {
        dispatch({
            type: FETCH_PACIENTES_SUCCESS,
            payload: res.data
        })
    })
    .catch(err => {
        dispatch ({
            type: FETCH_PACIENTES_FAILURE,
        })
        console.log(err)
    });
};

export const agregarPacientes = (startDate ,{ rut, nombre, apellidoPaterno, apellidoMaterno, telefono, email, genero, direccion, comunaResidencia, ocupacionProfecion }) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : `JWT ${localStorage.getItem('access')}`,
            'Accept': 'application/json'
        }
    };
    const fechaNacimiento = startDate
    const body = JSON.stringify({ rut, nombre, apellidoPaterno, apellidoMaterno, telefono, email, fechaNacimiento, genero, direccion, comunaResidencia, ocupacionProfecion });
    axios.post(`${process.env.REACT_APP_API_URL}/api/paciente/admin`, body, config)
    .then(res => {
        dispatch({
            type: ADD_PACIENTE_SUCCESS,
            payload: res.data
        });
    })
    .catch (err => {
        dispatch({
            type: ADD_PACIENTE_FAILURE,
            errors: err.data
        });
    }); 
}; 




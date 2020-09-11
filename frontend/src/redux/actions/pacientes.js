import axios from 'axios';
import { 
    FETCH_PACIENTES_START, 
    FETCH_PACIENTES_SUCCESS, 
    FETCH_PACIENTES_FAILURE 
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

    axios.get(`${process.env.REACT_APP_API_URL}/api/paciente/`, config)
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
        })
}


import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPacientes } from '../../redux/actions/pacientes';
import { load_user } from '../../redux/actions/auth';
import Paciente from '../../components/pacientes/Paciente';


const PacienteLista = () => {
    const dispatch = useDispatch();
    const pacientes = useSelector(state => state.pacientesReducer.pacientes)

    useEffect(() => {
        load_user();
        dispatch(fetchPacientes());
    }, [dispatch])
    
    if (!pacientes || !pacientes.length) {
        return (
            <p>NO HAY PACIENTES</p>
        ) 
    }
    return (
        <ul>
            {pacientes.map(({ id, nombre, apellidoPaterno, email }) =>
                <div key={id}>
                    <Paciente 
                        id={id}
                        nombre={nombre} 
                        apellidoPaterno={apellidoPaterno} 
                        email={email}
                    />
                </div>
            )}
        </ul>
    ) 
}

export default PacienteLista;


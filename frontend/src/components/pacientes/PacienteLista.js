import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPacientes } from '../../redux/actions/pacientes';
import { load_user } from '../../redux/actions/auth';
import { Link } from 'react-router-dom';

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
        <div className='container'>
            <div className='card mt-4 mb-5'>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Apellido Paterno</th>
                            <th scope="col">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pacientes.map(({ id, nombre, apellidoPaterno, email }) =>
                            <tr key={id} className='clickable-row'>
                                <th scope="row">{id}</th>
                                <td><Link to={"pacientes/"+id}>{nombre}</Link></td>
                                <td><Link to={"pacientes/"+id}>{apellidoPaterno}</Link></td>
                                <td><Link to={"pacientes/"+id}>{email}</Link></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    ) 
}

export default PacienteLista;

import React, { useEffect, useState, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const SesionLista = () => {
    const { id:idPaciente } = useParams()
    const [sesiones, setSesiones] = useState({})
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `JWT ${localStorage.getItem('access')}`,
            'Accept': 'application/json'
        }
    };
    useEffect(() => {
        console.log(idPaciente)
        axios.get(`${process.env.REACT_APP_API_URL}/api/terapia/sesion/`+idPaciente, config)
        .then(res => setSesiones(res.data))
    }, [])
    
    
    if (!sesiones || !sesiones.length) {
        return (
            <p>NO HAY SESIONES</p>
        ) 
    }

    return (
       <Fragment>
            <div className='ml-4 mr-4'>
                <h3 className='display-4 mb-4'>Sesiones</h3>
                <div className='card mb-4'>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Asistio</th>
                                <th scope="col">Fecha Sesion</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sesiones.map(({ id, asistio, fechaSesion }) =>
                                <tr key={id} className='clickable-row'>
                                    <th scope="row">{id}</th>
                                    <td>{asistio}</td>
                                    <td>{fechaSesion}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </Fragment>
    ) 
}

export default SesionLista;
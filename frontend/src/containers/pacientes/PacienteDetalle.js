import axios from 'axios'
import React,{ useEffect, useState } from 'react';


const PacienteDetalle = (props) => {
    const id = props.match.params.id
    const [paciente, setPaciente] = useState({
    
    })
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `JWT ${localStorage.getItem('access')}`,
            'Accept': 'application/json'
        }
    };
    
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/api/paciente/`+id, config)
        .then(res => setPaciente(res.data))
    },[])

    
    const { rut, nombre, apellidoPaterno, apellidoMaterno, telefono, email, genero, direccion, comunaResidencia, ocupacionProfecion } = paciente

    return (
        <div className='container mt-4'>
            <h3 className='mb-4 ml-4'>Ficha del Paciente</h3>
            <div className="card" style={{width: '55rem', fontSize: 'x-large'}}>
                <div className='row ml-3 mt-3'>
                    <div className='col'>
                        <p className='font-weight-light'>Rut: { rut }</p>
                    </div>
                    <div className='col'>
                        <p className='font-weight-light'>Nombre: { nombre }</p>
                    </div>
                </div>
                <div className='row ml-3 mt-3'>
                    <div className='col'>
                        <p className='font-weight-light'>Apellido paterno: { apellidoPaterno }</p>
                    </div>
                    <div className='col'>
                        <p className='font-weight-light'>Apelldio materno: { apellidoMaterno }</p>
                    </div>
                </div>
                <div className='row ml-3 mt-3'>
                    <div className='col'>
                        <p className='font-weight-light'>Genero: { genero }</p>
                    </div>
                    <div className='col'>
                        <p className='font-weight-light'>Telefono: { telefono }</p>
                    </div>
                </div>
                <div className='row ml-3 mt-3'>
                    <div className='col'>
                        <p className='font-weight-light'>Email: { email }</p>
                    </div>
                    <div className='col'>
                        <p className='font-weight-light'>direccion: { direccion }</p>
                    </div>
                </div>
                <div className='row ml-3 mt-3'>
                    <div className='col'>
                        <p className='font-weight-light'>Comuna de Residencia: { comunaResidencia }</p>
                    </div>
                    <div className='col'>
                        <p className='font-weight-light'>Ocupacion o Profecion: { ocupacionProfecion }</p>
                    </div>
                </div>
            </div>
            <button className='mb-3 btn btn-primary mt-4'>Modificar</button>
        </div>
    );
}

export default PacienteDetalle;
import axios from 'axios'
import React,{ useEffect, useState } from 'react';

const FichaPaciente = (props) => {
    const idPaciente = props.match.params.id
    const [paciente, setPaciente] = useState({})
    const [terapia, setTerapia] = useState({})
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `JWT ${localStorage.getItem('access')}`,
            'Accept': 'application/json'
        }
    };

    
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/api/paciente/`+idPaciente, config)
        .then(res => setPaciente(res.data))

        axios.get(`${process.env.REACT_APP_API_URL}/api/terapia/`+idPaciente, config)
        .then(res => setTerapia(res.data))
    },[])

    
    const { rut, nombre, apellidoPaterno, apellidoMaterno, telefono, email, genero, direccion, comunaResidencia, ocupacionProfecion } = paciente

    return (
        <div className='container mt-5'>
            <div className="card" style={{width: '55rem', fontSize: 'x-large'}}>
                <h3 className='mt-4 ml-4 mb-5'>Ficha del Paciente</h3>
                <div className="card ml-4 mr-4">
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
                    <div className='row ml-3 mt-3'>
                        <div className='col'>
                            <p className='font-weight-light'>Motivo de Consulta: { terapia.motivoConsulta }</p>
                        </div>
                        <div className='col'>
                            <p className='font-weight-light'>Tipo de Terapia: { terapia.tipoTerapia }</p>
                        </div>
                    </div>
                    <div className='row ml-3 mt-3'>
                        <div className='col'>
                            <p className='font-weight-light'>Captacion: { terapia.captacion }</p>
                        </div>
                    </div>
                </div>
                <div className='row ml-3 mt-3'>
                    <button className='mb-3 btn btn-primary mt-4'>Modificar</button>
                </div>
            </div>
        </div>
    );
}

export default FichaPaciente;
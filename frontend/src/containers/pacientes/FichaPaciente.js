import axios from '../../axios';
import React,{ useEffect, useState } from 'react';

const FichaPaciente = (props) => {
    const idPaciente = props.match.params.id
    const [paciente, setPaciente] = useState({})
    const [terapia, setTerapia] = useState({})
    const headers = {
        headers:{
            'Content-Type': 'application/json',
            'Authorization': `JWT ${localStorage.getItem('access')}`,
            'Accept': 'application/json'
        }
    }
    useEffect(() => {
        async function fetchData() {
            const response = await axios.get("/api/paciente/"+idPaciente, headers);
            setPaciente(response.data)
            return response;
        };
        fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[idPaciente]);

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get("/api/terapia/"+idPaciente);
            setTerapia(response.data);
            return response
        };
        fetchData();
    },[idPaciente]);

    
    const { rut, nombre, apellidoPaterno, apellidoMaterno, telefono, email, fechaNacimiento, genero, direccion, comunaResidencia, ocupacionProfecion } = paciente
    const fechaNacimientoDate = new Date(fechaNacimiento);

    return (
        <div className='container mt-5'>
            <div className="jumbotron mt-5" style={{width: '55rem', fontSize: 'x-large'}}>
                <h1 className='display-4 ml-4 mb-4'>Ficha del Paciente</h1>
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
                        <p className='font-weight-light'>Telefono: { telefono }</p>
                    </div>
                    <div className='col'>
                        <p className='font-weight-light'>Email: { email }</p>
                    </div>
                </div>
                <div className='row ml-3 mt-3'>
                    <div className='col'>
                        <p className='font-weight-light'>Genero: { genero }</p>
                    </div>
                    <div className='col'>
                        <p className='font-weight-light'>Direccion: { direccion }</p>
                    </div>
                </div>
                <div className='row ml-3 mt-3'>
                    <div className='col'>
                        <p className='font-weight-light'>Comuna de Residencia: { comunaResidencia }</p>
                    </div>
                    <div className='col'>
                        <p className='font-weight-light'>Fecha de Nacimiento: { fechaNacimientoDate.getDay() }/{ fechaNacimientoDate.getMonth() }/{ fechaNacimientoDate.getFullYear() }</p>
                    </div>
                </div>
                <div className='row ml-3 mt-3'>
                    <div className='col'>
                        <p className='font-weight-light'>Ocupacion o Profecion: { ocupacionProfecion }</p>
                    </div>
                    <div className='col'>
                        <p className='font-weight-light'>Tipo de Terapia: { terapia.tipoTerapia }</p>
                    </div>
                </div>
                <div className='row ml-3 mt-3'>
                    <div className='col'>
                        <p className='font-weight-light'>Motivo de Consulta: { terapia.motivoConsulta }</p>
                    </div>
                    <div className='col'>
                        <p className='font-weight-light'>Captacion: { terapia.captacion }</p>
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
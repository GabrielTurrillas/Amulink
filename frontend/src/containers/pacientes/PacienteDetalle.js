import React from 'react';
import SesionLista from '../../components/terapia/SesionLista';
import { Link } from 'react-router-dom';


const PacienteDetalle = (props) => {
    const idPaciente = props.match.params.id
    return (
        <div className='container mt-4'>
            <SesionLista />
            <Link to={'ficha_paciente/'+idPaciente} className='ml-4'>Ver Ficha del Paciente</Link>
        </div>
        );
    }
    
    export default PacienteDetalle;

    /*         
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
                <button className='mb-3 btn btn-primary mt-4'>Modificar</button>
                <h3 className='mb-4 ml-4'>Lista de sesiones</h3> */
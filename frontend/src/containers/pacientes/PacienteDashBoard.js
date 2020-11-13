import React from 'react';
import SesionLista from '../../components/terapia/SesionLista';
import { Link } from 'react-router-dom';


const PacienteDashBoard = (props) => {
    const idPaciente = props.match.params.id
    return (
        <div className='container'>
            <div className='jumbotron mt-5'>
                <h3 className='display-4 ml-4'>Sesiones</h3>
                <p className='lead ml-4'>Lista de Sesiones</p>
                <SesionLista />
                <Link className='btn btn-primary ml-4' to={'registro_sesion/'+idPaciente} >Registrar Sesion</Link>
                <Link className='btn btn-outline-primary ml-4' to={'ficha_paciente/'+idPaciente} >Ver Ficha del Paciente</Link>
            </div>
        </div>
    );
}
    
export default PacienteDashBoard;
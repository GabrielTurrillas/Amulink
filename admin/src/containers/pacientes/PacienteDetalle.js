import React from 'react';
import SesionLista from '../../components/terapia/SesionLista';
import { Link } from 'react-router-dom';


const PacienteDetalle = (props) => {
    const idPaciente = props.match.params.id
    return (
        <div className='container'>
            <div className='jumbotron mt-5'>
                <SesionLista />
                <Link className='btn btn-primary ml-4' to={'registro_sesion/'+idPaciente} >Registrar Sesion</Link>
                <Link className='btn btn-outline-primary ml-4' to={'ficha_paciente/'+idPaciente} >Ver Ficha del Paciente</Link>
            </div>
        </div>
    );
}
    
export default PacienteDetalle;
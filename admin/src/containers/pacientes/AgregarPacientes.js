import React from 'react';
import PacienteLista from '../../components/pacientes/PacienteLista';
import FormularioPaciente from '../../components/pacientes/FormularioPaciente';

const AgregarPacientes = () => {
    return (
        <div className='container mt-5'>
            <div className='jumbotron mt-5'>
                <div className='ml-4 mr-4'>
                    <h1 className='display-4'>Pacientes</h1>
                    <p className='lead'>Ingresa un Paciente</p>
                    <FormularioPaciente />
                    <PacienteLista />
                </div>
            </div>
        </div>
    );
}

export default AgregarPacientes;
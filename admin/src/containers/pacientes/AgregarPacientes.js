import React from 'react';
import PacienteLista from '../../components/pacientes/PacienteLista';
import FormularioPaciente from '../../components/pacientes/FormularioPaciente';

const AgregarPacientes = () => {
    return (
        <div className='container mt-5'>
            <div className='jumbotron mt-5'>
                <FormularioPaciente />
                <PacienteLista />
            </div>
        </div>
    );
}

export default AgregarPacientes;
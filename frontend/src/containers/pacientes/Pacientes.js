import React from 'react';
import PacienteLista from '../../components/pacientes/PacienteLista';
import AgregarPaciente from '../../components/pacientes/AgregarPaciente';

const Pacientes = () => {
    return (
        <div className='container mt-5'>
            <div className='jumbotron mt-5'>
                <AgregarPaciente />
                <PacienteLista />
            </div>
        </div>
    );
}

export default Pacientes;
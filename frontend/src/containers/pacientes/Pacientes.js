import React from 'react';
import PacienteLista from '../../components/pacientes/PacienteLista';
import AgregarPaciente from '../../components/pacientes/AgregarPaciente';

const Pacientes = () => {

    return (
        <div className='container mt-5'>
            <AgregarPaciente />
            <PacienteLista />
        </div>
    );
}

export default Pacientes;
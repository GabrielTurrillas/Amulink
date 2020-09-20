import React from 'react';
import PacienteLista from '../../components/pacientes/PacienteLista';
import AgregarPaciente from '../../components/pacientes/AgregarPaciente';

const Pacientes = () => {

    return (
        <div className='container mt-5'>
            <div class='card'>
                <h1 className='mt-4 ml-4'>Pacientes</h1>
                <p class="lead ml-4">Ingresar pacientes</p>
                <AgregarPaciente />
            </div>
            <div class='card mt-4 mb-5'>
                <PacienteLista />
            </div>
        </div>
    );
}

export default Pacientes;
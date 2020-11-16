import React from 'react';
import PacienteLista from '../../components/pacientes/PacienteLista';

const Pacientes = () => {
    return (
        <div className='container mt-5'>
            <div className='jumbotron mt-5'>
                <h3 className='display-4 ml-4'>Pacientes</h3>
                <p className='lead ml-4'>Lista de Pacientes</p>
                <PacienteLista />
            </div>
        </div>
    );
}

export default Pacientes;
import React from 'react';
import DerivacionPacientes from '../../components/pacientes/DerivacionPacientes'

const Derivacion = () => {
    return (
        <div className='container mt-5'>
            <div className='jumbotron mt-5'>
                <div className='ml-5'>
                    <DerivacionPacientes />
                </div>
            </div>
        </div>
    );
};

export default Derivacion;

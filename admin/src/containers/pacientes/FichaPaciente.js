import React from 'react';
import PacienteDetalle from '../../components/pacientes/PacienteDetalle';

const FichaPaciente = () => {
    return (
        <div style={{width: '55rem', fontSize: 'x-large'}}>
            <h1 className='display-4 mb-4'>Ficha del Paciente</h1>
            <PacienteDetalle />
            <div className='mt-3' />
            <button className='mb-3 btn btn-primary mt-4'>Modificar</button>
        </div>
    );
};

export default FichaPaciente; 
import React from 'react';
import PacienteDetalle from '../../components/pacientes/PacienteDetalle';

const FichaPaciente = (props) => {
    return (
        <div className='container mt-5'>
            <div className="jumbotron mt-5" style={{width: '55rem', fontSize: 'x-large'}}>
                <h1 className='display-4 ml-4 mb-4'>Ficha del Paciente</h1>
                <PacienteDetalle />
                <div className='row ml-3 mt-3'>
                    <button className='mb-3 btn btn-primary mt-4'>Modificar</button>
                </div>
            </div>
        </div>
    );
}

export default FichaPaciente;
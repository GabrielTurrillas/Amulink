import React, { useState, useContext, Fragment } from 'react';
import Paciente from './Paciente';
import { PacienteContext } from './PacienteContext';

const PacienteLista = () => {
    const [pacientes, setPacientes] = useContext(PacienteContext)
    return(
        <Fragment>
            {pacientes.map(paciente => (
                <Paciente key={paciente.id} nombre={paciente.nombre} apellidoMaterno={paciente.apellidoMaterno} email={paciente.email} />
            ))}
        </Fragment>
    );
}

export default PacienteLista;
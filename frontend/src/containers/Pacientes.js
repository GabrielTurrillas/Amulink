import React, { Fragment }  from 'react';
import Nav from '../components/Nav';
import AgregarPaciente from '../components/pacientes/AgregarPaciente'
import { PacienteProvider } from '../components/pacientes/PacienteContext';
import PacienteLista from '../components/pacientes/PacienteLista';

const Pacientes = () => {
    return (
        <Fragment>
            <Nav />
            <PacienteProvider>
                <AgregarPaciente />
                <PacienteLista />
            </PacienteProvider>
        </Fragment>
    );
}

export default Pacientes;
import React, { Fragment }  from 'react';
import Nav from '../components/Nav';
import PacienteLista from '../components/PacienteLista';
import AgregarPaciente from '../components/AgregarPaciente'
import { PacienteProvider } from '../components/PacienteContext';

const Pacientes = () => {
    return (
        <Fragment>
            <PacienteProvider>
                <Nav />
                <AgregarPaciente />
                <PacienteLista />
            </PacienteProvider>
        </Fragment>
    );
}

export default Pacientes;
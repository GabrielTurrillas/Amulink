import React, { Fragment }  from 'react';
import PacienteLista from '../../components/pacientes/PacienteLista';
import AgregarPaciente from '../../components/pacientes/AgregarPaciente';

const Pacientes = () => {

    return (
        <Fragment>
            <h1>Pacientes</h1>
            <AgregarPaciente />
            <PacienteLista />
        </Fragment>
    );
}

export default Pacientes;
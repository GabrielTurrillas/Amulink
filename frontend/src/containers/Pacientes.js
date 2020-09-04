import React, { Fragment }  from 'react';
import Nav from '../components/Nav';
/* import AgregarPaciente from '../components/pacientes/AgregarPaciente' */
import PacienteLista from '../components/pacientes/PacienteLista';

const Pacientes = () => {
    return (
        <Fragment>
            <Nav />
{/*                <AgregarPaciente /> */}
            <PacienteLista />
        </Fragment>
    );
}

export default Pacientes;
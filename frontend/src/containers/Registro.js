import React, { Fragment } from 'react';
import Nav from '../components/Nav';
import FormularioRegistro from '../components/cuentas/FormularioRegistro';

const Registro = () => {
    return (
        <Fragment>
            <Nav />
            <h3>Registro</h3> <br/>
            <FormularioRegistro />
        </Fragment>
    )
}

export default Registro;
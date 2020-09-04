import React, { Fragment } from 'react';
import Nav from '../components/Nav';
import FormularioLogin from '../components/cuentas/FormularioLogin';

const Login = () => {
    return (
        <Fragment>
            <Nav />
            <h3>Login</h3> <br/>
            <FormularioLogin />
        </Fragment>
    )
}

export default Login;
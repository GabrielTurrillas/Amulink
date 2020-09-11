import React, { Fragment, useEffect }  from 'react';
/* import AgregarPaciente from '../components/pacientes/AgregarPaciente' */
import PacienteLista from '../../components/pacientes/PacienteLista';
import  { checkAuthenticated, load_user } from '../../redux/actions/auth'


const Pacientes = () => {

    useEffect(() => {
        checkAuthenticated();
        load_user();
    }, [])
    return (
        <Fragment>
            <h1>Pacientes</h1>
            <PacienteLista />
        </Fragment>
    );
}

export default Pacientes;
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Paciente = ({id, nombre, apellidoPaterno, email}) => {    
    return(
        <Fragment>
            nombre: <Link to={'/pacientes/'+id} >{nombre}</Link> apellido: {apellidoPaterno} email: {email}
        </Fragment>
    );
}

export default Paciente



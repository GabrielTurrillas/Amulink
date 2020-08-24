import React, { Fragment } from 'react';


const Paciente = ({ nombre, apellidoMaterno, email }) => {

    return(
        <Fragment>
            <h3>[{nombre} {apellidoMaterno}] email: {email}</h3>
        </Fragment>
    );
}

export default Paciente;
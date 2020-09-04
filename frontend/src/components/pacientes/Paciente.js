import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

const Paciente = () => {    
    

    return(
        <Fragment>
            <h3>[{nombre} {apellidoMaterno}] email: {email}</h3>
        </Fragment>
    );
}

export default Paciente
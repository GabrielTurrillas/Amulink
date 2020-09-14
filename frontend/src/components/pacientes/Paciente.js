import React, { Fragment } from 'react';

const Paciente = ({nombre, apellidoPaterno, email}) => {    
    return(
        <Fragment>
            nombre: {nombre} apellido: {apellidoPaterno} email: {email}
        </Fragment>
    );
}

export default Paciente



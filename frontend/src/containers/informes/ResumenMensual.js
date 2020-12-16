import React, { Fragment } from 'react';
import TotalHorasAtendidas from '../../components/informes/TotalHorasAtendidas'
import NumeroPacientes from '../../components/informes/NumeroPacientes'

const ResumenMensual = () => {
    return ( 
        <Fragment>
            <h3 className='display 4'>Resumen Mensual</h3>
            <NumeroPacientes />
            <TotalHorasAtendidas />
        </Fragment>
    );
}

export default ResumenMensual;

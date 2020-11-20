import React from 'react';
import TotalHorasAtendidas from '../../components/informes/TotalHorasAtendidas'
import NumeroPacientes from '../../components/informes/NumeroPacientes'

const ResumenMensual = () => {
    return (
        <div className='container mt-5'>
            <div className='jumbotron mt-5'>
                <h3 className='display 4'>Resumen Mensual</h3>
                <NumeroPacientes />
                <TotalHorasAtendidas />
            </div>
        </div>
    );
}

export default ResumenMensual;

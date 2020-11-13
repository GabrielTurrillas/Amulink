import React from 'react';
import TotalHorasAtendidas from '../../components/terapeuta/TotalHorasAtendidas'

const ResumenMensual = () => {
    return (
        <div className='container mt-5'>
            <div className='jumbotron mt-5'>
                <h3 className='display 4'>Resumen Mensual</h3>
                <TotalHorasAtendidas />
            </div>
        </div>
    );
}

export default ResumenMensual;

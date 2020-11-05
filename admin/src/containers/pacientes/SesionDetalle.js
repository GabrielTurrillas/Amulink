import React from 'react';
import SesionDetalleComponente from '../../components/terapia/SesionDetalleComponente';

const SesionDetalle = () => {       
    return (
        <div className='container mt-5'>
            <div className='jumbotron mt-5' style={{width: '55rem', fontSize: 'x-large'}}>
                <SesionDetalleComponente />
            </div>
        </div>
    );
}

export default SesionDetalle;

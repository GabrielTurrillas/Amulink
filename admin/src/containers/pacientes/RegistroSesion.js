import React from 'react';
import SesionLista from '../../components/terapia/SesionLista';
import RegistrarSesion from '../../components/terapia/RegistrarSesion';

const RegistroSesion = () => {
    return (
        <div className='container mt-5'>
            <div className='jumbotron mt-5'>
                <RegistrarSesion />
            </div>
        </div>
    );
}

export default RegistroSesion;

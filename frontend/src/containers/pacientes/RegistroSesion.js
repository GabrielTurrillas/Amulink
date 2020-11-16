import React from 'react';
import SesionLista from '../../components/terapia/SesionLista';
import FormularioSesion from '../../components/terapia/FormularioSesion';

const RegistroSesion = () => {
    return (
        <div className='container'>
            <div className='jumbotron mt-5'>
                <h3 className="display-4 ml-4">Registro de Sesion</h3>
                <p className="lead ml-4 mb-5">Registra una sesion</p>
                <FormularioSesion />
                <div className='mt-5'></div>
                <SesionLista />
            </div>
        </div>
    );
}

export default RegistroSesion;

import React from 'react';
import NumeroSesionesMensuales from '../../components/informes/NumeroSesionesMensuales';
import NumeroPacientesActivos from '../../components/informes/NumeroPacientesActivos';

const AreaComercial = () => {
    return (
        <div className='container mt-5'>
            <div className='jumbotron mt-5'>
                <h3 className='display 4'>Informe Area Comercial</h3>
                <NumeroSesionesMensuales />
                <NumeroPacientesActivos />
            </div>
        </div>
    );
}

export default AreaComercial;

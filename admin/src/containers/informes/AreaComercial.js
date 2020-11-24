import React from 'react';
import NumeroSesionesMensuales from '../../components/informes/NumeroSesionesMensuales';
import NumeroPacientesActivos from '../../components/informes/NumeroPacientesActivos';
import NumeroSesionesTerapeutaMes from '../../components/informes/NumeroSesionesTerapeutaMes';

const AreaComercial = () => {
    return (
        <div className='container mt-5'>
            <div className='jumbotron mt-5'>
                <h3 className='display 4'>Informe Area Comercial</h3>
                <NumeroSesionesMensuales />
                <NumeroPacientesActivos />
                <NumeroSesionesTerapeutaMes />
            </div>
        </div>
    );
}

export default AreaComercial;

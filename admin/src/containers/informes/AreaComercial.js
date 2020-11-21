import React from 'react';
import NumeroSesionesMensuales from '../../components/informes/NumeroSesionesMensuales';

const AreaComercial = () => {
    return (
        <div className='container mt-5'>
            <div className='jumbotron mt-5'>
                <h3 className='display 4'>Informe Area Comercial</h3>
                <NumeroSesionesMensuales />
            </div>
        </div>
    );
}

export default AreaComercial;

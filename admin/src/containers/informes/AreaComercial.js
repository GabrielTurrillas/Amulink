import React, {Fragment} from 'react';
import NumeroSesionesMensuales from '../../components/informes/NumeroSesionesMensuales';
import NumeroPacientesActivos from '../../components/informes/NumeroPacientesActivos';
import NumeroSesionesTerapeutaMes from '../../components/informes/NumeroSesionesTerapeutaMes';

const AreaComercial = () => {
    return (
        <Fragment>
            <h3 className='display 4'>Informe Area Comercial</h3>
            <NumeroSesionesMensuales />
            <NumeroPacientesActivos />
            <NumeroSesionesTerapeutaMes />
        </Fragment>
    );
}

export default AreaComercial;

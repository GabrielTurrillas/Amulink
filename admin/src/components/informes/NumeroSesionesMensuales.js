import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNumeroSesionesMensuales } from '../../redux/actions/informesActions';

const NumeroSesionesMensuales = () => {
    const numeroSesionesMes = useSelector(state => state.informesReducer.numeroSesionesMes)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchNumeroSesionesMensuales())
    }, [dispatch]);
    return (
        <Fragment>
            <p>Numero de Sesiones Mensuales Totales: {numeroSesionesMes}</p>
        </Fragment>
    );
}

export default NumeroSesionesMensuales;
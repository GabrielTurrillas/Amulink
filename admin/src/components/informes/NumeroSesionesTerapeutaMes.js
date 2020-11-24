import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNumeroSesionesTerapeutaMes } from '../../redux/actions/informesActions';

const NumeroSesionesTerapeutaMes = () => {
    const numeroSesionesTerapeutaMes = useSelector(state => state.informesReducer.numeroSesionesTerapeutaMes)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchNumeroSesionesTerapeutaMes(terapeuta, mes, año))
    }, [dispatch]);
    return (
        <Fragment>
            <p>Numero de Pacientes Activos: {numeroSesionesTerapeutaMes}</p>
        </Fragment>
    );
};

export default NumeroSesionesTerapeutaMes;
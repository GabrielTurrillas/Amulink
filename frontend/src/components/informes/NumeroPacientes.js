import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNumeroPacientes } from '../../redux/actions/informesActions';

/* Containers:
    ResumenMensual.js
 */

const NumeroPacientes = () => {
    const numeroPacientes = useSelector(state => state.informesReducer.numeroPacientes)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchNumeroPacientes())
    }, [dispatch]);
    return (
        <Fragment>
            <p>Numero de Pacientes: {numeroPacientes}</p>
        </Fragment>
    );
}

export default NumeroPacientes;
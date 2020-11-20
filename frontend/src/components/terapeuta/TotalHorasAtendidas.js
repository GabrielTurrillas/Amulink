import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContarSesionesMes } from '../../redux/actions/terapeutaActions';

const TotalHorasAtendidas = () => {
    const sesionesMes = useSelector(state => state.terapeutaReducer.sesionesMes)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchContarSesionesMes())
    }, [dispatch]);
    return (
        <Fragment>
            <p>Sesiones del mes: {sesionesMes}</p>
        </Fragment>
    );
}

export default TotalHorasAtendidas;

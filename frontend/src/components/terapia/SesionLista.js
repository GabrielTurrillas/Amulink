import React, { useEffect, useState, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { fetchSesiones } from '../../redux/actions/terapiaActions';

const SesionLista = () => {
    const dispatch = useDispatch();
    const { id:idPaciente } = useParams();
    const sesiones = useSelector(state => state.terapiaReducer.sesiones)

    useEffect(() => {
        dispatch(fetchSesiones(idPaciente));
    }, [dispatch]);
    
    if (!sesiones || !sesiones.length) {
        return (
            <p>Spiner</p>
        ) 
    }

    return (
       <Fragment>
            <div className='card ml-4 mr-4 mb-4'>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Fecha Sesion</th>
                            <th scope="col">Asistencia</th>
                            <th scope="col">Pago</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sesiones.map(({ id, asistio, fechaSesion, pago }) => {
                                const fechaSesionDate = new Date(fechaSesion);
                                var pagoString
                                if(pago) {
                                    pagoString = 'Pago Realizado'
                                } else {
                                    pagoString = 'No a Pagado'
                                }
                                var asistioString
                                if(asistio) {
                                    asistioString = 'Asistio'
                                } else {
                                    asistioString = 'No Asistio'
                                }
                                return(
                                    <tr key={id} className='clickable-row'>
                                        <th scope="row">{id}</th>
                                        <td><Link to={"/pacientes/sesion_detalle/"+id}>{fechaSesionDate.getDay()}/{fechaSesionDate.getMonth()}/{fechaSesionDate.getFullYear()}</Link></td>
                                        <td><Link to={"/pacientes/sesion_detalle/"+id}>{asistioString}</Link></td>
                                        <td><Link to={"/pacientes/sesion_detalle/"+id}>{pagoString}</Link></td>
                                    </tr>
                                )
                            }
                        )}
                    </tbody>
                </table>
            </div>
        </Fragment>
    ) 
}

export default SesionLista;
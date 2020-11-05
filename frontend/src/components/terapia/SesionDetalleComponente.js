import React, { Fragment, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const SesionDetalleComponente = () => {
    const { id:idSesion } = useParams()
    const [sesion, setSesion] = useState({})
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `JWT ${localStorage.getItem('access')}`,
            'Accept': 'application/json'
        }
    };

    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_API_URL}/api/terapia/sesion/sesion_detalle/`+idSesion, config)
        .then(res => setSesion(res.data))
    }, [])
    
    const { pago, asistio, fechaSesion, modalidad, notasSesion, fechaPago } = sesion
    const fechaSesionDate = new Date(fechaSesion)
    const fechaPagoDate = new Date(fechaPago)

    if(pago){
        var pagoString = 'Pago Realizado'
    } else {
        var pagoString = 'No a Pagado'
    }

    if(asistio){
        var asistioString = 'Asistio'
    } else {
        var asistioString = 'No Asistio'
    }

    return (
        <Fragment>
            <div className='ml-4 mr-4'>
                <h3 className='display-4 ml-4 mb-4'>Detalle de Sesion</h3>
                <div className='row ml-3 mt-3'>
                    <div className='col'>
                        <p className='font-weight-light'>Fecha de la Sesion: {fechaSesionDate.getDay()}/{fechaSesionDate.getMonth()}/{fechaSesionDate.getFullYear()}</p>
                    </div>
                    <div className='col'>
                        <p className='font-weight-light'>Modalidad: {modalidad}</p>
                    </div>
                </div>
                <div className='row ml-3 mt-3'>
                    <div className='col'>
                        <p className='font-weight-light'>Notas de la Sesion: {notasSesion}</p>
                    </div>
                    <div className='col'>
                        <p className='font-weight-light'>Fecha de Pago: {fechaPagoDate.getDay()}/{fechaPagoDate.getMonth()}/{fechaPagoDate.getFullYear()}</p>
                    </div>
                </div>
                <div className='row ml-3 mt-3'>
                    <div className='col'>
                        <p className='font-weight-light'>Pago?: {pagoString}</p>
                    </div>
                    <div className='col'>
                        <p className='font-weight-light'>Asistencia: {asistioString}</p>
                    </div>
                </div>
                <div className='row ml-3 mt-3'>
                    <button className='mb-3 btn btn-primary mt-4'>Modificar</button>
                </div>
            </div>
        </Fragment>
    );
}

export default SesionDetalleComponente;

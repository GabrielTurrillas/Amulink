import React, { Fragment, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";

const RegistrarSesion = () => {
    const { id:idPaciente } = useParams()
    const [instanciaTerapia, setInstanciaTerapia] = useState({})
    const [fechaSesion, setFechaSesion] = useState(new Date())
    const [fechaPago, setFechaPago] = useState(new Date())

    const {register, handleSubmit, errors} = useForm();
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `JWT ${localStorage.getItem('access')}`,
            'Accept': 'application/json'
        }
    };

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/api/terapia/`+idPaciente, config)
        .then(res => setInstanciaTerapia(res.data))
    },[])

    const { id:terapia } = instanciaTerapia

    const onSubmit = (data) => {
        const body = {...data, terapia, fechaSesion, fechaPago}
        console.log(body)
        console.log(config)
        axios.post(`${process.env.REACT_APP_API_URL}/api/terapia/sesion/`+idPaciente, body , config).catch(err => console.log(err))
    };
    return (    
        <Fragment>
            <h1 className="mt-4 ml-4 display-4">Registro de Sesion</h1>
            <p className="lead ml-4 mb-5">Registra una sesion</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='row ml-2 mr-2'>
                    <div className='form-group col-6'>
                        <label htmlFor="fechaSesion" className='mr-3'>Fecha de Sesion</label>
                        <DatePicker
                            className='form-control' 
                            id='fechaSesion'
                            name='fechaSesion'  
                            selected={fechaSesion}
                            onChange={date => setFechaSesion(date)}
                        />
                    </div>
                    <div className='form-group col-6'>
                        <input
                            type="checkbox"
                            id="asistio"
                            name="asistio" 
                            ref={register({
                            })}
                        /> 
                        <label htmlFor="asistio" className="ml-2">Asistio?</label>
                    </div>
                </div>
                <div className='row ml-2 mr-2'>
                    <div className='form-group col-6'>
                        <input
                            className='form-control' 
                            type="text" 
                            name="modalidad" 
                            placeholder="Modalidad"
                            ref={register({
                                required:'Campo "Modalidad" obligatorio',
                            })}
                        /> 
                        {errors.apellidoMaterno && <p>{errors.apellidoMaterno.message}</p>}
                    </div>
                    <div className='form-group col-6'>
                        <input
                            type="checkbox"
                            id="pago"
                            name="pago" 
                            ref={register({
                            })}
                        /> 
                        <label htmlFor="pago" className="ml-2">Pago?</label>
                    </div>
                </div>
                <div className='row ml-2 mr-2'>
                    <div className='form-group col-6'>
                        <textarea
                            className='form-control' 
                            type="textarea"
                            name="notasSesion" 
                            placeholder="Notas de la sesion"
                            ref={register({
                            })}
                        /> 
                    </div>
                    <div className='form-group col-6'>
                        <label htmlFor="fechaSesion" className='mr-3'>Fecha de Pago</label>
                        <DatePicker
                            className='form-control' 
                            id='fechaPago' 
                            name='fechaPago'
                            selected={fechaPago}
                            onChange={date => setFechaPago(date)}
                        />
                    </div>
                </div>
                <button className='ml-4 btn btn-success' type='submit'>Registrar</button>
            </form>
        </Fragment>
    );
}

export default RegistrarSesion;

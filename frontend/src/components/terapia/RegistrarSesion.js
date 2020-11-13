import React, { Fragment, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import { agregarSesiones, fetchTerapia } from '../../redux/actions/terapiaActions';

import "react-datepicker/dist/react-datepicker.css";

const RegistrarSesion = () => {
    const { id:idPaciente } = useParams()
    const instanciaTerapia = useSelector(state => state.terapiaReducer.terapia)
    const [{id:terapia}] = instanciaTerapia
    console.log('instanciaTerapia:',instanciaTerapia)
    console.log('idTerapia:', terapia)
    const [fechaSesion, setFechaSesion] = useState(new Date())
    const [fechaPago, setFechaPago] = useState(new Date())
    const {register, handleSubmit, errors} = useForm();
    const dispatch = useDispatch();
    const onSubmit = (data) => {
        const body = {...data, terapia, fechaSesion, fechaPago};
        console.log('body:',body)
        dispatch(agregarSesiones(body, idPaciente));
    };
    useEffect(() => {
        dispatch(fetchTerapia(idPaciente));
    },[dispatch]);
    return (    
        <Fragment>
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
                <button className='ml-4 btn btn-success' type='submit' to={'pacientes/'+idPaciente} >Registrar</button>
            </form>
        </Fragment>
    );
}

export default RegistrarSesion;

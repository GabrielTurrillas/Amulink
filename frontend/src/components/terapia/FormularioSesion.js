import React, { Fragment, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import { agregarSesiones, fetchTerapia } from '../../redux/actions/terapiaActions';

import "react-datepicker/dist/react-datepicker.css";

/* Containers 
    RegistroSesion.js
*/

const FormularioSesion = () => {
    const { id:idPaciente } = useParams()
    const instanciaTerapia = useSelector(state => state.terapiaReducer.terapia)
    const {id:terapia} = instanciaTerapia
    const [fechaSesion, setFechaSesion] = useState(new Date())
    const [fechaPago, setFechaPago] = useState(new Date())
    const {register, handleSubmit, errors} = useForm();
    const dispatch = useDispatch();
    const onSubmit = (data) => {
        const body = {...data, terapia, fechaSesion, fechaPago};
        dispatch(agregarSesiones(body, idPaciente));
    };
    useEffect(() => {
        dispatch(fetchTerapia(idPaciente));
    },[dispatch, idPaciente]);
    return (    
        <Fragment>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='row'>
                    <div className='form-group col-6'>
                        <label htmlFor="fechaSesion" className='mr-3'>Fecha de Sesion</label>
                        <DatePicker
                            className='form-control' 
                            id='fechaSesion'
                            name='fechaSesion'  
                            dateFormat='dd/MM/yyyy'
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
                <div className='row'>
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
                <div className='row'>
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
                            dateFormat='dd/MM/yyyy'
                            selected={fechaPago}
                            onChange={date => setFechaPago(date)}
                        />
                    </div>
                </div>
                <button className='btn btn-success' type='submit' to={'pacientes/'+idPaciente} >Registrar</button>
            </form>
        </Fragment>
    );
};

export default FormularioSesion;

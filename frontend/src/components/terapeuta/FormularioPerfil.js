import React, { Fragment, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import DatePicker from "react-datepicker";
import { putPerfil, fetchPerfil } from '../../redux/actions/terapeutaActions';

import "react-datepicker/dist/react-datepicker.css";

const FormularioPerfil = () => {
    const perfil = useSelector(state => state.terapeutaReducer.perfil)
    const dispatch = useDispatch();
    const [startDate, setStartDate] = useState(new Date());
    const {register, handleSubmit, errors} = useForm();

    useEffect(() => {
        dispatch(fetchPerfil());
    },[dispatch]);

    const { userAccount, rut, nombre, apellidoPaterno, apellidoMaterno, telefono, email, genero, fechaNacimiento } = perfil
    /* const fechaNacimientoDate = new Date(fechaNacimiento) */

    const onSubmit = (data) => {
        const { userAccount, rut, nombre, apellidoPaterno, apellidoMaterno, telefono, email, genero } = data
        const body = JSON.stringify({userAccount, rut, nombre, apellidoPaterno, apellidoMaterno, telefono, email, genero, fechaNacimiento})
        console.log('Data:', body);
        dispatch(putPerfil(body));
    };

    return (
        <Fragment>
            <div className='ml-4 mr-4'>
                <h1 className='display-4'>Perfil</h1>
                <p className='lead'>Ingresa tu Perfil</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='row'>
                        <div className='form-group col-6'>
                            <input
                                className='form-control' 
                                type="text"
                                name="userAccount" 
                                placeholder="userAccount"
                                defaultValue={userAccount}
                                ref={register({
                                    required:'Campo "Rut" obligatorio',
                                })}
                            /> 
                        </div>
                    </div>
                    <div className='row'>
                        <div className='form-group col-6'>
                            <input
                                className='form-control' 
                                type="text"
                                name="rut" 
                                placeholder="Rut"
                                defaultValue={rut}
                                ref={register({
                                    required:'Campo "Rut" obligatorio',
                                })}
                            /> 
                            {errors.rut && <p>{errors.rut.message}</p>}
                        </div>
                        <div className='form-group col-6'>
                            <input
                                className='form-control'
                                type="text"
                                name="nombre" 
                                placeholder="Nombre"
                                defaultValue={nombre}
                                ref={register({
                                    required: 'Campo "nombre" obligatorio',
                                    minLength: {value: 2, message: 'campo "nombre" debe tener mas de 1 caracter'}
                                })}
                            /> 
                            {errors.nombre && <p>{errors.nombre.message}</p>}
                        </div>
                    </div>
                    <div className='row'>
                        <div className='form-group col-6'>
                            <input
                                className='form-control' 
                                type="text"
                                name="apellidoPaterno" 
                                placeholder="Apellido Paterno"
                                defaultValue={apellidoPaterno}
                                ref={register({
                                    required:'Campo "Apellido Paterno" obligatorio',
                                })}
                            /> 
                            {errors.apellidoPaterno && <p>{errors.apellidoPaterno.message}</p>}
                        </div>
                        <div className='form-group col-6'>
                            <input
                                className='form-control' 
                                type="text" 
                                name="apellidoMaterno" 
                                placeholder="Apellido Materno"
                                defaultValue={apellidoMaterno}
                                ref={register({
                                    required:'Campo "Apellido Materno" obligatorio',
                                    minLength: {value: 2, message: 'campo "Apellido Materno" debe tener mas de 1 caracter'}
                                })}
                            /> 
                            {errors.apellidoMaterno && <p>{errors.apellidoMaterno.message}</p>}
                        </div>
                    </div>
                    <div className='row'>
                        <div className='form-group col-6'>
                            <input
                                className='form-control' 
                                type="text"
                                name="telefono" 
                                placeholder="Telefono"
                                defaultValue={telefono}
                                ref={register({
                                    required:'Campo "Telefono" obligatorio',
                                })}
                            /> 
                            {errors.telefono && <p>{errors.telefono.message}</p>}
                        </div>
                        <div className='form-group col-6'>
                            <input
                                className='form-control' 
                                type="text"
                                name="email" 
                                placeholder="Email"
                                defaultValue={email}
                                ref={register({
                                    required:'Campo "Email" obligatorio',
                                })}
                            /> 
                            {errors.email && <p>{errors.email.message}</p>}
                        </div>
                    </div>
                    <div className='row'>
                        <div className='form-group col-6'>
                            <input
                                className='form-control' 
                                type="text"
                                name="genero" 
                                placeholder="Genero"
                                defaultValue={genero}
                                ref={register({
                                    required:'Campo "Genero" obligatorio',
                                })}
                            /> 
                        {errors.genero && <p>{errors.genero.message}</p>}
                        </div>
                        <div className='col-6'>
                            <div className='row'>
                                <div className='form-group col-12'>
                                    <label htmlFor="fechaNacimiento" className='mr-3'>Fecha de Nacimiento</label>
                                    <DatePicker
                                        className='form-control' 
                                        id='fechaNacimiento' 
                                        selected={startDate} 
                                        onChange={date => setStartDate(date)} 
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className='mb-3 btn btn-success' type='submit'>Ingresar</button>
                </form>
            </div>
        </Fragment>
    );
}

export default FormularioPerfil;

import React, { Fragment } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const RegistrarSesion = () => {
    const {register, handleSubmit, errors} = useForm();
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `JWT ${localStorage.getItem('access')}`,
            'Accept': 'application/json'
        }
    };
    const data = JSON.stringify({})
    const onSubmit = (data) => {
        axios.post(`${process.env.REACT_APP_API_URL}/api/terapia/sesion/`, data, config)
    };
    return (    
        <Fragment>
            <div className="card mb-4">
                <h1 className="mt-4 ml-4">Registro de Sesion</h1>
                <p className="lead ml-4">Registra una sesion</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='row ml-2 mr-2'>
                        <div className='form-group col-6'>
                            <input
                                className='form-control' 
                                type="text"
                                name="fecha" 
                                placeholder="Fecha"
                                ref={register({
                                    required:'Campo "Fecha" obligatorio',
                                })}
                                /> 
                            {errors.apellidoPaterno && <p>{errors.apellidoPaterno.message}</p>}
                        </div>
                        <div className='form-group col-6'>
                            <input
                                type="checkbox"
                                id="asistio"
                                name="asistio" 
                                ref={register({
                                })}
                                /> 
                            <label for="asistio" className="ml-2">Asistio?</label>
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
                            <label for="pago" className="ml-2">Pago?</label>
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
                            <input
                                className='form-control' 
                                type="text"
                                name="fechaPago" 
                                placeholder="Fecha de Pago"
                                ref={register({
                                })}
                                /> 
                        </div>
                    </div>
                    <button className='ml-4 mb-3 btn btn-success' type='submit'>Registrar</button>
                </form>
            </div>
        </Fragment>
    );
}

export default RegistrarSesion;

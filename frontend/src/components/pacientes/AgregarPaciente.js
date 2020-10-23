import React, { Fragment ,useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import DatePicker from "react-datepicker";
import { load_user } from '../../redux/actions/auth';
import { agregarPacientes } from '../../redux/actions/pacientes'

import "react-datepicker/dist/react-datepicker.css";

const AgregarPaciente = () => {
    const [startDate, setStartDate] = useState(new Date()); 
    const {register, handleSubmit, errors} = useForm();
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.user);
    useEffect(() => {
        load_user(); //revisar que pasa si no esta logeado el usuario
    }, []);

    const onSubmit = (data) => {
        dispatch(agregarPacientes(user, startDate, data))
    };
    
    return(
        <Fragment>
            <div className='ml-4 mr-4'>
                <h1 className='display-4'>Pacientes</h1>
                <p className='lead'>Ingresa un Paciente</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='row'>
                        <div className='form-group col-6'>
                            <input
                                className='form-control' 
                                type="text"
                                name="rut" 
                                placeholder="Rut"
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
                                ref={register({
                                    required:'Campo "Genero" obligatorio',
                                })}
                            /> 
                        {errors.genero && <p>{errors.genero.message}</p>}
                        </div>
                        <div className='form-group col-6'>
                            <input
                                className='form-control' 
                                type="text"
                                name="direccion" 
                                placeholder="Direccion"
                                ref={register({
                                    required:'Campo "Direccion" obligatorio',
                                })}
                            /> 
                            {errors.direccion && <p>{errors.direccion.message}</p>}
                        </div>
                    </div>
                    <div className='row'>
                        <div className='form-group col-6'>
                            <input
                                className='form-control' 
                                type="text"
                                name="comunaResidencia" 
                                placeholder="Comuna de residencia"
                                ref={register({
                                    required:'Campo "Comuna de residencia" obligatorio',
                                })}
                            />
                            {errors.comunaResidencia && <p>{errors.comunaResidencia.message}</p>}
                        </div>
                        <div className='form-group col-6'> 
                            <input
                                className='form-control' 
                                type="text"
                                name="ocupacionProfecion" 
                                placeholder="Ocupacion o Profecion"
                                ref={register({
                                    required:'Campo "Ocupacion o Profecion" obligatorio',
                                })}
                            />
                            {errors.ocupacionProfecion && <p>{errors.ocupacionProfecion.message}</p>}
                        </div>
                    </div> 
                    <div className='row'>
                        <div className='col-6'>
                            <div className='row'>
                                <div className='form-group col-12'>
                                    <label for="fechaNacimiento" className='mr-3'>Fecha de Nacimiento</label>
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
};

export default AgregarPaciente;


import React, { Fragment , useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import DatePicker from "react-datepicker";
import { putPaciente, fetchPacienteDetalle } from '../../redux/actions/pacientesActions';

import "react-datepicker/dist/react-datepicker.css";
/* Containers:
    ModificarPaciente.js
*/
const FormularioModificarPaciente = () => {
    const pacienteDetalle = useSelector(state => state.pacientesReducer.pacienteDetalle)
    const {rut,nombre,apellidoPaterno,apellidoMaterno,
        telefono,email,fechaNacimiento,genero,direccion,
        comunaResidencia,ocupacionProfecion,prevision,} = pacienteDetalle || {}
    const {register, handleSubmit, errors} = useForm();
    const dispatch = useDispatch();
    const {id:idPaciente} = useParams()
    const [startDate, setStartDate] = useState(new Date());

    useEffect(()=> {
        dispatch(fetchPacienteDetalle(idPaciente));
        setStartDate(new Date(fechaNacimiento));
    },[dispatch, idPaciente, fechaNacimiento]);

    const onSubmit = (data) => {
        dispatch(putPaciente(idPaciente, startDate ,data));
    };

    return(
        <Fragment>
            <form onSubmit={handleSubmit(onSubmit)}>

                {/* Rut - Nombre */}
                <div className='row'> 
                    <div className='form-group col-6'>
                        {/* <label></label> */}
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

                {/* Apellido Paterno - Apellido Materno */}
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

                {/* Telefono - Email */}
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

                {/* Genero - Direccion */}
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
                    <div className='form-group col-6'>
                        <input
                            className='form-control' 
                            type="text"
                            name="direccion" 
                            placeholder="Direccion"
                            defaultValue={direccion}
                            ref={register({
                                required:'Campo "Direccion" obligatorio',
                            })}
                        /> 
                        {errors.direccion && <p>{errors.direccion.message}</p>}
                    </div>
                </div>

                {/* Comuna de Residencia - Ocupacion Profecion */}
                <div className='row'>
                    <div className='form-group col-6'>
                        <input
                            className='form-control' 
                            type="text"
                            name="comunaResidencia" 
                            placeholder="Comuna de residencia"
                            defaultValue={comunaResidencia}
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
                            defaultValue={ocupacionProfecion}
                            ref={register({
                                required:'Campo "Ocupacion o Profecion" obligatorio',
                            })}
                        />
                        {errors.ocupacionProfecion && <p>{errors.ocupacionProfecion.message}</p>}
                    </div>
                </div>

                {/* Tipo de Terapia */} 
                <div className='row'>
                    <div className='col-6 mt-4'>
                        <h5>Tipo de Terapia</h5>
                        <div className="form-group">
                            <select className="form-control" ref={register} name='prevision' defaultValue={prevision}>
                                <option value='Fonasa'>Fonasa</option>
                                <option value='Isapre'>Isapre</option>
                                <option value='Bajo Costo'>Bajo Costo</option>
                            </select>
                        </div>
                    </div>
                </div>
                
                {/* Fecha de Nacimiento */}
                <div className='row'>
                    <div className='col-6'>
                        <div className='row'>
                            <div className='form-group col-12'>
                                <label htmlFor="fechaNacimiento" className='mr-3'>Fecha de Nacimiento</label>
                                <DatePicker
                                    className='form-control' 
                                    id='fechaNacimiento'
                                    dateFormat='dd/MM/yyyy' 
                                    selected={startDate} 
                                    onChange={date => setStartDate(date)} 
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <button className='mb-3 btn btn-success' type='submit'>Ingresar</button>
            </form>
        </Fragment>
    );
};

export default FormularioModificarPaciente;

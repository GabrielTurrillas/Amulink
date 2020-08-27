import React, { useState, useContext } from 'react';
import { PacienteContext } from './PacienteContext';
import { useForm } from 'react-hook-form';

const AgregarPaciente = () => {
    const [pacientes, setPacientes] = useContext(PacienteContext);

    const {register, handleSubmit, errors} = useForm();

    const onSubmit = (data) => {
        setPacientes(prevPacientes => [...prevPacientes, data])
        fetch('http://127.0.0.1:8000/api/paciente/', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response))
    };

    
    /*     const agregarPaciente = e => {
        e.preventDefault();
        setPacientes(prevPacientes => [...prevPacientes, { nombre: nombre, apellidoMaterno: apellidoMaterno, email: email }])
    }; */
    
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <input 
                type="text"
                name="rut" 
                placeholder="Rut"
                ref={register({
                    required:'Campo "Rut" obligatorio',
                })}
            /> <br/> {errors.rut && <p>{errors.rut.message}</p>} <br/>
            <input
                type="text"
                name="nombre" 
                placeholder="Nombre"
                ref={register({
                    required: 'Campo "nombre" obligatorio',
                    minLength: {value: 2, message: 'campo "nombre" debe tener mas de 1 caracter'}
                })}
            /> <br/> {errors.nombre && <p>{errors.nombre.message}</p>} <br/>
            <input 
                type="text"
                name="apellidoPaterno" 
                placeholder="Apellido Paterno"
                ref={register({
                    required:'Campo "Apellido Paterno" obligatorio',
                })}
            /> <br/> {errors.apellidoPaterno && <p>{errors.apellidoPaterno.message}</p>} <br/>
            <input 
                type="text" 
                name="apellidoMaterno" 
                placeholder="Apellido Materno"
                ref={register({
                    required:'Campo "Apellido Materno" obligatorio',
                    minLength: {value: 2, message: 'campo "Apellido Materno" debe tener mas de 1 caracter'}
                })}
            /> <br/> {errors.apellidoMaterno && <p>{errors.apellidoMaterno.message}</p>} <br/>
            <input 
                type="text"
                name="telefono" 
                placeholder="Telefono"
                ref={register({
                    required:'Campo "Telefono" obligatorio',
                })}
            /> <br/> {errors.telefono && <p>{errors.telefono.message}</p>} <br/>
            <input 
                type="text"
                name="email" 
                placeholder="Email"
                ref={register({
                    required:'Campo "Email" obligatorio',
                })}
            /> <br/> {errors.email && <p>{errors.email.message}</p>} <br/>
            <input 
                type="text"
                name="genero" 
                placeholder="Genero"
                ref={register({
                    required:'Campo "Genero" obligatorio',
                })}
            /> <br/> {errors.genero && <p>{errors.genero.message}</p>} <br/>
            <input 
                type="text"
                name="direccion" 
                placeholder="Direccion"
                ref={register({
                    required:'Campo "Direccion" obligatorio',
                })}
            /> <br/> {errors.direccion && <p>{errors.direccion.message}</p>} <br/>
            <input 
                type="text"
                name="comunaResidencia" 
                placeholder="Comuna de residencia"
                ref={register({
                    required:'Campo "Comuna de residencia" obligatorio',
                })}
            /> <br/> {errors.comunaResidencia && <p>{errors.comunaResidencia.message}</p>} <br/>
            <input 
                type="text"
                name="ocupacionProfecion" 
                placeholder="Ocupacion o Profecion"
                ref={register({
                    required:'Campo "Ocupacion o Profecion" obligatorio',
                })}
            /> <br/> {errors.ocupacionProfecion && <p>{errors.ocupacionProfecion.message}</p>} <br/>
            <button>Submit</button>
        </form>
    );
};

export default AgregarPaciente;
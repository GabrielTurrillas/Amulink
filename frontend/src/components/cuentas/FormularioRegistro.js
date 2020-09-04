import React from 'react';
import { useForm } from 'react-hook-form';

const FormularioRegistro = () => {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data) => {
        fetch('http://127.0.0.1:8000/api/cuenta/register', {
            method:'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .catch(error => console.error('Error', error))
        .then(response => console.log ('Response:', response))
    };
    
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
                type="text"
                name="email"
                placeholder="Email"
                ref={register({
                    required: 'Campo "Email" requerido',
                })}
            /> <br/> {errors.rut && <p>{errors.rut.message}</p>} <br/>
            <input
                type="text"
                name="username"
                placeholder="Nombre de Usuario"
                ref={register({
                    required: 'Campo "Nombre de Usuario" requerido',
                })}
            /> <br/> {errors.rut && <p>{errors.rut.message}</p>} <br/>
            <input
                type="password"
                name="password"
                placeholder="Password"
                ref={register({
                    required: 'Campo "Password" requerido',
                })}
            /> <br/> {errors.rut && <p>{errors.rut.message}</p>} <br/>
            <input
                type="password"
                name="password2"
                placeholder="Confirmacion Password"
                ref={register({
                    required: 'Campo "Confirmacion Password" requerido',
                })}
            /> <br/> {errors.rut && <p>{errors.rut.message}</p>} <br/>
            <button>Submit</button>
        </form>
    )
}

export default FormularioRegistro;
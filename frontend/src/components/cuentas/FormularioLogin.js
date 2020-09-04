import React from 'react';
import { useForm } from 'react-hook-form';

const FormularioLogin = () => {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data) => {
        fetch('http://127.0.0.1:8000/api/cuenta/login', {
            method:'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log ('Response:', response))
    };    

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input 
                type="text"
                name="username"
                placeholder="Email"
                ref={register({
                    required: 'No pusiste ningun email para ingresar',
                })}
            /> <br/> {errors.rut && <p>{errors.rut.message}</p>} <br/>
            <input
                type="password"
                name="password"
                placeholder="Password"
                ref={register({
                    required: 'debes ingresar un password'
                })} 
            /> <br/>
            <button>Submit</button>
        </form>
    );
};

export default FormularioLogin;
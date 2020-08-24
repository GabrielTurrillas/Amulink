import React, { useState, useContext } from 'react';
import { PacienteContext } from './PacienteContext';

const AgregarPaciente = () => {
    const [nombre, setNombre] = useState('');
    const [apellidoMaterno, setApellidoMaterno] = useState('');
    const [email, setEmail] = useState('');
    const [pacientes, setPacientes] = useContext(PacienteContext);

    const updateNombre = e => {
        setNombre(e.target.value);
    };

    const updateApellidoMaterno = e => {
        setApellidoMaterno(e.target.value);
    };

    const updateEmail = e => {
        setEmail(e.target.value);
    };

    const agregarPaciente = e => {
        e.preventDefault();
        setPacientes(prevPacientes => [...prevPacientes, { nombre: nombre, apellidoMaterno: apellidoMaterno, email: email }])
    };

    return(
        <form onSubmit={agregarPaciente}>
            <input
                type="text"
                name="nombre" 
                value={nombre} 
                onChange={updateNombre}
            />
            <input 
                type="text" 
                name="apellidoMaterno" 
                value={apellidoMaterno} 
                onChange={updateApellidoMaterno}
            />
            <input 
                type="text"
                name="email" 
                value={email} 
                onChange={updateEmail}
            />
            <button>Submit</button>
        </form>
    );
};

export default AgregarPaciente;
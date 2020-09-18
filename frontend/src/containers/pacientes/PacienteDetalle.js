import axios from 'axios'
import React,{ useEffect, useState } from 'react';


const PacienteDetalle = (props) => {
    const id = props.match.params.id
    const [paciente, setPaciente] = useState({
    
    })
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `JWT ${localStorage.getItem('access')}`,
            'Accept': 'application/json'
        }
    };
    
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/api/paciente/`+id, config)
        .then(res => setPaciente(res.data))
    }, [])

    
    const { rut, nombre, apellidoPaterno, apellidoMaterno, telefono, email, genero, direccion, comunaResidencia, ocupacionProfecion } = paciente

    return (
        <div>
            <h3>Rut: { rut }</h3>
            <h3>Nombre: { nombre }</h3>
            <h3>Apellido paterno: { apellidoPaterno }</h3>
            <h3>Apelldio materno: { apellidoMaterno }</h3>
            <h3>Genero: { genero }</h3>
            <h3>Telefono: { telefono }</h3>
            <h3>Email: { email }</h3>
            <h3>direccion: { direccion }</h3>
            <h3>Comuna de Residencia: { comunaResidencia }</h3>
            <h3>Ocupacion o Profecion: { ocupacionProfecion }</h3>
        </div>
    );
}

export default PacienteDetalle;
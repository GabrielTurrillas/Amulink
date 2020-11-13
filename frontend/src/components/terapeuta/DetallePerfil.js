import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const DetallePerfil = () => {
    const [perfil, setPerfil]= useState({
        userAccount: '',
        rut:'',
        nombre:'',
        apellidoPaterno:'',
        apellidoMaterno:'',
        telefono:'',
        email:'',
        genero:'',
        fechaNacimiento:''
    })
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `JWT ${localStorage.getItem('access')}`,
            'Accept': 'application/json'
        }
    };
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/api/terapeuta/perfil`, config)
        .then(res => setPerfil(res.data))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const { rut, nombre, apellidoPaterno, apellidoMaterno, telefono, email, genero, fechaNacimiento } = perfil
    const fechaNacimientoDate = new Date(fechaNacimiento);
    
    
    return (
        <Fragment>
            <h1 className='display-4 ml-4 mb-4'>Ficha del Paciente</h1>
            <div className='row ml-3 mt-3'>
                <div className='col'>
                    <p className='font-weight-light'>Rut: { rut }</p>
                </div>
                <div className='col'>
                    <p className='font-weight-light'>Nombre: { nombre }</p>
                </div>
            </div>
            <div className='row ml-3 mt-3'>
                <div className='col'>
                    <p className='font-weight-light'>Apellido Paterno: { apellidoPaterno }</p>
                </div>
                <div className='col'>
                    <p className='font-weight-light'>Apelldio Materno: { apellidoMaterno }</p>
                </div>
            </div>
            <div className='row ml-3 mt-3'>
                <div className='col'>
                    <p className='font-weight-light'>Telefono: { telefono }</p>
                </div>
                <div className='col'>
                    <p className='font-weight-light'>Email: { email }</p>
                </div>
            </div>
            <div className='row ml-3 mt-3'>
                <div className='col'>
                    <p className='font-weight-light'>Genero: { genero }</p>
                </div>
                <div className='col'>
                    <p className='font-weight-light'>Fecha de Nacimiento: { fechaNacimientoDate.getDay() }/{ fechaNacimientoDate.getMonth() }/{ fechaNacimientoDate.getFullYear()} </p>
                </div>
            </div>
            <div className='row ml-3 mt-3'>
                <Link className='btn btn-primary mt-4 ml-4' to='/modificar_perfil' role='button'>Modificar Perfil</Link>
            </div>
        </Fragment>
    );
}

export default DetallePerfil;

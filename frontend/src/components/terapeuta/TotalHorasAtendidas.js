import React, { Fragment, useEffect } from 'react';
import axios from 'axios';

const TotalHorasAtendidas = () => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `JWT ${localStorage.getItem('access')}`,
            'Accept': 'application/json'
        }
    };
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/api/sesion/contar_sesiones_mes`, config)
        .then(res => console.log('response',res.data))
    });
    return (
        <Fragment>
            
        </Fragment>
    );
}

export default TotalHorasAtendidas;

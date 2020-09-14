import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
    <div className='container'>
        <div className='jumbotron mt-5'>
            <h1 className='display-4'>Amülink</h1>
            <p className='lead'>Desarrollo de Amülink</p>
            <hr className='my-4' />
            <p>Sistema de gestion de terapia</p>
            <Link className='btn btn-primary btn-lg' to='/login' role='button'>Login</Link>
        </div>
    </div>
);

export default Home;
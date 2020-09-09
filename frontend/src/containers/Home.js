import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
    <div className='container'>
        <div class='jumbotron mt-5'>
            <h1 class='display-4'>Amülink</h1>
            <p class='lead'>Desarrollo de Amülink</p>
            <hr class='my-4' />
            <p>Sistema de gestion de terapia</p>
            <Link class='btn btn-primary btn-lg' to='/login' role='button'>Login</Link>
        </div>
    </div>
);

export default Home;
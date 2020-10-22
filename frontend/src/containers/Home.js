import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import  PacienteLista  from '../components/pacientes/PacienteLista';

const Home = ({ isAuthenticated }) => {
    const showLoginButton = () => (
        <Fragment>
            <Link className='btn btn-primary btn-lg' to='/login' role='button'>Login</Link>
        </Fragment>
    )
    const hide = () => (
        <></>
    )
    const showPacienteLista = () => (
        <PacienteLista />
    ) 
    const showIngresarPacienteButton = () => (
        <Fragment>
            <Link className='btn btn-success btn-lg' to='/Pacientes' role='button'>Ingresar Paciente</Link>
        </Fragment>
    )

    return (
    <div className='container'>
        <div className='jumbotron mt-5'>
            <h1 className='display-4'>Amülink</h1>
            <p className='lead'>Desarrollo de Amülink</p>
            {isAuthenticated ? showIngresarPacienteButton() : showLoginButton()}
        </div>
        {isAuthenticated ? showPacienteLista() : hide()}
    </div>
    )
};


const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { } )(Home);
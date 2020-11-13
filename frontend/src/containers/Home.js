import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import  PacienteLista  from '../components/pacientes/PacienteLista';

const Home = ({ isAuthenticated }) => {
    const showLoginButton = () => (
        <Fragment>
            <Link className='btn btn-primary btn-lg mt-4 ml-4' to='/login' role='button'>Login</Link>
        </Fragment>
    )
    const hide = () => (
        <></>
    )
    const showPacienteLista = () => (
        <PacienteLista />
    ) 
    return (
    <div className='container'>
        <div className='jumbotron mt-5'>
            <div className='ml-4 mr-4'>
                <h1 className='display-4'>Amülink</h1>
                <p className='lead'>Desarrollo de Amülink</p>
            </div>
                {isAuthenticated ? showPacienteLista() : hide()}
                {isAuthenticated ? hide() : showLoginButton()}
        </div>
    </div>
    )
};


const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { } )(Home);
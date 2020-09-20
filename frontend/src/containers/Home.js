import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Home = ({ isAuthenticated }) => {
    const showLoginButton = () => (
        <Fragment>
            <Link className='btn btn-primary btn-lg' to='/login' role='button'>Login</Link>
        </Fragment>
    )
    const hideLoginButton = () => (
        <></>
    )
    return (
    <div className='container'>
        <div className='jumbotron mt-5'>
            <h1 className='display-4'>Amülink</h1>
            <p className='lead'>Desarrollo de Amülink</p>
            {isAuthenticated ? hideLoginButton() : showLoginButton()}
        </div>
    </div>
    )
};


const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {} )(Home);
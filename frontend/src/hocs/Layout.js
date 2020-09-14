import React, { useEffect } from 'react';
import Nav from '../components/Nav';
import { connect } from 'react-redux';
import { checkAuthenticated, load_user } from '../redux/actions/auth'

const Layout = (props) => {
    const {checkAuthenticated, load_user} = props
    useEffect(() => {
        checkAuthenticated();
        load_user();
    }, [checkAuthenticated, load_user])

    return(
        <div>
            <Nav />
            {props.children}
        </div>
    );
};

export default connect(null, { checkAuthenticated, load_user })(Layout);
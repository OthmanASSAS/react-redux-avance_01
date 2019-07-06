import React from 'react';
import { connect } from 'react-redux';


export default (ChildComponent) => {

    const RequireAuth = ({ isLoggedIn, history }) => {
        console.log('blabla')
        console.log('isLoggedIn', isLoggedIn)
        !isLoggedIn && history.push('/');
        return <ChildComponent />;
    };


    const mapStateToProps = state => ({
        isLoggedIn: state.auth.isLoggedIn
    })
    return connect(mapStateToProps)(RequireAuth);
}

import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const Movies = (props) => {

    console.log(props)

    if (!props.authUser) {
        return (<Redirect to={{
            pathname: "/",
            state: { from: props.location }
        }} />);
    }
    
    return (
        <div>
            <h1>Dashboard</h1>
            <h2>Name: {props.authUser.displayName}</h2>
            <h2>Email: {props.authUser.email}</h2>
        </div>
    );
};

const mapStateToProps = (state) => {
    return { authUser: state.auth.authUser };
}

export default connect(mapStateToProps)(Movies);
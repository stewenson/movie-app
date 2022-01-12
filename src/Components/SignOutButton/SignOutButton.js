import React from 'react';
import { connect } from 'react-redux';
import { signOutAction } from '../../Redux/Actions/AuthActions/authActions';

const SignOutButton = (props) => {
    if (!props.authUser) {
        return null;
    }
    const onClick = (event) => {
        event.preventDefault();
        props.signOut();
    }
    return (
        <button className="signOutBtn" onClick={onClick}>
            Sign out
        </button>
    );
};

const mapStateToProps = (state) => {
    return { authUser: state.auth.authUser };
};

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOutAction())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignOutButton);

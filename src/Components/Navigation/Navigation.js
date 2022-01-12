import React from 'react';
import { Link } from 'react-router-dom';
import SignOut from '../SignOutButton/SignOutButton';
import { connect } from 'react-redux';

const Navigation = (props) => {
    return (
        <ul>
            {props.authUser ?
                <>
                <li><Link to='/movies'>Movies</Link></li>
                <li><SignOut /></li>
                </>
                :
                <>
                <li><Link to='/register'>Sign up</Link></li>
                <li><Link to='/'>Home</Link></li>
                </>
            
            }
        </ul>
    );
};

const mapStateToProps = (state) => {
    return {
        authUser: state.auth.authUser
    };
};

export default connect(mapStateToProps)(Navigation);
import React from 'react'
import { connect } from 'react-redux';
import SignIn from '../SignIn/SignIn';

const Home = (props) => {


    return (
        <div>
           <SignIn />
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        authUser: state.auth.authUser
    };
};

export default connect(mapStateToProps)(Home);
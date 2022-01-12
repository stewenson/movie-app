import React from 'react';
import { useFormik } from 'formik';
//import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Link, Redirect } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { signUpAction } from '../../../Redux/Actions/AuthActions/authActions';

const SignUpForm = (props) => {

  const { authUser, authErr, isLoading } = props;

    const validate = values => {

        const errors = {};
        if (!values.name) {
          errors.name = 'Required';
        }
        if (!values.email) {
          errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
          errors.email = 'Invalid email address';
        }
        if (!values.password) {
            errors.password = 'Required';
        } else if (!values.password.length > 6) {
            errors.password = 'Password must 6 or more character';
        }
       
        return errors;
    };
    
    const formik = useFormik({
      initialValues: {
          name: '',
          email: '',
          password: ''
      },
      validate,
      onSubmit: values => {
        console.log(values)
        props.signUp({
          name: values.name,
          email: values.email,
          password: values.password,
        }) 
      }
    });

    if (authUser) {
      return (<Redirect to={{
          pathname: "/movies",
          state: { from: props.location }
      }} />);
  }



    return (
        <form onSubmit={formik.handleSubmit} className="input">
            <h1>Sign Up</h1>
                <span>{formik.errors.name ? <div>{formik.errors.name}</div>: null}</span>
                <input 
                    id="name"
                    name="name"
                    type="name"
                    placeholder="Enter name"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                  />
                  <span>{formik.errors.password ? <div>{formik.errors.password}</div>: null}</span>
                <input 
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                  <span>{formik.errors.password ? <div>{formik.errors.password}</div>: null}</span>
                  <input 
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Enter password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                  />
                  <button 
                    type="submit" 
                    className="loginButton"
                    >Sign In
                  </button>

                  <span>
                     Already registrated? <b>Sign up now.</b>
                  </span>

                  <small>
                      This page is protected by Google reCAPTCHA to ensure you're not a
                      bot. <b>Learn more</b>.
                  </small>
              </form>
    )
}
const mapStateToProps = (state) => {
  return {
      authUser: state.auth.authUser,
      authErr: state.auth.authError,
      isLoading: state.auth.isLoading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
      signUp: (newUser) => dispatch(signUpAction(newUser))
  }
};

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps)
);

export default enhance(SignUpForm);
import React from 'react'
import { useFormik } from 'formik';
import { Redirect } from 'react-router-dom';
import { signInAction } from '../../../Redux/Actions/AuthActions/authActions';
import { connect } from 'react-redux';

const SignIn = (props) => {
    const { authUser, authErr, isLoading } = props;
    
    const validate = values => {

        const errors = {};
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
        email: '',
        password: ''
    },
    validate,
    onSubmit: values => {
        console.log(values)
        props.signIn({
          email: values.email,
          password: values.password,
        }) 
      }
  });
  
  if (authUser) {
      return (<Redirect to={{
          pathname: "/",
          state: { from: props.location }
      }} />);
  }

  return (
    <form onSubmit={formik.handleSubmit}>
      <input 
        id="email"
        name="email"
        type="email"
        placeholder="Enter email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <span>{formik.errors.email ? <div>{formik.errors.email}</div>: null}</span>
      <input 
        id="password"
        name="password"
        type="password"
        placeholder="Enter password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      <span>{formik.errors.email ? <div>{formik.errors.email}</div>: null}</span>
      <button 
        type="submit" 
        className="loginButton"
        >Sign In
      </button>
    </form>
  )
};

const mapStateToProps = (state) => (
  {
      authUser: state.auth.authUser,
      authErr: state.auth.authError,
      isLoading: state.auth.isLoading
  }
);

const mapDispatchToProps = (dispatch) => (
  {
      signIn: (user) => dispatch(signInAction(user))
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
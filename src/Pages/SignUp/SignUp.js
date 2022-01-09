import React from "react";
import "./signup.scss";
import { useFormik } from 'formik';

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function SignUp ({ history }) {

  const validate = values => {

    const errors = {};
    if (!values.email) {
      errors.email = 'Required';
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
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, values.email, values.password)
    .then(() => {
      history.push('/');
    }).catch(error => {
      alert(error.message);
    }).catch(error => {
      alert(error.message);
    })
  }
});
  
  return (
    <div className="login">
          <div className="top">
              <div className="wrapper">
                  <img
                      className="logo"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                      alt=""
                  />
              </div>
          </div>
          <div className="container">
              <form onSubmit={formik.handleSubmit} className="input">
                  <h1>Sign In</h1>
                  <span>{formik.errors.email ? <div>{formik.errors.email}</div>: null}</span>
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
                      New to Netflix? <b>Sign up now.</b>
                  </span>

                  <small>
                      This page is protected by Google reCAPTCHA to ensure you're not a
                      bot. <b>Learn more</b>.
                  </small>
              </form>
          </div>
      </div>
  );
};

export default SignUp;

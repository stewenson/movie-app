import React from 'react';
import { useFormik } from 'formik';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export const SignUpForm = ({history}) => {

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
        <form onSubmit={formik.handleSubmit} className="input">
            <h1>Sign Up</h1>
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
                     Already registrated? <b>Sign up now.</b>
                  </span>

                  <small>
                      This page is protected by Google reCAPTCHA to ensure you're not a
                      bot. <b>Learn more</b>.
                  </small>
              </form>
    )
}

import React from 'react'
import { useFormik } from 'formik';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { withRouter ,Link } from "react-router-dom";
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const SignInForm = ({history}) => {

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
    
        signInWithEmailAndPassword(auth, values.email, values.password)
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
        <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label={formik.errors.email ? <div>{formik.errors.email}</div>: "Email Address"}
                name="email"
                autoComplete="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                variant="filled"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label={formik.errors.password ? <div>{formik.errors.password}</div>: "Password"}
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  
                </Grid>
                <Grid item>
                <Link to='/register'>
                    Don't have an account? Sign Up
                  </Link>
                </Grid>
              </Grid>
        </Box> 
    )
}
export default withRouter(SignInForm);
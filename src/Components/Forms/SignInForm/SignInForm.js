import React from 'react'
import { useFormik } from 'formik';
import { Link, Redirect } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { signInAction } from '../../../Redux/Actions/AuthActions/authActions';
import { connect } from 'react-redux';
import Typography from '@mui/material/Typography';

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
          pathname: "/movies",
          state: { from: props.location }
      }} />);
  }

  return (
      <React.Fragment>
    <Typography component="h1" variant="h5">
    Sign in
    </Typography>
    <Grid container>
      <Grid item>
      {authErr && <p>Error: {authErr}</p>}
      </Grid>
    </Grid>
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
      <Grid item>
        <Link to='/register'>
          Don't have an account? Sign Up
        </Link>
      </Grid>
    </Grid>
</Box> 
</React.Fragment>
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

/*<div>
          <h1>Sign in</h1>
          <p>Do not have account? <Link to='/signup'>Sign up here</Link></p>
          <form onSubmit={onSubmit}>
              <div>
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" required
                      value={inputValues.email} onChange={onChange} />
              </div>
              <div>
                  <label htmlFor="password">Password</label>
                  <input type="password" name="password" required
                      value={inputValues.password} onChange={onChange} />
              </div>
              <div>
                  <button>Sign in</button>
                  {isLoading && <div className="loader"></div>}
              </div>
              <div className="errorBox">
                  {authErr && <p>Error: {authErr}</p>}
              </div>
          </form>
      </div>
      */
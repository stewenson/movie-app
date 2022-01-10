import React, { useContext } from "react";
import './signIn.scss';
import { Redirect } from "react-router";
import { AuthContext } from "../../Auth/Auth";
import SignInForm from "../../Components/Forms/SignInForm/SignInForm.js";
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';

const SignIn = ({ history }) => {

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

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
            <Container component="main" maxWidth="xs">
            <CssBaseline />
              <Box
                sx={{
                  marginTop: 30,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Typography component="h1" variant="h5">
                  Sign in
                </Typography>

                  <SignInForm history={history}/>

                </Box>
              </Container>
    </div>
  );
};

export default SignIn;

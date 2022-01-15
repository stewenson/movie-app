import React from "react";
import './signIn.scss';
import { Link } from "react-router-dom";
import SignInForm from "../../Components/Forms/SignInForm/SignInForm.js";

const SignIn = () => {

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
      
      <div className="content">
        <div className="form_content">
          <div className="form_main">
            <h1>Sign In</h1>
            <SignInForm />
          </div>

          <div className="form_other">
            <h4>New to Netflix? </h4>
            <Link to='/register'>
              Sign Up now
            </Link>
          </div>

       </div>
      </div>      
    </div>
  );
};

export default SignIn;
/*

 <Container component="main" maxWidth="xs">
            <CssBaseline />
              <Box
                sx={{
                  marginTop: 20,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                  <SignInForm history={history}/>

                  </Box>
                  </Container>
*/
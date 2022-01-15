import React  from "react";
import "./signup.scss";
import SignUpForm from "../../Components/Forms/SIgnUpForm/SignUpForm";
import { Link } from "react-router-dom";

function SignUp () {

  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            rc="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
        </div>
      </div>
     
      <div className="content">
        <div className="form_content">
        <div className="form_main">  
          <h1>Sign Up</h1>
          <SignUpForm />  
        </div>
        
        <div className="form_other">
          <h4>Do you have an account? </h4>
            <Link to='/login'>
              Log In
            </Link>
        </div>

        </div>
      </div>
    </div>
  );
};

export default SignUp;

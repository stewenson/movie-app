import React,{ useContext }  from "react";
import "./signup.scss";
import SignUpForm from "../../Components/Forms/SIgnUpForm/SignUpForm";

function SignUp ({ history }) {

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
      <div className="container">
        <SignUpForm 
          history={history}
        />
      </div>
    </div>
  );
};

export default SignUp;




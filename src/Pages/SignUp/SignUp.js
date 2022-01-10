import React,{ useContext }  from "react";
import "./signup.scss";
import { Redirect } from "react-router";
import { SignUpForm } from "../../Components/Forms/SIgnUpForm/SignUpForm";
import { AuthContext } from "../../Auth/Auth";

function SignUp ({ history }) {

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }
  
  return (
    <div className="register">
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
              <SignUpForm 
                history={history}
              />
          </div>
      </div>
  );
};

export default SignUp;
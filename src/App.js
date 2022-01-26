import React, { useEffect } from "react";
import "./App.scss";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home/Home";
import SignIn from "./Pages/SignIn/SignIn";
import SignUp from "./Pages/SignUp/SignUp";
import {Movies} from "./Pages/Movies/Movies";
import { AuthProvider } from "./Auth/Auth";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import { authObserver  } from "./Redux/Actions/AuthActions/authActions";
import { connect } from 'react-redux';
import Navigation from "./Components/Navigation/Navigation";

const App = (props) => {

  useEffect(() => {
    // subscribe to the auth observer
    const unsubscribe = props.authObserver();
    // unsubscribe
    return unsubscribe;
  },[props])

  return (
    <AuthProvider>
      <Router>
        {props.authUser ? <Navigation /> : ""}
        <Switch>
        < PrivateRoute exact path="/" component={Home} />
          <Route exact path="/register" component={SignUp} />
          <Route exact path="/login" component={SignIn} />
          <PrivateRoute exact path="/movies" component={Movies} />
        </Switch>
      </Router>
    </AuthProvider>
  );
};

const mapStateToProps = (state) => {
  return {
      authUser: state.auth.authUser
  };
};


const mapDispatchToProps = dispatch => {
  return {
    authObserver: () => dispatch(authObserver())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

//<Navigation />
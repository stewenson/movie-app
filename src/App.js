import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import SignIn from "./Pages/SignIn/SignIn";
import SignUp from "./Pages/SignUp/SignUp";
import { AuthProvider } from "./Auth/Auth";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div>
          <PrivateRoute exact path="/" component={Home} />
          <Route exact path="/register" component={SignUp} />
          <Route exact path="/login" component={SignIn} />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
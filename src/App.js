import React from "react";
import Login from "./components/services/Login";
import Signup from "./components/services/Signup";
import Dashboard from "./components/pages/Dashboard";
import PrivateRoute from "./components/utils/PrivateRoute";
import AuthProvider from "./components/utils/AuthContext";
import UpdateProfile from "./components/services/UpdateProfile";
import ForgotPassword from "./components/services/ForgotPassword";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Switch>
            <PrivateRoute exact path='/' component={Dashboard} />
            <PrivateRoute path='/update-profile' component={UpdateProfile} />
            <Route path='/signup' component={Signup} />
            <Route path='/login' component={Login} />
            <Route path='/forgot-password' component={ForgotPassword} />
          </Switch>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;

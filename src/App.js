import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppNavbar from "./components/AppNavbar";
import Home from "./components/pages/Home";
import Profile from "./components/pages/Profile";
import "./App.css";
import Admin from "./components/pages/Admin";
import PrivateRoute from "./components/Routes/PrivateRoute";

const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  const login = () => setIsAuth(true);
  const logout = () => setIsAuth(false);
  return (
    <Router>
      <AppNavbar login={login} logout={logout} isAuth={isAuth} />
      <Switch>
        <Route exact path="/" component={Home} />

        <PrivateRoute
          path="/profile/:youssef"
          component={Profile}
          isAuth={isAuth}
        />

        <PrivateRoute
          path="/admin"
          component={Admin}
          isAuth={isAuth}
          name="Youssef"
        />
      </Switch>
    </Router>
  );
};

export default App;

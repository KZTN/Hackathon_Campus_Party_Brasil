import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Registered from "./pages/Registered";
import Dashboard from "./pages/Dashboard";
import Establishment from "./pages/Establishment";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/registered" component={Registered} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/establishment" component={Establishment} />
      </Switch>
    </BrowserRouter>
  );
}

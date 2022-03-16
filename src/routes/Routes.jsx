import React from "react";

import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login"
import Register from "../pages/Register"

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/Home" component={Home}/>
      <Route path="/Register" component={Register}/>
    </Switch>
  );
};

export default Routes;

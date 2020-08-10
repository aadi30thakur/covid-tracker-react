import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import About from "./core/About";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={App}></Route>
      <Route path="/about" exact component={About}></Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;

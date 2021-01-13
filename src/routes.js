import React from "react";
import { Router } from "@reach/router";
import Home from "./pages/index";
import Driver from "./pages/Driver";
const Routes = ({ props }) => {
  return (
    <Router>
      <Home path="/" props={props} />
      <Driver path="/driver/:driverID" props={props} />
    </Router>
  );
};

export default Routes;

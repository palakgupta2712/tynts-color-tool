import React from "react";
import { Switch, Route } from "react-router-dom";
import Gradient from "../pages/Gradient";
import Home from "../pages/Home";
import Harmony from "../pages/Harmony";
import Manipulator from "../pages/Manipulator";
import ShadesTints from "../pages/ShadesTints";

function Routes() {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/color-gradients" component={Gradient} />
        <Route exact path="/color-manipulator" component={Manipulator} />
        <Route exact path="/color-harmonies" component={Harmony} />
        <Route exact path="/shades-and-tints" component={ShadesTints} />
      </Switch>
    </React.Fragment>
  );
}

export default Routes;

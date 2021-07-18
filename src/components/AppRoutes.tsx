import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Speaker from "./pages/Speaker/Speaker";

interface Props {}

const AppRoutes = (props: Props) => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/Speaker" component={Speaker} />
    </Router>
  );
};

export default AppRoutes;

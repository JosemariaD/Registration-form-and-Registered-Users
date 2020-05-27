import React from "react";

import { BrowserRouter as Router, Switch } from "react-router-dom";

import RouteFile from "../Router/routeData";

function App() {
  return (
    <Router>
      <Switch>
        <RouteFile />
      </Switch>
    </Router>
  );
}

export default App;

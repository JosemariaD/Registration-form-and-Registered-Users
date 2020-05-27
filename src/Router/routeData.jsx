import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Import components
import Registration from "../components/registration";
import NavBar from "../components/navBar";
import ShowUsers from "../components/showUsers";
import EditUser from "../components/editUser";

const RouteFile = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Registration} />
        <Route exact path="/showUsers" component={ShowUsers} />
        <Route path="/editUser" exact component={EditUser} />
      </Switch>
    </Router>
  );
};

export default RouteFile;

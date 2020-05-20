import React, { Component } from "react";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//components
import Users from "./users";
import EditUser from "./editUser";

class ShowUsers extends Component {
  state = {};
  render() {
    return (
      <Router>
        <React.Fragment>
          {" "}
          <h3>SHOWING LIST OF USERS</h3>
          <Route path="/" exact component={Users} />
          <Route path="/editUser" exact component={EditUser} />
        </React.Fragment>
      </Router>
    );
  }
}

export default ShowUsers;

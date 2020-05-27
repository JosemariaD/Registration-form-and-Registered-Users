import React, { Component } from "react";

//components
import Users from "./users";
class ShowUsers extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        {" "}
        <h3>SHOWING LIST OF USERS</h3>
        <Users />
      </React.Fragment>
    );
  }
}

export default ShowUsers;

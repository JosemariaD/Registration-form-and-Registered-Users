import React, { Component } from "react";

class Users extends Component {
  state = {};

  componentDidMount() {
    this.ftUsers();
  }

  ftUsers() {
    fetch("./data/users1.json")
      .then((res) => res.text())
      .then((resData) => {
        console.log(resData);
      })
      .catch((err) => console.error(err));
  }

  render() {
    return (
      <div>
        <h2>Users List</h2>
      </div>
    );
  }
}

export default Users;

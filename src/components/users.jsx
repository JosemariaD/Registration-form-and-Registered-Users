import React, { Component } from "react";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Users extends Component {
  state = {
    userList: "",
  };

  componentDidMount() {
    this.ftUsers();
  }

  ftUsers() {
    fetch("http://localhost:8000/users")
      .then((res) => res.json())
      .then((resData) => {
        this.setState({ userList: resData });
      })
      .catch((err) => console.error(err));
  }

  handleDelete = (userId) => {
    let Url = "http://localhost:8000/users/" + userId;
    fetch(Url, {
      method: "DELETE",
    });
    this.ftUsers();
  };

  dUser() {
    if (this.state.userList === "") return null;
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th>S/N</th>
            <th>USERNAME</th>
            <th>PASSWORD</th>
            <th>MODIFY</th>
            <th>REMOVE</th>
          </tr>
        </thead>
        <tbody>
          <Router>
            {this.state.userList.map((user) => (
              <tr key={user["id"]}>
                <td>{user["id"]}</td>
                <td>{user["username"]}</td>
                <td>{user["password"]}</td>
                <td>
                  <Link
                    to={{
                      pathname: "/editUser",
                      state: {
                        id: user["id"],
                      },
                    }}
                  >
                    Edit
                  </Link>
                </td>
                <td>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => this.handleDelete(user["id"])}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </Router>
        </tbody>
      </table>
    );
  }

  render() {
    return (
      <div className="jumbotron">
        <h2>Users List</h2>
        {this.state.userList.length > 0 ? (
          this.dUser()
        ) : (
          <h3 className="text-danger">No User Record Found</h3>
        )}
      </div>
    );
  }
}

export default Users;

import React, { Component } from "react";

class EditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      msgError: {
        username: "",
        password: "",
      },
    };

    this.handleChange = this.handleChange.bind(this);
    this.sendForm = this.sendForm.bind(this);
  }
  componentDidMount() {
    this.getUser();
  }
  getUser() {
    const { id } = this.props.location.state;
    const url = "http://localhost:8000/users/" + id;
    fetch(url)
      .then((res) => res.json())
      .then((resData) => {
        this.setState({
          username: resData.username,
          password: resData.password,
        });
      })
      .catch((err) => console.error(err));
  }
  sendForm(event) {
    const { msgError, username, password } = this.state;
    const { id } = this.props.location.state;
    const url = "http://localhost:8000/users/" + id;
    event.preventDefault();
    if (msgError.username !== "" && msgError.password !== "") {
      console.error("Form Not Valid");
      alert("form Not Valid");
    } else {
      fetch(url, {
        method: "PUT",
        body: JSON.stringify({
          username: username,
          password: password,
        }),
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => alert("The User has been Updated succesfuly"))
        .catch((err) => alert("Fail to submit, Check your connection"));
    }
  }

  handleChange(event) {
    event.preventDefault();
    const { name, value } = event.target;
    let msgError = this.state.msgError;

    switch (name) {
      case "username":
        msgError.username =
          value.length < 3 ? "Minimum of 3 characters required" : "";
        break;
      case "password":
        msgError.password =
          value.length < 6 ? "Enter a minimum of 6 characters" : "";
        break;
      default:
        break;
    }

    this.setState({ msgError, [name]: value });
  }
  render() {
    const { msgError } = this.state;
    return (
      <div>
        <h3>Edit User</h3>
        <form onSubmit={this.sendForm}>
          <div className="form -group">
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={this.state.username}
              className="form-control"
              onChange={this.handleChange}
              required
            />
          </div>
          {msgError.username.length > 0 && (
            <span className="text-danger">{msgError.username}</span>
          )}
          <div className="form-group">
            <label>Password:</label>
            <input
              type="Password"
              name="password"
              value={this.state.password}
              className="form-control"
              onChange={this.handleChange}
              required
            />
          </div>
          {msgError.password.length > 0 && (
            <span className="text-danger">{msgError.password}</span>
          )}
          <br />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default EditUser;

import React, { Component } from "react";

class Registration extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1 className="display-4">Registration form</h1>
        <form>
          <div className="form-group">
            <label for="email">Email:</label>
            <input
              type="email"
              name="email"
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label for="pwd">Password:</label>
            <input
              type="Password"
              name="password"
              className="form-control"
              required
            />
          </div>
          <div className="form-group form-check">
            <label className="form-check-label">
              <input
                type="checkbox"
                name="checkbox"
                className="form-check-input"
                required
              />
              Remember
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Registration;

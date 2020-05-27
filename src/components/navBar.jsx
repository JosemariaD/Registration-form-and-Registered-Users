import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Router>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/" style={{ fontSize: 22 }}>
              Register
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/showUsers" style={{ fontSize: 22 }}>
              Users
            </Link>
          </li>
        </ul>
      </nav>
    </Router>
  );
};

export default NavBar;

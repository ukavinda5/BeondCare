import React, { Component } from "react";
import { Link } from "react-router-dom";
class Reg_success extends Component {
  state = {};
  render() {
    return (
      <div className="reg_success">
        <nav className="nav">
          <ul>
            <li>
              <Link to="/">
                <div className="nav-item">Home</div>
              </Link>
            </li>
            <li>
              <Link to="/login">
                <div className="nav-item">Login</div>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Reg_success;

import React, { Component } from "react";
import { Link } from "react-router-dom";
class Login extends Component {
  render() {
    return (
      <div className="login">
        <nav className="nav">
          <ul>
            <li>
              <Link to="/">
                <div className="nav-item">Home</div>
              </Link>
            </li>
            <li>
              <Link to="/singup">
                <div className="nav-item">Sign up</div>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="loginc">
          <div className="logincon">
            <h1>LOGIN</h1>
            <input className="input" type="text" placeholder="User name" />
            <input className="input" type="password" placeholder="password" />
            <Link to="/profile">
              <div className="login_btn">Login</div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;

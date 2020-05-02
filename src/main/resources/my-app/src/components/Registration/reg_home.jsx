import React, { Component } from "react";
import { Link } from "react-router-dom";
class Reg_home extends Component {
  render() {
    return (
      <div className="reg_home">
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
        <div className="btn_con">
          <Link to="/regres">
            <div className="btn1 btn2">Sing Up as a Care Service Receiver</div>
          </Link>
          <Link to="/regpro">
            <div className="btn1 btn2"> Sing Up as a Care Service Provider</div>{" "}
          </Link>
        </div>
      </div>
    );
  }
}

export default Reg_home;

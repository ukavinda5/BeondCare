import React, { Component } from "react";
import { Link, Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";

import R_list from "../admin/r_list";
class Admin extends Component {
  state = {};
  render() {
    return (
      <Router>
        <div className="admin">
          <div className="anav">
            <ul className="nav-links">
              <li>
                <Link to="/r_list">
                  <div className="nav-itm">r_list</div>
                </Link>
              </li>

              <li>
                <Link to="/menu">
                  <div className="nav-itm">Menu</div>
                </Link>
              </li>
              <li>
                <Link to="/Orders">
                  <div className="nav-itm">Orders</div>
                </Link>
              </li>

              <li>
                <Link to="#">
                  <div className="nav-itm">About</div>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <div className="nav-itm">About</div>
                </Link>
              </li>
            </ul>
          </div>
          <div className="admin_container">
            <Switch>
              <Route path="/r_list" exact component={R_list} />
              <Route path="/p_list" component={P_list} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default Admin;

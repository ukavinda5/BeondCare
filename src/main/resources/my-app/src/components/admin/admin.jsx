import React, { Component } from "react";
import {Link} from "react-router-dom";


class Admin extends Component {
  render (){
    return(
      <div className="admin">
        <div className="anav">
          <ul className="nav-links">
            <li>
              <Link to="/admin/r_list">
                <div className="nav-itm">r_list</div>
              </Link>
            </li>

            <li>
              <Link to="/admin/p_list">
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
        </div>
      </div>
  );
    }
}


export default Admin;

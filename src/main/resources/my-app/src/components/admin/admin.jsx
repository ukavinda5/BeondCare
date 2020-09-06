import React, { Component } from "react";
import {Link} from "react-router-dom";


class Admin extends Component {
  render (){
    return(
      <div className="admin">
      <div className="anav">
          <ul className="nav-links">
            <li>
              <Link to="/admin/">
                <div className="nav-itm">DASHBOARD</div>
              </Link>
            </li>

            <li>
              <Link to="/admin/p_list">
                <div className="nav-itm">Provider Table</div>
              </Link>
            </li>
            <li>
              <Link to="/admin/r_list">
                <div className="nav-itm">Receiver Table</div>
              </Link>
            </li>

            <li>
              <Link to="/admin/complainlistt">
                <div className="nav-itm">Complains</div>
              </Link>
            </li>
            <li>
              <Link to="#">
                <div className="nav-itm">Income</div>
              </Link>
            </li>
          </ul>
        </div>
        <div className="admin_container">
            <div className="adminheder">
              <lable>DASHBOARD</lable>
              <div className="box">
                
              </div>
            </div>
        </div>
      </div>
  );
    }
}


export default Admin;

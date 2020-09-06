import React, { Component } from "react";

class R_list extends Component {
  state = {};
  render() {
    return (<div className="r_list">
    <div className="adminheder">
              <lable>Receiver Table</lable>
            </div>
    <table className="DTable">
    <tr>
              <th>RegDate</th>
              <th>Name</th>
              <th>Email</th>
              <th>Nic</th>
              <th>Number</th>
              <th>location</th>
            </tr>
            <tr>
              <td>2001-01-05</td>
              <td>udesh</td>
              <td>udesh@gmail.com</td>
              <td>943041202v</td>
              <td>0766360825</td>
              <td>Ragama</td>
            </tr>
    </table>

    </div>);
  }
}

export default R_list;

import React, { Component } from "react";

class P_list extends Component {
  state = {};
  render() {
    return (
      <div className="r_list">
      <div className="adminheder">
              <lable>Provider Table</lable>
            </div>

            <table className="DTable">
            <tr>
              <th>RegDate</th>
              <th>Name</th>
              <th>Email</th>
              <th>age</th>
              <th>gender</th>
              <th>Nic</th>
              <th>Number</th>
              <th>location</th>
            </tr>
            <tr>
              <td>2001-01-05</td>
              <td>Koththu</td>
              <td>5</td>
              <td>350</td>
              <td>Deliverd</td>
            </tr>
    </table>
      </div>
    );
  }
}

export default P_list;

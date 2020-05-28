import React, { Component } from "react";

class P_list extends Component {
  state = {};
  render() {
    return (
      <div className="p_list">
        <div className="search_bar">
          <input type="text" placeholder="Search" className="searchInput" />

          <div className="dlk-radios ">
            <label className="btn  btn-info">
              <input
                name="choices[1]"
                className="form-control"
                type="radio"
                value="1"
              ></input>
              By NAME
              <i className="fa fa-check glyphicon glyphicon-ok ro"></i>
            </label>
            <label className="btn  btn-info">
              <input
                name="choices[1]"
                className="form-control"
                type="radio"
                value="2"
                // defaultchecked="checked"
              ></input>
              BY ID
              <i className="fa fa-times glyphicon glyphicon-ok ro"></i>
            </label>
            <label className="btn btn-info">
              <input
                name="choices[1]"
                className="form-control"
                type="radio"
                value="3"
                // defaultchecked="checked"
              ></input>
              BY USER NAME
              <i className="fa fa-check glyphicon glyphicon-ok ro"></i>
            </label>
            <label className="btn  btn-info">
              <input
                name="choices[1]"
                className="form-control"
                type="radio"
                value="4"
                // defaultchecked="checked"
              ></input>
              BY LOCATION
              <i className="fa fa-times glyphicon glyphicon-ok ro "></i>
            </label>
          </div>
        </div>
        <div className="pListCon">
        <table className="order_table">
            <tr>
              <th>NAME</th>
              <th>NIC</th>
              <th>LOCATION</th>
              <th>AGE</th>
              <th>GENDER</th>
            </tr>
            <tr>
              <td>2001-01-05</td>
              <td>Koththu</td>
              <td>5</td>
              <td>350</td>
              <td>Deliverd</td>
            </tr>

            <tr>
              <td>2001-01-05</td>
              <td>Koththu</td>
              <td>5</td>
              <td>350</td>
              <td>Deliverd</td>
            </tr>

            <tr>
              <td>2001-01-05</td>
              <td>Koththu</td>
              <td>5</td>
              <td>350</td>
              <td>Deliverd</td>
            </tr>

            <tr>
              <td>2001-01-05</td>
              <td>Koththu</td>
              <td>5</td>
              <td>350</td>
              <td>Deliverd</td>
            </tr>

            <tr>
              <td>2001-01-05</td>
              <td>Koththu</td>
              <td>5</td>
              <td>350</td>
              <td>Deliverd</td>
            </tr>

            <tr>
              <td>2001-01-05</td>
              <td>Koththu</td>
              <td>5</td>
              <td>350</td>
              <td>Deliverd</td>
            </tr>

            <tr>
              <td>2001-01-05</td>
              <td>Koththu</td>
              <td>5</td>
              <td>350</td>
              <td>Deliverd</td>
            </tr>
            <tr>
              <td>2001-01-05</td>
              <td>Koththu</td>
              <td>5</td>
              <td>350</td>
              <td>Deliverd</td>
            </tr>
            <tr>
              <td>2001-01-05</td>
              <td>Koththu</td>
              <td>5</td>
              <td>350</td>
              <td>Deliverd</td>
            </tr>
            <tr>
              <td>2001-01-05</td>
              <td>Koththu</td>
              <td>5</td>
              <td>350</td>
              <td>Deliverd</td>
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
      </div>
    );
  }
}

export default P_list;

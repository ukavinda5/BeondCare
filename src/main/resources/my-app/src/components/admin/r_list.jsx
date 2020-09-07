import React, { Component } from "react";
import axios from "axios";
class R_list extends Component {
  constructor(props) {
    super(props);
    this.state = { rec: [] };
   
  }
  componentDidMount(){

    axios
    .get("/api/receiver/find/all")
    .then((a) => {
      this.setState({ rec: a.data });
      console.log(this.state);
    })
    .catch((err) => {
      console.log(err);
    });


    
  }
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
           
            </tr>
            {this.state.rec.map((rec) => {
            return ( <tr>
              <td>2020-09-07</td>
              <td>{rec.name1}</td>
              <td>{rec.email}</td>
              <td>{rec.nic}</td>
              <td>{rec.mobile1}</td>
            </tr> );
          })}
    </table>

    </div>);
  }
}

export default R_list;

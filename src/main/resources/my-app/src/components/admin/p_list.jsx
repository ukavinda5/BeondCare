import React, { Component } from "react";
import axios from "axios";
class P_list extends Component {
  constructor(props) {
    super(props);
    this.state = { pro: [] };
   
  }
  componentDidMount(){

    axios
    .get("/api/provider/find/all")
    .then((a) => {
      this.setState({ pro: a.data });
      console.log(this.state);
    })
    .catch((err) => {
      console.log(err);
    });


    
  }
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
            {this.state.pro.map((pro) => {
            return ( <tr>
              <td>2020-09-07</td>
              <td>{pro.name}</td>
              <td>{pro.email}</td>
              <td>{pro.age}</td>
              <td>{pro.gender}</td>
              <td>{pro.nic}</td>
              <td>{pro.mobile}</td>
              <td>{pro.location}</td>
            </tr> );
          })}
    </table>
      </div>
    );
  }
}

export default P_list;

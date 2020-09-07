import React, { Component } from "react";
import { Link } from "react-router-dom";
// import axios from "axios";
class Income extends Component {
  state = {};


// buttonHaddel=()=>{
//   axios
//     .get("/api/job/getReport")
//     .then((a) => {
      
//     })
//     .catch((err) => {
     
//     });
// }

  render() {
    return (
        <div className="r_list">
            <div className="adminheder">
              <lable>Income</lable>
              
            </div>
            
            <div className="imcomebody">
            <a href="http://localhost:8080/api/job/getReport"><div className="nav-item">Generate Report</div></a>
            </div>
        </div>
        );
    }
  }
  
  export default Income;
import React, { Component } from "react";
import axios from "axios";
class Complainlist extends Component {
  constructor(props) {
    super(props);
    this.state = { com: [] };
   
  }
  componentDidMount(){

    axios
    .get("/api/payment/find/complains")
    .then((a) => {
      this.setState({ com: a.data });
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
              <lable>Complains</lable>
              <table className="DTable">
            <tr>
              <th>Provider</th>
              <th>Receiver</th>
              <th>Subject</th>
              <th>Complain</th>
              
            </tr>
            {this.state.com.map((com) => {
            return ( <tr>
              <td>{com.provider_id}</td>
              <td>{com.receiver_id}</td>
              <td>{com.subject}</td>
              <td>{com.complain}</td>
            </tr> );
          })}
    </table>
            </div>
        </div>
        );
    }
  }
  
  export default Complainlist;
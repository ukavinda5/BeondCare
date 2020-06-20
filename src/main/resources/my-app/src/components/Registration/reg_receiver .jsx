import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
class Reg_receiver extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Name: null,
      email: null,
      mobile: null,
      address1: null,
      address2: null,
      address3: null,
      password: null,
      role: 1,
    };
  }
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  nextHaddel = () => {
    console.log(this.state);

    let authDetails =
    {
    email:this.state.email,
    password : this.state.password,
    role:this.state.role
    }


    axios.post("/api/user/save",authDetails)
      .then(res => {
      localStorage.setItem("user_type","receiver");
         window.location="/pprofile"
        })
        .catch(err=>{
          // window.location="www.error..com"
        })


        axios.post("/api/receiver/save",this.state)
    .then(res =>{
      
      localStorage.setItem("user_type","receiver");
      // window.location="www.ggle.com"
    })
    .catch(err=>{
      // window.location="www.error..com"
    })
  };
  render() {
    return (
      <div className="regprovider">
        <nav className="nav">
          <ul>
            <li>
              <a href="/">
                <div className="nav-item">Home</div>
              </a>
            </li>
            <li>
              <a href="/login">
                <div className="nav-item">Login</div>
              </a>
            </li>
          </ul>
        </nav>
        <div className="rdev">
          <form>
            <label>
              <input
                className="rinput"
                type="text"
                placeholder="Name"
                name="Name"
                value={this.setState.Name}
                onChange={this.onChange}
              ></input>
            </label>
            <label>
              <input
                className="rinput"
                type="email"
                name="email"
                placeholder="Email Address"
                value={this.setState.email}
                onChange={this.onChange}
              ></input>
            </label>
            <label>
              <input
                className="rinput"
                type="tel"
                placeholder="Mobile Number"
                name="mobile"
                value={this.setState.mobile}
                onChange={this.onChange}
              ></input>
            </label>
            <label>
              <input
                className="rinputA"
                type="text"
                placeholder="Address"
                name="address1"
                value={this.setState.address}
                onChange={this.onChange}
              ></input>
            </label>
            <label>
              <input
                className="rinputA"
                type="text"
                placeholder="Address"
                name="address2"
                value={this.setState.address}
                onChange={this.onChange}
              ></input>
            </label>
            <label>
              <input
                className="rinputAl "
                type="text"
                placeholder="Address"
                name="address3"
                value={this.setState.address}
                onChange={this.onChange}
              ></input>
            </label>
            
            <label>
              <input
                className="rinput"
                type="password"
                placeholder="Password"
                name="password"
                value={this.setState.password}
                onChange={this.onChange}
              ></input>
            </label>
            <label>
              <input
                className="rinput"
                type="password"
                placeholder="Retype Password"
              ></input>
            </label>
            <h4> Requirments : </h4>
            <div className="dlk-radio ">
              <label className="btn btn-success">
                <input
                  name="choices[1]"
                  className="form-control"
                  type="radio"
                  value="1"
                ></input>
                Domestic Helper
                <i className="fa fa-check glyphicon glyphicon-ok ro"></i>
              </label>
              <label className="btn btn-default">
                <input
                  name="choices[1]"
                  className="form-control"
                  type="radio"
                  value="2"
                  defaultchecked="checked"
                ></input>
                Babysitter
                <i className="fa fa-times glyphicon glyphicon-ok ro"></i>
              </label>
              <label className="btn btn-info">
                <input
                  name="choices[1]"
                  className="form-control"
                  type="radio"
                  value="3"
                  defaultchecked="checked"
                ></input>
                Cook
                <i className="fa fa-check glyphicon glyphicon-ok ro"></i>
              </label>
              <label className="btn btn-warning">
                <input
                  name="choices[1]"
                  className="form-control"
                  type="radio"
                  value="4"
                  defaultchecked="checked"
                ></input>
                Elder Coregiver
                <i className="fa fa-times glyphicon glyphicon-ok ro "></i>
              </label>
            </div>
            <div className="bot">
              <Link to="/singup">
                <div className="login_btn">Back</div>
              </Link>

              <Link to="/reg_success">
                <div className="login_btn" onClick={this.nextHaddel}>
                  Next
                </div>
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Reg_receiver;

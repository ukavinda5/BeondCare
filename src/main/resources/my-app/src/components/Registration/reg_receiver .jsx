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
      address: null,
      username: null,
      password: null,
      role: null,
    };
  }
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  nextHaddel = () => {
    console.log(this.state);
    axios.post("http://localhost:8081/reg_recever", this.state).then((res) => {
      if (res.data.status == "success") {
        const user = res.data.user;
      } else {
        alert("Something went wrong while creating account");
      }
    });
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
                value={this.setState.Name}
                onChange={this.onChange}
              ></input>
            </label>
            <label>
              <input
                className="rinput"
                type="email"
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
                placeholder="Mobile Number"
                value={this.setState.mobile}
                onChange={this.onChange}
              ></input>
            </label>
            <label>
              <input
                className="rinput"
                type="text"
                placeholder="Address"
                value={this.setState.address}
                onChange={this.onChange}
              ></input>
            </label>
            <label>
              <input
                className="rinput"
                type="text"
                placeholder="Username"
                value={this.setState.username}
                onChange={this.onChange}
              ></input>
            </label>
            <label>
              <input
                className="rinput"
                type="password"
                placeholder="Password"
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

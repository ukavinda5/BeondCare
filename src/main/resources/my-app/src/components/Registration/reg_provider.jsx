import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
class Reg_provider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Name: null,
      email: null,
      location: null,
      nic: null,
      mobile: null,
      age: null,
      gender: null,
      specialization: null,
      experiences: null,
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
    axios.post("http://localhost:8081/reg_provider", this.state).then((res) => {
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
              <Link to="/">
                <div className="nav-item">Home</div>
              </Link>
            </li>
            <li>
              <Link to="/login">
                <div className="nav-item">Login</div>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="rdev">
          <form>
            <label>
              <input
                className="rinput"
                type="text"
                name="Name"
                placeholder="Name"
                value={this.setState.Name}
                onChange={this.onChange}
              ></input>
            </label>
            <label>
              <input
                className="rinpute"
                type="email"
                name="email"
                placeholder="Email Address"
                value={this.setState.email}
                onChange={this.onChange}
              ></input>
              <input
                className="rinpute2"
                type="text"
                name="location"
                placeholder="Location"
                value={this.setState.location}
                onChange={this.onChange}
              ></input>
            </label>
            <label>
              <input
                className="rinputk"
                type="tel"
                name="nic"
                placeholder="NIC NO"
                value={this.setState.nic}
                onChange={this.onChange}
              ></input>
              <input
                className="rinputk"
                type="tel"
                name="mobile"
                placeholder="Mobile Number"
                value={this.setState.mobile}
                onChange={this.onChange}
              ></input>
              <input
                className="rinputk"
                type="number"
                name="age"
                placeholder="Age"
                value={this.setState.age}
                onChange={this.onChange}
              ></input>
              <select
                className="rinputs"
                name="gender"
                value={this.state.gender}
                onChange={this.onChange}
              >
                <option value="volvo" selected disabled hidden>
                  Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              {/* <input
                className="rinputkm "
                type="number"
                placeholder="Gender"
              ></input> */}
            </label>

            <label>
              <input
                className="rinput"
                type="text"
                name="specialization"
                placeholder="Specialization"
                value={this.setState.specialization}
                onChange={this.onChange}
              ></input>
            </label>
            <label>
              <input
                className="rinput"
                type="text"
                name="experiences"
                placeholder="Experiences"
                value={this.setState.experiences}
                onChange={this.onChange}
              ></input>
            </label>
            <label>
              <input
                className="rinput"
                type="text"
                name="address"
                placeholder="Address"
                value={this.setState.address}
                onChange={this.onChange}
              ></input>
            </label>
            <label>
              <input
                className="rinput"
                type="text"
                name="username"
                placeholder="Username"
                value={this.setState.username}
                onChange={this.onChange}
              ></input>
            </label>
            <label>
              <input
                className="rinpute"
                type="password"
                name="password"
                placeholder="Password"
                value={this.setState.password}
                onChange={this.onChange}
              ></input>
              <input
                className="rinpute2"
                type="password"
                placeholder="Retype Password"
              ></input>
            </label>
            <label></label>
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

export default Reg_provider;

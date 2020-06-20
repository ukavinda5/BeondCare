import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Reg_provider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: null,
      email: null,
      location: null,
      nic: null,
      mobile: null,
      age: null,
      gender: null,
      specialization: null,
      experiences: null,
      address1: null,
      address2: null,
      address3: null,
      password: null,
      role: 2,
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
      .then(res =>{
        
        localStorage.setItem("user_type","provider");
         window.location="/pprofile"
      })
      .catch(err=>{
        // window.location="www.error..com"
      })



      
    axios.post("/api/provider/save",this.state)
    .then(res =>{
      
      localStorage.setItem("user_type","provider");
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
                name="name"
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
                className="rinputA"
                type="text"
                name="address1"
                placeholder="Address(NO)"
                value={this.setState.address}
                onChange={this.onChange}
              ></input>
            </label>
            <label>
              <input
                className="rinputA"
                type="text"
                name="address2"
                placeholder="Address()"
                value={this.setState.address}
                onChange={this.onChange}
              ></input>
            </label>
            <label>
              <input
                className="rinputAl"
                type="text"
                name="address3"
                placeholder="Address(City)"
                value={this.setState.address}
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
              <Link>
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

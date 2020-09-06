import React, { Component } from "react";
import { Link,useHistory, Router, Route} from "react-router-dom";
// import {browserHistory} from "react-router-dom";
import axios from "axios";
import Rec_profile from "./Profile/rec_profile";
import { callback } from "./Search/ggg/action";
class Login extends Component {
  constructor(props){
  
    super(props);
    localStorage.setItem("email",null)  
    this.state={
      email:null,
      password:null,
      id:null
    }
    
    this.login=this.login.bind(this);
 
  }


  login(){
    // console.log(this.state)
    axios.post("/api/user/authenticate",this.state)
      .then(res =>{
        console.log(res.data.email)
        if(res.data.email){
          localStorage.setItem("email",res.data.email)
          localStorage.setItem("user",res.data)
          if(res.data.role==="2"){
            window.location = "/pprofile";
          }
          if(res.data.role==="1"){
            window.location = "/rprofile";
          }

        }else{
          alert("Invnalid credentials !")
        }
      })
      .catch(err=>{
        alert("Invnalid credentials !")
      })     
    }
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div className="login">
        <nav className="nav">
          <ul>
            <li>
              <Link to="/">
              
                <div className="nav-item">Home</div>
              </Link>
            </li>
            <li>
              <Link to="/singup">
                <div className="nav-item">Sign up</div>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="loginc">
          <div className="logincon">
            <h1>LOGIN</h1>
            <input className="input" type="text" name="email" placeholder="email" value={this.setState.username}
                onChange={this.onChange} />
            <input className="input" type="password" name="password" placeholder="password" value={this.setState.password}
                onChange={this.onChange} />
            
              <div className="login_btn" onClick={this.login}>Login</div>
           
          </div>
        </div>
      </div>
    );
  }
}

export default Login;

import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
class Login extends Component {
  constructor(props){
  
    super(props);
    
    this.state={
      username:null,
      password:null
    }
 
  }


  login=()=>{
    console.log(this.state);

    axios.post("login",this.state)
      .then(res =>{
         localStorage.setItem("Id","type");
        
      })
      .catch(err=>{
        
      })


    this.props.callback({"user":"qaz"});
    // window.location="/profile"
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
            <input className="input" type="text" name="username" placeholder="username" value={this.setState.username}
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

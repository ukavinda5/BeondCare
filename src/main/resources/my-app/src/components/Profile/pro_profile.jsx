import React, { Component } from "react";
import { Link } from "react-router-dom";
import user from "../../images/user.png";
import axios from "axios";
class Pro_profile extends Component {
  constructor(props){
    super(props);
   
    console.log(props)
    this.state = {id:""};
    this.state = { user:Object};
    // this.setState(props)
  }
  componentDidMount(){
    
    if(this.props.id==="null"){

      window.location="/login"


    }

    axios
      .get("/api/provider/find/byemail/"+this.props.id)
      .then((a) => {
        this.setState({ user: a.data });
        console.log(a);
        
      })
      .catch((err) => {
        console.log(err);
      });

    this.setState({id:""})
  }
  render() {
    return (
      <div className="rprofile">
        <nav className="nav">
          <ul>
            <li>
              <Link to="/search">
                <div className="nav-item pitem">
                  <i class="fas fa-search"></i>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/#">
                <div className="nav-item pitem">
                  <i class="fas fa-clipboard-list"></i>
                </div>
              </Link>
            </li>
            
            <li>
              <Link to="/#">
                <div className="nav-item pitem">
                  <i class="far fa-bell"></i>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/cjob">
                <div className="nav-item pitem"><i class="fa fa-plus" aria-hidden="true"></i>Make a Job Request </div>
              </Link>
            </li>
            <li>
              <Link to="/login">
                <div className="nav-item pitem">Logout</div>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="profile_con">
          <div className="profil_pic">
            <img src={user} />
            <label className="rpd">{this.state.user.name}</label>
          </div>
          <div className="rabout">
            <h2>About</h2>
            <hr></hr>
            <label className="rpd">Username :{this.state.user.name}</label>
            <br></br>
            <label className="rpd">Email Address :{this.state.user.email}</label>
            <br></br>
            <label className="rpd">Mobile Number :{this.state.user.number}</label>
            <br></br>
            <label className="rpd">Address :{this.state.user.address1+this.state.user.address2+this.state.user.address3}</label>
            <br></br>
            <label className="rpd">Specialization :{this.state.user.specialization}</label>
            <br></br>
          </div>
        </div>
      </div>
    );
  }
}

export default Pro_profile;

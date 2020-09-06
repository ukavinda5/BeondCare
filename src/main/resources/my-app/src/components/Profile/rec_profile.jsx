import React, { Component } from "react";
import { Link } from "react-router-dom";
import user from "../../images/user.png";
import axios from "axios";
class Rec_profile extends Component {
  constructor(props){
    super(props);
    // alert(props.getId())
    console.log(props)
    this.state = {id:""};
    // this.setState(props)
  }
  componentDidMount(){
    if(this.props.id==="null"){
      window.location="/login"
    }

    axios
      .get("/api/receiver/find/byemail/"+this.props.id)
      .then((a) => {
        this.setState(a.data);      
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
                <div className="nav-item">
                  <i class="fas fa-search"></i>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/#">
                <div className="nav-item">
                  <i class="fas fa-clipboard-list"></i>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/#">
                <div className="nav-item">
                  <i class="far fa-bell"></i>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/login">
                <div className="nav-item">Logout</div>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="profile_con">
          <div className="profil_pic">
            <img src={user} />
            <label className="rpd">{this.state.name1+" "+this.state.name2} </label>
          </div>
          <div className="rabout">
            <h2>About</h2>
            <hr></hr>
            <label className="rpd">Username :{this.state.name1+" "+this.state.name2}</label>
            <br></br>
            <label className="rpd">Email Address :{this.state.email}</label>
            <br></br>
            <label className="rpd">Mobile Number :{this.state.mobile2}</label>
            <br></br>
            <label className="rpd">Address :{this.state.address1+", "+this.state.address2+", "+this.state.address3}</label>
            <br></br>
            {/* <label className="rpd">Requirments :{this.state.specialization}</label> */}
            <br></br>
          </div>
        </div>
      </div>
    );
  }
}

export default Rec_profile;

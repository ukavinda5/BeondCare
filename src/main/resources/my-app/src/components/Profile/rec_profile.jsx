import React, { Component } from "react";
import { Link } from "react-router-dom";
import user from "../../images/user.png";
class Rec_profile extends Component {
  constructor(props){
    super(props);
    this.state = {z:"kjk"};
    // this.setState(props)
  }
  componentDidMount(){
    alert(this.props.data)
  }
  render() {
    return (
      <div className="rprofile">
        <nav className="nav">
          <ul>
            <li>
              <Link to="/#">
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
            <label className="rpd">Name Name </label>
          </div>
          <div className="rabout">
            <h2>About</h2>
            <hr></hr>
            <label className="rpd">Username :{this.state.z}</label>
            <br></br>
            <label className="rpd">Email Address :{}</label>
            <br></br>
            <label className="rpd">Mobile Number :{}</label>
            <br></br>
            <label className="rpd">Address :{}</label>
            <br></br>
            <label className="rpd">Requirments :{}</label>
            <br></br>
          </div>
        </div>
      </div>
    );
  }
}

export default Rec_profile;

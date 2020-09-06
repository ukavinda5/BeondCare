import React, { Component } from "react";
import { Link } from "react-router-dom";
import user from "../../images/user.png";
import axios from "axios";
class Pro_profile extends Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }
  
  componentDidMount(){
    
    if(this.props.id==="null"){
      window.location="/login"
    }

    axios
      .get("/api/user/getDp/ukavinda@gmail.com")
      .then((a) => {
        alert("a")
        
        console.log(a.data);    
        let reader = new FileReader();
        let url=reader.readAsDataURL(a.data)
        alert("b")
        
        alert(url)
      })
      .then(blob=>{
        
      })
      .catch((err) => {

        alert("err")
        console.log(err);
      });
      
    this.setState({id:""})

    axios
      .get("/api/provider/find/byemail/"+this.props.id)
      .then((a) => {
        this.setState(a.data);
        console.log(a);        
      })
      .catch((err) => {
        console.log(err);
      });
      
    this.setState({id:""})

  }

  uploadDp=(dp)=>{
    const data= new FormData()
    data.append('dp', dp)
    // const json = JSON.stringify({""});
    // const blob = new Blob([json], {
    // type: 'application/json'
    // });
    data.append("userId",JSON.stringify("ukavinda@gmail.com"))

    axios
      .post("/api/user/uploadDp", data,{headers: {
        'Content-Type': 'application/json',
        'enctype' : 'application/json'
      }})
      .then(response => {
        console.log(response.data);;
      })
      .catch(err => {
        const errors = err.message;
        console.log(errors);
      })
  
  }

  render() {
    return (
      <div className="rprofile">
        <nav className="nav">
          <ul>
            {/* <li>
              <Link to="/search">
                <div className="nav-item pitem">
                  <i class="fas fa-search"></i>
                </div>
              </Link>
            </li> */}
            <li>
              <Link to="/joblist">
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
            <input onChange={(e)=>this.uploadDp(e.target.files[0])} type="file" id="img" name="img" accept="image/*"></input>
            <label className="rpd">{this.state.name}</label>
          </div>
          <div className="rabout">
            <h2>About</h2>
            <hr></hr>
            <label className="rpd">Username :{this.state.name+" "+this.state.name2}</label>
            <br></br>
            <label className="rpd">Email Address :{this.state.email}</label>
            <br></br>
            <label className="rpd">Mobile Number :{this.state.mobile}</label>
            <br></br>
            <label className="rpd">Address :{this.state.address1+", "+this.state.address2+", "+this.state.address3}</label>
            <br></br>
            <label className="rpd">Specialization :{this.state.specialization}</label>
            <br></br>
          </div>
        </div>
      </div>
    );
  }
}

export default Pro_profile;

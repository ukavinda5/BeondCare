import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  BrowserRouter as Router,
 
  useHistory,
  
} from "react-router-dom";
import Modal from "./Models/Modal";
class Createjob extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:null,
      age:null,
      email: null,
      salary: null,
      workAs: null,
      availability: null,
      petFriendly: null,
      workHours: null,
      ex1: null,
      ex2: null,
      ex3: null,
      ex4: null,
      show:false,
    };
  }

  closeModalHandler = () => {
    this.setState({
        ...this.state,
        show:false})}


  componentDidMount(){
  
    this.setState({email:this.props.id});
    
    if(this.props.id==="null"){

      window.location="/login"

    }
    
  }
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitHaddel = () => {
    console.log(this.state);
    axios.post("/api/job/save",this.state)
    .then(res =>{
      
      localStorage.setItem("user_type","provider");
      // window.location="www.ggle.com"
    
    })
    .catch(err=>{
      // window.location="www.error..com"
    })
    // let history = useHistory();
    // history.goBack();
    // this.props.history.push('/');
    // window.location="/login"
    axios.get("/api/user/find/byemail/"+this.props.id)
      .then(res =>{
        console.log(res.data.email)
        if(res.data.email){
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
      
      let payload={
        type:2,
        provider:{

            email:this.state.email
        },
        receiver:{
            email:this.state.email
        },
        status:true}
        console.log(payload)


      axios.post("/api/job/doPayment",payload)
       .then(res=>{
           let provider=this.state.provider
            this.setState(res.data)
            this.setState({
                ...this.state,
                provider:provider
            })
           if(res.data){this.closeModalHandler({showRating:false,});}
        })
        .catch(
           err=> {console.log(err)}
       )
  
  
  
    };
  render() {
    return (
      <div className="cjob">
        <div className="cjobcon">
          <label className="cjobheadr">Create a job Reqest</label>
          <div className="cjpart">
            <label>Can Work as :</label>
            <select
              className="rinputs"
              name="workAs"
              value={this.state.value}
              onChange={this.onChange}
            >
              <option value="volvo" selected disabled hidden>
                Can Work as :
              </option>
              <option value="Domestic Helper">Domestic Helper</option>
              <option value="Babysitter">Babysitter</option>
              <option value="Cook">Cook</option>
              <option value="Elder Coregiver">Elder Coregiver</option>
              <option value="Driver">Driver</option>
              <option value="Other">Other</option>
            </select>

            <label>Expected Salary :</label>

            <input
              className="rinputs"
              type="number"
              name="salary"
              placeholder="Expected Salary"
              value={this.setState.salary}
              onChange={this.onChange}
            ></input>
          </div>
          <div className="ex">
          <label>
          <input
              className="rinput"
              type="text"
              name="ex1"
              placeholder="Experience"
              value={this.setState.ex1}
              onChange={this.onChange}
            ></input>
            <input
              className="rinput"
              type="text"
              name="ex2"
              placeholder="Experience"
              value={this.setState.ex2}
              onChange={this.onChange}
            ></input>
            <input
              className="rinput"
              type="text"
              name="ex3"
              placeholder="Experience"
              value={this.setState.ex3}
              onChange={this.onChange}
            ></input>
            <input
              className="rinput"
              type="text"
              name="ex4"
              placeholder="Experience"
              value={this.setState.ex4}
              onChange={this.onChange}
            ></input>
            {/* <textarea
              placeholder="Experience"
              className="cjtxtarea"
              name="details"
              value={this.state.value}
              onChange={this.onChange}
            /> */}
          </label>
          </div>

          <div className="cjpart">
            <label>Work Hours :</label>

            <select
              className="rinputs"
              name="workHours"
              value={this.state.value}
              onChange={this.onChange}
              placeholder="Full/Part Time"
            >
              <option value="" selected disabled hidden>
                Full/Part Time
              </option>
              <option value="Full Time">Full Time</option>
              <option value="Part Time">Part Time</option>
            </select>

            <label>Pet Friendly :</label>

            <select
              className="rinputs"
              name="petFriendly"
              value={this.state.value}
              onChange={this.onChange}
              placeholder="Yes/No"
            >
              <option value="" selected disabled hidden>
                Yes/No
              </option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>

            <label>Availability :</label>

            <select
              className="rinputs"
              name="availability"
              value={this.state.value}
              onChange={this.onChange}
              placeholder="Yes/No"
            >
              <option value="" selected disabled hidden>
                Yes/No
              </option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="bot">
            <Link to="/pprofile">
              <div className="login_btn">Back</div>
            </Link>
            <Link>
              <div className="login_btn" onClick={this.submitHaddel, this.setShow;}>
                Pay & Submit
              </div>
            </Link>
          </div>
        </div>
        <Modal clickHandler={this.updateContactDetails} show={this.state.show} close={this.closeModalHandler} />
      </div>
    );
  }
}

export default Createjob;

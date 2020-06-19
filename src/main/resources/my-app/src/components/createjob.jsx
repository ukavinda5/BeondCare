import React, { Component } from "react";
import { Link } from "react-router-dom";
class Createjob extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          Name: null,
          email: null,
          mobile: null,
          address1: null,
          address2: null,
          address3: null,
          password: null,
          role: null,
          availability:null,
          petFriendly:null,
          workHours:null,
          experience:null,

        };
    }
        onChange = (e) => {
            this.setState({
              [e.target.name]: e.target.value,
            });
        };

        submitHaddel = () => {
            console.log(this.state);
        
        }
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

          <label>
            <textarea
              placeholder="Experience"
              className="cjtxtarea"
              name="experience"
              value={this.state.value}
              onChange={this.onChange}
            />
          </label>

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
              <div className="login_btn" onClick={this.submitHaddel}>
                Pay & Submit
              </div>
              </Link>
          
            </div>
        </div>
      </div>
    );
    }
  }


export default Createjob;

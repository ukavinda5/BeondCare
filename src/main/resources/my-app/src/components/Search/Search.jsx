import React, { Component } from 'react'
import axios from "axios";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { jobs: [] };
   
  }

    componentDidMount() {
  
      axios
        .get("/api/job/find/all")
        .then((a) => {
          this.setState({ jobs: a.data });
          console.log(this.state);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    render() { 
        return ( 
            <div className="searchcon">
                <div className="categorize">

               
                <select
                className="rinputs"
                name="type"
                value={this.state.gender}
                onChange={this.onChange}
              >
                <option value="" selected disabled hidden>
                Service type
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>

              <select
                className="rinputs"
                name="location"
                value={this.state.gender}
                onChange={this.onChange}
              >
                <option value="" selected disabled hidden>
                Location
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>

              



              <input className="rinputs" type="text" name="username" placeholder="Age" value={this.setState.username}
                onChange={this.onChange} />

              <input className="rinputs" type="text" name="username" placeholder="Name" value={this.setState.username}
                onChange={this.onChange} />
                <div className="nav-item">
                  <i class="fas fa-search"></i>
                </div>
             
                
            </div>
            
            <div className="results">

                {this.state.jobs.map(
                  (i) =>{
                    return(
                      <div className="jobadd">
                        <div className="jimg"></div>
                        <div className="jcontent">
                          <label>Name : {}</label>
                          <label>Age : {}</label>
                        </div>
                        <div className="jbtn">
                          <button>More Details</button>
                          <button>Shortlist</button>
                        </div>
                      </div>
                    )
                  }
                )}
                


                {/* <div className="jobadd"></div> */}

                </div>
            </div>
         );
    }
}
 
export default Search;
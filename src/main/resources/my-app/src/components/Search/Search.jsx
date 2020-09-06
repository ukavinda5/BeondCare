import React, { Component } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { jobs: [], locations:[] ,
    
      type :"",
      location :"", 
      name :"",
      age :""
      // email:"ukavinda5@gmail.com"
    };
    this.filter=this.filter.bind(this)
   
  }
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

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

        axios
        .get("/api/job/find/location")
        .then((a) => {
          this.setState({ locations: a.data });
          console.log(this.state);
        })
        .catch((err) => {
          console.log(err);
        });
        
    }

    filter(job) {
      return (String(job.workAs).includes(this.state.type)&&(job.provider&&String((job.provider.name).toUpperCase()).includes(this.state.name.toUpperCase())));
      
    }
    
    render() { 
      
      let filterd = this.state.jobs.filter(this.filter);
        return ( 
            <div className="searchcon">
                <div className="categorize">

               
               
              <select
              className="rinputs"
              name="type"
              value={this.state.type}
              onChange={this.onChange}
            >
              <option value="" selected disabled hidden>
              Service type
              </option>
              <option value="" >
              All
              </option>
              <option value="Domestic Helper">Domestic Helper</option>
              <option value="Babysitter">Babysitter</option>
              <option value="Cook">Cook</option>
              <option value="Elder Coregiver">Elder Coregiver</option>
            </select>

              <select
                className="rinputs"
                name="location"
                value={this.state.location}
                onChange={this.onChange}
              >
                <option value="" selected disabled hidden>
                Location
                </option>
                {
                  this.state.locations.map((location) =>{
                    return(
                      <option value="male">{location}</option>
                    );
                  })
                }
              </select>

              



              <input className="rinputs" type="text" name="age" placeholder="Age" value={this.state.age}
                onChange={this.onChange} />

              <input className="rinputs" type="text" name="name" placeholder="Name" value={this.state.name}
                onChange={this.onChange} />
                <div className="nav-item">
                  <i class="fas fa-search"></i>
                </div>
             
                
            </div>
            
            <div className="results">

                {filterd.map(
                  (i) =>{
                    return(
                      <div className="jobadd">
                        <div className="jimg"></div>
                        <div className="jcontent">
                          <label>Name : {i.provider&&i.provider.name||""}</label>
                          <label>Age : {i.provider&&i.provider.age||""}</label>
                          <label>Work as : {i.workAs}</label>
                        </div>
                        <div className="jbtn">
                        <Link onClick={()=>{localStorage.setItem("jobId",i.id)}} to="/preview" state={i}>
                          <button >Show More</button>
                        </Link>
                          {/*  */}
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
import React, { Component } from 'react'


class Search extends Component {
    state = {  }
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

                <div className="jobadd">
                <div className="jimg">

                </div>
                  <div className="jcontent">
                  <label>Name : {}</label>
                  <label>Age : {}</label>

                  </div>
                  <div className="jbtn">
                    <button>More Details</button>
                    <button>Shortlist</button>
                  </div>
                </div><div className="jobadd"></div>

                </div>
            </div>
         );
    }
}
 
export default Search;
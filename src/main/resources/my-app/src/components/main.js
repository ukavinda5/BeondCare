
import React, { Component } from 'react';
import Home from "./home";
import Login from "./login";
import Reg_home from "./Registration/reg_home";
import Reg_provider from "./Registration/reg_provider";
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from "react-router-dom";
import Reg_receiver from "./Registration/reg_receiver ";
import Rec_profile from "./Profile/rec_profile";
import Pro_profile from "./Profile/pro_profile";
import Reg_success from "./Registration/reg_success";
import Admin from "./admin/admin";
import Search from "./Search/search";
import Createjob from "./createjob";
import R_list from "./admin/p_list";
import P_list from "./admin/r_list";
import Job_profile from "./Profile/job_profile";
import Preview from './preview';
import Modelapp from './Models/Modalapp';
import Shortlist from './Profile/ShortList';


// import Reg_successful from "./components/Registration/Reg_successful ";
class Main extends Component { 


  constructor(props){
    super(props);
        this.callback=this.callback.bind(this)
        this.getId=this.getId.bind(this)
        this.state={
          id:0
        }
       
        localStorage.setItem("recieverId",this.state.id)
        
  }


  callback(value){ 
    alert("callbk")
    this.setState({id:5})
    this.state.id=5 
  }

  getId(){
    return this.state.id;
  }

  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Route path="/" exact component={Home} />
          <Route path="/login" component={() => <Login callback={this.callback} />} />
          <Route path="/singup" exact component={Reg_home} />
          <Route path="/regpro" exact component={Reg_provider} />
          <Route path="/regres" exact component={Reg_receiver} />
          <Route path="/rprofile" component={() => <Rec_profile getId={this.getId} id={localStorage.getItem("email")} />} />
          <Route path="/pprofile" component={() => <Pro_profile getId={this.getId} id={localStorage.getItem("email")} />} />
          <Route path="/jprofile" component={() => <Job_profile getId={this.getId} id={localStorage.getItem("id")} />} />
          <Route path="/reg_success" exact component={Reg_success} />
          <Route path="/admin/**" exact component={Admin} />
          <Route path="/admin/r_list" exact component={R_list} />
          <Route exact path="/admin/p_list"  component={P_list} />
          <Route path="/search" exact component={Search} />
          <Route path="/preview" exact component={Preview} />
          <Route path="/cjob" exact component={() => <Createjob getId={this.getId} id={localStorage.getItem("email")} />} />
          <Route path="/test" exact component={Modelapp} />
          <Route path="/shortlist" exact component={Shortlist} />
          {/* <Route path="/regres" ecact component={Reg_successful} /> */}
        {/*}  <Route path="/t" component={FetchHOC('test')(Rec_profile)} /> 
        <Route path="/singup" component={Slider} /> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default Main;

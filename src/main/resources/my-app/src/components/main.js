
import React, { Component } from 'react';
import Home from "./home";
import Login from "./login";
import Reg_home from "./Registration/reg_home";
import Reg_provider from "./Registration/reg_provider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Reg_receiver from "./Registration/reg_receiver ";
import Rec_profile from "./Profile/rec_profile";
import Reg_success from "./Registration/reg_success";
import Admin from "./admin/admin";

import R_list from "./admin/p_list";
import P_list from "./admin/r_list";
// import Reg_successful from "./components/Registration/Reg_successful ";
class Main extends Component { 


  constructor(props){
    super(props);
    this.state={
      user:"a"
    }

    //this.callback=this.callback.bind(this)
  }

  callback=(value)=>{
    // alert(value)
      this.setState(value);
      // this.state=value;
      alert(this.state.user)
  }

  render(){
    return (
      <Router>
        <div className="App">
          <Route path="/" exact component={Home} />
          <Route path="/login" component={() => <Login callback={this.callback} />} />
          <Route path="/singup" exact component={Reg_home} />
          <Route path="/regpro" exact component={Reg_provider} />
          <Route path="/regres" exact component={Reg_receiver} />
          <Route path="/profile" component={() => <Rec_profile data={this.state.user} />} />
          <Route path="/reg_success" exact component={Reg_success} />
          <Route path="/admin/**" exact component={Admin} />
          <Route path="/admin/r_list" exact component={R_list} />
          <Route exact path="/admin/p_list"  component={P_list} />
          {/* <Route path="/regres" ecact component={Reg_successful} /> */}
          {/* <Route path="/login" component={Slider} />
        <Route path="/singup" component={Slider} /> */}
        </div>
      </Router>
    );
  }
}

export default Main;

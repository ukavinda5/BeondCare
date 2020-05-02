import React from "react";
import "./App.css";
import Home from "./components/home";
import Login from "./components/login";
import Reg_home from "./components/Registration/reg_home";
import Reg_provider from "./components/Registration/reg_provider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Reg_receiver from "./components/Registration/reg_receiver ";
import Rec_profile from "./components/Profile/rec_profile";
import Reg_success from "./components/Registration/reg_success";
import Admin from "./components/admin/admin";
// import Reg_successful from "./components/Registration/Reg_successful ";
function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={Home} />
        <Route path="/login" ecact component={Login} />
        <Route path="/singup" ecact component={Reg_home} />
        <Route path="/regpro" ecact component={Reg_provider} />
        <Route path="/regres" ecact component={Reg_receiver} />
        <Route path="/profile" exact component={Rec_profile} />
        <Route path="/reg_success" exact component={Reg_success} />
        <Route path="/admin" exact component={Admin} />
        {/* <Route path="/regres" ecact component={Reg_successful} /> */}
        {/* <Route path="/login" component={Slider} />
      <Route path="/singup" component={Slider} /> */}
      </div>
    </Router>
  );
}

export default App;

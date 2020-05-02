import React, { Component } from "react";
import bg from "../images/Home_bg.svg";
import { Link } from "react-router-dom";
class Home extends Component {
  render() {
    return (
      <div className="home">
        <nav className="nav">
          <ul>
            <li>
              <Link to="/login">
                <div className="nav-item">Login</div>
              </Link>
            </li>
            <li>
              <Link to="/singup">
                <div className="nav-item">Sign up</div>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="cont">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            laudantium, aperiam ad explicabo veritatis alias! Ab cumque fuga
            expedita impedit eius assumenda, facere possimus qui fugiat
            consequatur, corrupti repellat laboriosam?
          </p>
          <div className="btn1">
            <Link to="about">Learn more</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

import React, { Component } from "react";
// import { Link, Redirect } from "react-router-dom";
import "./landing.css";
import SignUp from "../../components/SignUp/SignUp.js";
import SignIn from "../../components/SignIn/SignIn.js";

class Landing extends Component {
  render() {

    return (
      <div className="form-group" id="form-container">
        <div id="signin-form">
          <SignIn />
          <a href="#signup-form">Not a member? Sign up here!</a>
        </div>
        <div id="signup-form">
          <SignUp />
        </div>
      </div>
    );
  }
}

export default Landing;
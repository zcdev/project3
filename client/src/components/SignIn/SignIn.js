import React, { Component } from "react";
import "./signin.css";
import { Input, TextArea, FormBtn } from "../Form";

class SignIn extends Component {
  // Setting the component's initial state
state = {
      userName: "",
      password: ""
    };
  

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
  
    event.preventDefault();

    fetch("/auth/signin", {
      method: "POST",
      credentials: "include",
      mode: "cors",
      body: JSON.stringify({
        userName: this.state.userName,
        password: this.state.password
      }),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    }).then(response  => {
      console.log(response)
      //Will redirect to root route no matter what. Successful signin will create cookies. If cookies are detected, root route will redirect to Home, otherwise, to Landing
      window.location.href = "/";
    }).catch(err => {
      console.log(err);
    })

    this.setState({
      userName: "",
      password: ""
    });
  };

  render() {
    return (
      <div className="mern-signin">
        <form>
          <div className="float-left right space">
          <Input
            value={this.state.userName}
            name="userName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Username"
          />
          </div>
          <div className="float-left right space">
          <Input
            value={this.state.password}
            name="password"
            onChange={this.handleInputChange}
            type="password"
            placeholder="Password"
          />
          </div>
          <div className="float-left">
          <FormBtn onClick={this.handleFormSubmit}> Sign In
          </FormBtn>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;

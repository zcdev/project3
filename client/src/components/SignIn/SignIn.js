import React, { Component } from "react";
import "./signin.css";
import { Input, FormBtn } from "../Form";

class SignIn extends Component {

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
    }).then(response => {
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
      <div>
        <form>
          <div>
            <Input
              className="form-control input user-name"
              value={this.state.userName}
              name="userName"
              onChange={this.handleInputChange}
              type="text"
              placeholder="Username"
              
            />
          </div>
          <div>
            <Input
              className="form-control input user-name"
              value={this.state.password}
              name="password"
              onChange={this.handleInputChange}
              type="password"
              placeholder="Password"
            />
          </div>
          <div>
            <FormBtn onClick={this.handleFormSubmit}>
              Sign In
            </FormBtn>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;

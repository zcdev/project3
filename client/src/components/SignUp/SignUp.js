import React, { Component } from "react";
import "./signup.css"
import { Input, FormBtn } from "../Form";

class SignUp extends Component {
  state = {
    userName: "",
    // email: "",
    password: "",
    password2: "",
  }

  //Pull from state in order to post user info
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.userName /*&& this.state.email*/ && this.state.password && this.state.password2) {
      if (this.state.password === this.state.password2) {

        //Use fetch here because it deals with cors more effectively than axios. This allows easy cookie storage
        fetch("/auth/signup", {
          method: "POST",
          credentials: "include",
          mode: "cors",
          body: JSON.stringify({
            // email: this.state.email,
            password: this.state.password,
            userName: this.state.userName
          }),
          headers: new Headers({
            "Content-Type": "application/json"
          })
        }).then(response => {
          console.log(response);

          window.location.href = "/";
        }).catch(err => console.log(err));

        this.setState({
          userName: "",
          // email: "",
          password: "",
          password2: ""
        });
      } else {
        console.log("please make sure your passwords match")
      }
    } else {
      console.log("please make sure you fill out all the fields")
    }

  };

  render() {

    return (
      <div>
        <form>
          <Input
            className="form-control input user-name"
            value={this.state.userName}
            onChange={this.handleInputChange}
            name="userName"
            placeholder="Username"
          />
          {/* <Input
            className="form-control"
            value={this.state.email}
            onChange={this.handleInputChange}
            name="email"
            placeholder="email"
          /> */}
          <Input
            className="form-control input user-name"
            value={this.state.password}
            onChange={this.handleInputChange}
            name="password"
            placeholder="Password"
            type="password"
          />
          <Input
            className="form-control input user-name"
            value={this.state.password2}
            onChange={this.handleInputChange}
            name="password2"
            placeholder="Confirm password"
            type="password"
          />
          <FormBtn onClick={this.handleFormSubmit}>
            Sign Up
          </FormBtn>
        </form>
      </div>
    )
  }
}

export default SignUp;
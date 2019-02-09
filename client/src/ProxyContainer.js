import React, { Component } from "react";
import NoMatch from "./pages/NoMatch";
import Landing from "./pages/Landing/Landing.js";
import Home from "./pages/Home/Home.js";
import API from "./utils/API"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


class ProxyContainer extends Component {
  state = {
    isLoggedIn: false,
    username: "",
    // email: ""
  }

  async componentDidMount() {
    await API.getUser()
      .then(user => {
        console.log(user)
        this.setState({
          isLoggedIn: user.data.loggedIn,
          username: user.data.username,
          // email: user.data.email
        });
      })
  }

  render() {
    const cookie = document.cookie.split(";");
    console.log("cookie", cookie)

    if (this.state.isLoggedIn) {
      return (
        <Router>
          <div>
            <Switch>
              <Route 
                exact path="/"
                component={Home}
                username={this.state.username}
                email={this.state.email}
              />
              <Route path="/home"
                component={Home}
                username={this.state.username}
                email={this.state.email}
              />
              <Route component={NoMatch} />
            </Switch>
          </div>

        </Router>
      )

    } else {


      return (
        <Router>
          <div>
            <Switch>
              <Route 
                path="/"
                component={Landing}
              />
            </Switch>
          </div>
        </Router>
      )
    }
  }
}

export default ProxyContainer;


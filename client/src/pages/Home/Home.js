import React, { Component } from "react";
import API from "../../utils/API"
import "./home.css"
import Navbar from "../../components/Navbar";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class Home extends Component {

  state = {
    isLoggedIn: false,
    userName: "",
    // email: ""
  }

  componentDidMount() {
    API.getUser()
      .then(user => {
        this.setState({
          userName: user.data.userName
        })
      })

    // I dont think we need this
    // ============================================
    // const home = this

    // async function setUserInfo() {
    //   const cookie = document.cookie.split(";");
    //   console.log("cookie", cookie)
    //   let userName = cookie[0];
    //   userName = userName.split("=");
    //   userName = userName[1];
    //   console.log("userName:", userName);
    //   home.setState({
    //     userName: userName
    //   })
    // }
    // setUserInfo()
    // ============================================

  }

  logout = () => {
    API.logout().then(res => {
    })
  }

  render() {

    const routes = [
      {
        path: "/",
        exact: true,
        sidebar: () => <div>Home!</div>,
        main: () => <h2>Home!</h2>
      },
      {
        path: "/campaign",
        sidebar: () => <div>Campaign sidebar!</div>,
        main: () => <h2>Campaign home!</h2>
      },
      {
        path: "/encyclopedia",
        sidebar: () => <div>Encyclopedia sidebar!</div>,
        main: () => <h2>Encyclopedia home!</h2>
      },
      {
        path: "/setup",
        sidebar: () => <div>Setup sidebar!</div>,
        main: () => <h2>Setup home!</h2>
      }
    ];

    return (
      <Router>
      <div>
          <div id="sidebar">
            <div>
              <h5>Hello, {this.state.userName}</h5>
              <a href="/"><button onClick={this.logout}>Sign Out</button></a>
            </div>
            <Navbar />
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.sidebar}
              />
            ))}
          </div>
          <div id="display">
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.main}
              />
            ))}
          </div>
      </div>
      </Router>
    )
  }
}

export default Home;
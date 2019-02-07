import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Campaign from "../Campaign";
import Encyclopedia from "../Encyclopedia";
import Setup from "../Setup";
import API from "../../utils/API"
import "./home.css"


class Home extends Component {

  state = {
    isLoggedIn: false,
    userName: "",
    campaignId: ""
    // email: ""
  }

  componentDidMount() {
    
    API.getUser()
      .then(user => {
        console.log(user)
        this.setState({
          userName: user.data.userName
        })
      })
      .then(() => {
        API.getCampaignByUser(this.state.userName)
          .then(dbCampaign => {
            if (dbCampaign.data === null) {
              const newCampaign = {
                username: this.state.userName
              }
              API.saveCampaign(newCampaign)
                .then(dbCampaign => {
                  console.log("New campaign: ", dbCampaign)
                  this.setState({
                    campaignId: dbCampaign.data._id
                  })
                })
            } else {
              this.setState({
                campaignId: dbCampaign.data._id
              })
            }
          })
          .catch(err => console.log(err));
      });

  }

  logout = () => {
    API.logout().then(res => {
    })
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar logout={this.logout}/>
          <div className="homeDisplay">
            <Route
              path="/campaign"
              component={() => <Campaign campaignId={this.state.campaignId}/>}
            />
            <Route
              path="/encyclopedia"
              component={Encyclopedia}
            />
            <Route
              path="/setup"
              component={() => <Setup campaignId={this.state.campaignId}/>}
            />
          </div>
        </div>
      </Router>
    )
  }
}

export default Home;
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./setup.css";
import SetupEncounters from "../../components/SetupEncounters";
import SetupCharacters from "../../components/SetupCharacters";

class Setup extends Component {
  state = {};

  render() {
    return (
      // All wrapped in router (only needed if SetupPlayers component is added to #setup-main div)

      <Router>
        <div id="setup">
          <div id="setup-sidebar">
            <div id="setup-nav">
              <div className="setup-nav-btn light">
                <Link to="/setupEncounters">Create Encounter</Link>
              </div>
              <div className="setup-nav-btn dark">
                <Link to="/setupCharacters">Create Character</Link>
              </div>
            </div>
          </div>
          <div>
            <Route
              path="/setupEncounters"
              component={() => (
                <SetupEncounters campaignId={this.props.campaignId} />
              )}
            />
            <Route
              path="/setupCharacters"
              component={() => (
                <SetupCharacters campaignId={this.props.campaignId} />
              )}
            />
          </div>
        </div>
      </Router>
    );
  }
}

export default Setup;

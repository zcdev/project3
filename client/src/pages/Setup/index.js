import React, { Component } from 'react';
import "./setup.css";
import SetupEncounters from "../../components/SetupEncounters"

class Setup extends Component {
   state = {
   }

   render() {
      return (
         // All wrapped in router (only needed if SetupPlayers component is added to #setup-main div)

         // <Router>
         <div id="setup">
            <div id="setup-sidebar">
               Setup Sidebar!
               {/* <Link to="/setupEncounters" />*/}
               {/* <Link to="/setupCharacters" />*/}
               {/* Has two nav buttons for Encounters and Players */}
            </div>
            <div id="setup-main">
               Setup Main!
               {/* Has two routes for SetupEncounters component*/}
               {/* <Route component ={() => <SetupEncounters campaignId={this.props.campaignId}/>} */}
               <SetupEncounters campaignId={this.props.campaignId} />
               {/* <Route component ={() => <SetupCharacters campaignId={this.props.campaignId}/>} */}
            </div>
         </div>
         // </Router>
      );
   }
}

export default Setup;

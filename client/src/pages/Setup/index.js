import React, { Component } from 'react';
import "./setup.css";

class Setup extends Component {
   state = {

   }

   render() {
      return (
         // All wrapped in router (only needed if SetupPlayers component is added to #setup-main div)
         <div id="setup">
            <div id="setup-sidebar">
               Setup Sidebar!
               {/* Has two nav buttons for Encounters and Players */}
            </div>
            <div id="setup-main">
               Setup Main!
               {/* Has two routes for SetupEncounters component*/}
            </div>
         </div>
      );
   }
}

export default Setup;
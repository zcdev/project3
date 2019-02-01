import React, { Component } from 'react';
import monsters from "../../dnd-data/monsters.json";
import API from '../../utils/API.js';
import "./campaign.css";

class Campaign extends Component {
   state = {

   }

   componentDidMount() {
      // for (var i = 0; i < monsters.length; i++) {
      //    console.log(monsters[i].name);
      // }

      // const newCamp = {
      //    username: "jacob"
      // }

      // const newEncounter = {
      //    encounter: monsters[1]
      // }

      // API.saveCampaign(newCamp)
      //    .then(res => console.log("YOUR RESPONSE: ", res))
      //    .catch(err => console.log(err));

      // API.addEncounterToCampaign("5c53a287eb45a42555eff70b" , newEncounter)
      //    .then(res => console.log("YOUR RESPONSE: ", res))
      //    .catch(err => console.log(err));
   }

   render() {
      return (
         <div id="campaign">
            <div id="campaign-sidebar">
               Campaign Sidebar!
            </div>
            <div id="campaign-main">
               Campaign Main!
            </div>
         </div>
      );
   }
}

export default Campaign;
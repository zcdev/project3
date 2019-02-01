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
      //    name: "mySecondEncounter",
      //    monsters: [{name: "monster 4"}, {name: "monster 5"}, {name: "monster 6"}]
      // }

      // API.saveCampaign(newCamp)
      //    .then(res => console.log("YOUR RESPONSE: ", res))
      //    .catch(err => console.log(err));

      // API.addEncounterToCampaign("5c53a9ca9183a82880bbc5de" , newEncounter)
      //    .then(res => console.log("YOUR RESPONSE: ", res))
      //    .catch(err => console.log(err));

      // API.getEncountersFromCampaign("5c53a9ca9183a82880bbc5de")
      //    .then(res => console.log("YOUR ENCOUNTERS: ", res))
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
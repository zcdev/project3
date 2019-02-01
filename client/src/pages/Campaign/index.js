import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CampaignMonsters from "../../components/CampaignMonsters";
import CampaignEncounters from "../../components/CampaignEncounters";
import CampaignInfoPanel from "../../components/CampaignInfoPanel";
import API from '../../utils/API.js';
import "./campaign.css";

class Campaign extends Component {
   state = {
      infoPanelStatus: "",
      monsterIndex: "",
      encounter: []
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

      // API.addEncounterToCampaign("5c53af4354d1412aac87a2b0" , newEncounter)
      //    .then(res => console.log("YOUR RESPONSE: ", res))
      //    .catch(err => console.log(err));

      // API.getEncountersFromCampaign("5c53af4354d1412aac87a2b0")
      //    .then(res => console.log("YOUR ENCOUNTERS: ", res))
      //    .catch(err => console.log(err));
   }

   getMonsterInfo = (status, monsterIndex) => {
      this.setState({
         infoPanelStatus: status,
         monsterIndex: monsterIndex
      })
   }

   getEncounterInfo = (status, encounter) => {

      console.log("ENCOUNTER: ", encounter.monsters);

      this.setState({
         infoPanelStatus: status,
         encounter: encounter.monsters
      })
   }

   render() {
      return (
         <div id="campaign">
            <div id="campaign-sidebar">
               <Router>
                  <div>
                     <div id="campaign-nav">
                        <div className="campaign-nav-btn">
                           <Link to="/monsters">Monsters</Link>
                        </div>
                        <div className="campaign-nav-btn">
                           <Link to="/encounters">Encounters</Link>
                        </div>
                        <div className="campaign-nav-btn">
                           <Link to="/characters">Characters</Link>
                        </div>
                     </div>
                     <div>
                        <Route
                           path="/monsters"
                           component={() => <CampaignMonsters getMonsterInfo={this.getMonsterInfo}/>}
                        />
                        <Route
                           path="/encounters"
                           component={() => <CampaignEncounters getEncounterInfo={this.getEncounterInfo} campaignId={this.props.campaignId}/>}
                        />
                        {/* <Route
                           path="/characters"
                           component={CampaignCharacters}
                        /> */}
                     </div>
                  </div>
               </Router>
            </div>
            <div id="campaign-main">
               <CampaignInfoPanel
                  infoPanelStatus={this.state.infoPanelStatus}
                  monsterIndex={this.state.monsterIndex}
                  monsters={this.state.encounter}
               />
            </div>
         </div>
      );
   }
}

export default Campaign;
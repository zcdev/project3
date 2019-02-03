import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MonsterList from "../../components/CampaignComponents/MainDisplay/MonsterList";
import EncounterList from "../../components/CampaignComponents/MainDisplay/EncounterList";
import CampaignInfoPanel from "../../components/CampaignInfoPanel";
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
         <Router>
            <div id="campaign">
               <div id="campaign-sidebar">
                  <div>
                     <div id="campaign-nav">
                        <div className="campaign-nav-btn light">
                           <Link to="/monsters">Monsters</Link>
                        </div>
                        <div className="campaign-nav-btn dark">
                           <Link to="/encounters">Encounters</Link>
                        </div>
                        <div className="campaign-nav-btn light">
                           <Link to="/characters">Characters</Link>
                        </div>
                     </div>
                     <div>

                     </div>
                  </div>
               </div>
               <div id="campaign-main">
                  <div id="info-display">
                     <Route
                        path="/monsters"
                        component={() => <MonsterList getMonsterInfo={this.getMonsterInfo} />}
                     />
                     <Route
                        path="/encounters"
                        component={() => <EncounterList getEncounterInfo={this.getEncounterInfo} campaignId={this.props.campaignId} />}
                     />
                     {/* <Route
                           path="/characters"
                           component={CampaignCharacters}
                        /> */}
                  </div>
                  <div id="combatants-display">

                  </div>
               </div>
            </div>
         </Router>
      );
   }
}

export default Campaign;
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MonsterList from "../../components/CampaignComponents/MainDisplay/MonsterList";
import EncounterList from "../../components/CampaignComponents/MainDisplay/EncounterList";
import CombatantItem from "../../components/CampaignComponents/CombatantItem";
import monsters from "../../dnd-data/monsters.json";
import "./campaign.css";

class Campaign extends Component {
   state = {
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

   addMonsterToCombatants = (monsterIndex) => {
      const alteredEncounter = this.state.encounter;
      
      let newMonster = monsters[monsterIndex - 1];
      newMonster.combatantType = "monster";
      
      alteredEncounter.push(newMonster);

      console.log("ALTERED ENCOUNTER: ", alteredEncounter);

      this.setState({
         encounter: alteredEncounter
      })
   }

   getEncounterInfo = (status, encounter) => {

      console.log("ENCOUNTER: ", encounter.monsters);

      const alteredEncounter = this.state.encounter;
      
      encounter.monsters.forEach(monster => {
         monster.combatantType = "monster";
         alteredEncounter.push(monster);
      })

      this.setState({
         encounter: alteredEncounter
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
                        component={() => <MonsterList addMonsterToCombatants={this.addMonsterToCombatants} />}
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
                     {this.state.encounter.map( (combatant, i) => (
                        <CombatantItem 
                           combatant={combatant}
                           key={i}
                        />
                     ))}
                  </div>
               </div>
            </div>
         </Router>
      );
   }
}

export default Campaign;
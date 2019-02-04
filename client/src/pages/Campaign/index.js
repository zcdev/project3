import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MonsterList from "../../components/CampaignComponents/MainDisplay/MonsterList";
import EncounterList from "../../components/CampaignComponents/MainDisplay/EncounterList";
import CharacterList from "../../components/CampaignComponents/MainDisplay/CharacterList";
import CombatantItem from "../../components/CampaignComponents/CombatantItem";
import monsters from "../../dnd-data/monsters.json";
import "./campaign.css";
import API from '../../utils/API';

class Campaign extends Component {
   state = {
      encounter: [],
      campaignId: ""
   }

   componentDidMount() {

      console.log(this.props.campaignId);

      this.setState({
         campaignId: this.props.campaignId
      })

      // const newEncounter = {
      //    name: "MyThirdEncounter",
      //    monsters: [monsters[55], monsters[132], monsters[187]]
      // }

      // API.addEncounterToCampaign(this.props.campaignId, newEncounter)
      //    .then(res => console.log(res))
      //    .catch(err => console.log(err));

      // const newCharacter = {
      //    name: "CharacterTwo",
      //    initiativeBonus: 2
      // }

      // API.addCharacterToCampaign(this.props.campaignId, newCharacter)
      //    .then(res => console.log(res))
      //    .catch(err => console.log(err));

   }

   addMonsterToCombatants = monsterIndex => {
      const alteredEncounter = this.state.encounter;

      let newMonster = monsters[monsterIndex - 1];
      newMonster.combatantType = "monster";

      alteredEncounter.push(newMonster);

      console.log("ALTERED ENCOUNTER: ", alteredEncounter);

      this.setState({
         encounter: alteredEncounter
      })
   }

   addEncounterToCombatants = encounter => {

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

   addCharacterToCombatants = character => {
      console.log("CHARACTER: ",  character);

      const alteredEncounter = this.state.encounter;
      character.combatantType = "character"
      alteredEncounter.push(character);

      console.log("ALTERED ENCOUNTER: ", alteredEncounter);

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
                        component={() => <EncounterList addEncounterToCombatants={this.addEncounterToCombatants} campaignId={this.props.campaignId} />}
                     />
                     <Route
                        path="/characters"
                        component={() => <CharacterList addCharacterToCombatants={this.addCharacterToCombatants} campaignId={this.props.campaignId} />}
                     />
                  </div>
                  <div id="combatants-display">
                     {this.state.encounter.map((combatant, i) => (
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
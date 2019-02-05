import React from "react";
import MonsterList from "../MainDisplay/MonsterList";
import EncounterList from "../MainDisplay/EncounterList";
import CharacterList from "../MainDisplay/CharacterList";

function MainDisplay (props) {

   if (props.inCombat === false) {

      switch(props.mainDisplay) {
         case "monsters":
            return(
               <MonsterList addMonsterToCombatants={props.addMonsterToCombatants}/>
            );
         case "encounters":
            return (
               <EncounterList
                  addEncounterToCombatants={props.addEncounterToCombatants}
                  campaignId={props.campaignId}
               />
            );
         case "characters":
            return (
               <CharacterList
                  addCharacterToCombatants={props.addCharacterToCombatants}
                  campaignId={props.campaignId}
               />
            );
         default:
            return(
               <MonsterList addMonsterToCombatants={props.addMonsterToCombatants}/>
            );
      }

   } else {
      return(
         <div>
            {console.log("monster stats!")}
         </div>
      )
   }

}

export default MainDisplay;
import React from "react";
import SpecialAbility from "./SpecialAbility";

function StatDisplay(props) {

   if (!props.monster)
      return (
         <div>
            <h3><i>Refer to the player's character sheet for character stats.</i></h3>
         </div>
      );

   if (props.monster) {
      return (
         <div>
            <h3>{props.monster.name}</h3>
            <p><strong>Actions</strong></p>
            {props.monster.actions.map(action => (
               <div>
                  <hr></hr>
                  <p>Name: {action.name}</p>
                  <p>Description: {action.desc}</p>
               </div>
            ))}
            {displaySpecialAbilities(props)}
         </div>
      );

   }

}

export default StatDisplay;

function displaySpecialAbilities(props) {
   if (props.monster.special_abilities) {
      return (
         <div>
            <h3>Special Abilities</h3>
            {props.monster.special_abilities.map(ability => (
               <div>
                  <hr></hr>
                  <SpecialAbility
                     name={ability.name}
                     ability={ability.desc}
                  />
               </div>
            ))}
         </div>
      );
   }
}
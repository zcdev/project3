import React from "react";
import SpecialAbility from "./SpecialAbility";

function MonsterDisplay(props) {

   if (props.monster) {

      if (props.monster.special_abilities) {
         return (
            <div>
               <h1>{props.monster.name}</h1>
               <hr></hr>
               <br></br>
               <h3>Actions</h3>
               {props.monster.actions.map(action => (
                  <div>
                     <hr></hr>
                     <p><strong>Name:</strong> {action.name}</p>
                     <p><strong>Description:</strong> {action.desc}</p>
                  </div>
               ))}
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
         </div>
      );
   }

   return (
      <div>
         <h1>Select Monsters or Spells</h1>
      </div>
   );
}

export default MonsterDisplay;
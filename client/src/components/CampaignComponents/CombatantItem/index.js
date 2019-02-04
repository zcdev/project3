import React from "react";

function CombatantItem(props) {
   
   if (props.combatant.combatantType === "monster") {
      return (
         <div>
            {props.combatant.name}
         </div>
      );
   }

   else if (props.combatant.combatantType === "character") {
      return (
         <div>
            <p>Name: {props.combatant.name}</p>
            <p>Initiative Bonus: {props.combatant.initiativeBonus}</p>
         </div>
      );
   }
}

export default CombatantItem;
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
            {props.combatant.name}
         </div>
      );
   }
}

export default CombatantItem;
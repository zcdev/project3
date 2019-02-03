import React from "react";

function CombatantItem(props) {
   
   if (props.combatant.combatantType === "monster") {
      return (
         <div>
            monster!
         </div>
      );
   }
}

export default CombatantItem;
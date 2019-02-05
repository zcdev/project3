import React from "react";

function InitiativeButtons (props) {
   
   if (props.inCombat === false) {
      return (
         <div>
            <button className="btn btn-danger" onClick={() => props.clearCombatants()}>Clear Combatants</button>

            <button className="btn btn-danger" onClick={() => props.rollInitiative()}>Roll Initiative</button>
         </div>
      );
   } else {
      return (
         <div>
            <button className="btn btn-danger" onClick={() => props.endCombat()}>End Combat</button>

            <button className="btn btn-danger" onClick={() => props.nextTurn()}>Next Turn</button>
         </div>         
      );
   }
}

export default InitiativeButtons;
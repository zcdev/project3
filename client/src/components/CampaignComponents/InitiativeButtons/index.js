import React from "react";

function InitiativeButtons (props) {
   
   if (props.inCombat === false) {
      return (
         <div>
            <button className="btn btn-danger" onClick={() => props.rollInitiative()}>Roll Initiative</button>
         </div>
      );
   } else {
      return (
         <div>
            <button className="btn btn-danger" onClick={() => console.log("End combat!")}>End Combat</button>

            <button className="btn btn-danger" onClick={() => console.log("Next Turn!")}>Next Turn</button>
         </div>         
      );
   }
}

export default InitiativeButtons;
import React from "react";

function InitiativeButtons (props) {
   return (
      <div>
         <button className="btn btn-danger" onClick={() => props.rollInitiative()}>Roll Initiative</button>
      </div>
   );
}

export default InitiativeButtons;
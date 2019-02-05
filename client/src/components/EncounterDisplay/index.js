import React from "react";

function EncounterDisplay(props) {
   
   if (props.encounter.name && props.encounter.monsters) {
      return (
         <div className="card grey">
            {/* {console.log(props)} */}
            <h4>{props.encounter.name}</h4>
            <hr></hr>
            {props.encounter.monsters.map( (monster, i) => (
               <p key={i}>{monster.name}</p>
            ))}
         </div>
      );
   } else {
      return (
         <div className="card grey">Select an encounter to display or create a new encounter.</div>
      );
   }
}

export default EncounterDisplay;
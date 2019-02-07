import React from "react";

function EncounterListItem(props) {
   return (
      <div
         id={props.encounter._id}
         onClick={() => props.addEncounterToCombatants(props.encounter)}
         className={props.id % 2 === 0 ? "encounter-list-item light" : "encounter-list-item dark"}
      >
         <div className="encounter-name">
            {props.encounter.name}
         </div>
         <hr></hr>
         <ul>            
            {props.encounter.monsters.map( (monster, i) => (
               <li key={i} >{monster.name}</li>
            ))}
         </ul>
      </div>
   );
}

export default EncounterListItem;
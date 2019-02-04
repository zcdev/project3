import React from "react";

function EncounterListItem(props) {
   return (
      <div
         id={props.encounter._id}
         onClick={() => props.addEncounterToCombatants(props.encounter)}
         className={props.id % 2 === 0 ? "encounter-list-item light" : "encounter-list-item dark"}
      >
         <div>
            {props.encounter.name}
         </div>
         <ul>            
            {props.encounter.monsters.map( (monster, i) => (
               <li key={i} >{monster.name}</li>
            ))}
         </ul>
      </div>
   );
}

export default EncounterListItem;
import React from "react";

function EncounterListItem(props) {
   return (
      <div
         id={props.databaseId}
         onClick={() => props.getEncounterInfo("encounter", props.encounter)}
         className={props.id % 2 === 0 ? "light" : "dark"}
      >
         <div>
            {props.name}
         </div>
         <ul>            
            {props.monsters.map( (monster, i) => (
               <li key={i} >{monster.name}</li>
            ))}
         </ul>
      </div>
   );
}

export default EncounterListItem;
import React from "react";

function CharacterListItem(props) {
   return (
      <div
         id={props.character._id}
         // onClick={() => props.getEncounterInfo("character", props.character)}
         className={props.id % 2 === 0 ? "character-list-item light" : "character-list-item dark"}
      >
         <div>
            {props.character.name}
         </div>
         <ul>            
            {props.character.monsters.map( (monster, i) => (
               <li key={i} >{monster.name}</li>
            ))}
         </ul>
      </div>
   );
}

export default CharacterListItem;
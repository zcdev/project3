import React from "react";

function CharacterListItem(props) {
   return (
      <div
         id={props.character._id}
         onClick={() => props.addCharacterToCombatants(props.character)}
         className={props.id % 2 === 0 ? "character-list-item light" : "character-list-item dark"}
      >
         <div>
            <p>Name: {props.character.name}</p>
            <p>Dex Mod: {props.character.dexterity}</p>
         </div>
      </div>
   );
}

export default CharacterListItem;
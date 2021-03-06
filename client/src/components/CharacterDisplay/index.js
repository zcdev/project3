import React from "react";

function CharacterDisplay(props) {
   
   if (props.character.name && props.character.dexterity) {
      return (
         <div className="card grey">
            {/* {console.log(props)} */}
            <h4>{props.character.name}</h4>
            <hr></hr>
            <p>Dex Mod: {props.character.dexterity}</p>
         </div>
      );
   } else {
      return (
         <div className="card grey">Select a character to display or create a new character.</div>
      );
   }
}

export default CharacterDisplay;
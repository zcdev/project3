import React from "react";

function EncounterListItem(props) {
   return (
      <div id={props.databaseId} onClick={() => props.getEncounterInfo("encounter", props.encounter)}>
         {props.name}
      </div>
   );
}

export default EncounterListItem;
import React from "react";
import "./style.css";

function CombatantItem(props) {

   if (props.combatant.combatantType === "monster") {
      return (
         <div className={props.id % 2 === 0 ? "combatant-item light" : "combatant-item dark"}>
            <div className="combatant-name">
               {props.combatant.name}
            </div>
            <div className="combatant-health">
               HP: {props.combatant.hit_points}
               <div className="hp-buttons">
                  <i className="material-icons">
                     keyboard_arrow_up
                  </i>
                  <i className="material-icons">
                     keyboard_arrow_down
                  </i>
               </div>
            </div>
         </div>
      );
   }

   else if (props.combatant.combatantType === "character") {
      return (
         <div className={props.id % 2 === 0 ? "combatant-item light" : "combatant-item dark"}>
            <div className="combatant-name">
               {props.combatant.name}
            </div>
            <div className="combatant-health">
               HP: {props.combatant.hit_points}
               <div className="hp-buttons">
                  <i className="material-icons">
                     keyboard_arrow_up
                  </i>
                  <i className="material-icons">
                     keyboard_arrow_down
                  </i>
               </div>
            </div>
         </div>
      );
   }
}

export default CombatantItem;


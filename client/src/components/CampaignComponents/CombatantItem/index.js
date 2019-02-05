import React from "react";
import "./style.css";

function CombatantItem(props) {

   if (props.combatant.combatantType === "monster") {
      return (
         <div className={props.id % 2 === 0 ? "combatant-item light" : "combatant-item dark"}>
            <div className="combatant-name">
               {props.combatant.name}
            </div>
            <div>test: {getModifier(1)}</div>
            <div className="combatant-health">
               HP: {props.combatant.hit_points}
               <div className="hp-buttons">
                  <i class="material-icons">
                     keyboard_arrow_up
                  </i>
                  <i class="material-icons">
                     keyboard_arrow_down
                  </i>
               </div>
            </div>
         </div>
      );
   }

   else if (props.combatant.combatantType === "character") {
      return (
         <div className="combatant-item">
            {props.combatant.name}
         </div>
      );
   }
}

export default CombatantItem;

function getModifier(abilityScore) {
   
   const check = abilityScore;
   
   switch(true) {
      case (check === 1):
         return -5;
      case (2 <= check <= 3):
         return -4;
      case (4 <= check <= 5):
         return -3;
      case (6 <= check <= 7):
         return -2;
      case (8 <= check <= 9):
         return -1;
      case (10 <= check <= 11):
         return 0;
      case (12 <= check <= 13):
         return 1;
      case (14 <= check <= 15):
         return 2;
      case (16 <= check <= 17):
         return 3;
      case (18 <= check <= 19):
         return 4;
      case (20 <= check <= 21):
         return 5;
      case (22 <= check <= 23):
         return 6;
      case (24 <= check <= 25):
         return 7;
      case (26 <= check <= 27):
         return 8;
      case (28 <= check <= 29):
         return 9;
      case (check === 30):
         return 10;
   }
}
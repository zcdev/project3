import React, { Component } from "react";

class CampaignInfoPanel extends Component {
   state = {

   }

   render() {

      if (this.props.infoPanelStatus === "monster") {
         return (
            <div>
               {this.props.monsterIndex}
            </div>
         );
      } else if (this.props.infoPanelStatus === "encounter") {
         return (
            <div>
               {this.props.monsters.map( (monster, i) => (
                  <p key={i}>{monster.name}</p>
               ))}
            </div>
         );
      } 
      else {
         return (
            <div>
               nothing to display yet
            </div>
         );
      }
   }
}

export default CampaignInfoPanel;
import React, { Component } from "react";

class CampaignInfoPanel extends Component {
   state = {

   }

   render() {
      return (
         <div>
            {this.props.infoPanelStatus}
            {this.props.monsterIndex}
         </div>
      );
   }
}

export default CampaignInfoPanel;
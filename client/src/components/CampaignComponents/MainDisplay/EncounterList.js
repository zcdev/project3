import React, { Component } from "react";
import API from "../../../utils/API";
import EncounterListItem from "./EncounterListItem";

class CampaignEncounters extends Component {
   state = {
      encounters: [],
   }

   componentDidMount() {

      API.getEncountersFromCampaign(this.props.campaignId)
      .then(res => {
         // console.log("ENCOUNTERS: ", res);
         this.setState({
            encounters: res.data
         })
      })
      .catch(err => console.log(err));

   }

   render() {
      return (
         <div id="campaign-encounters">
            <h4>Encounters</h4>
            <div>
               {this.state.encounters.map((encounter, i) => (
                  <EncounterListItem
                     encounter={encounter}
                     addEncounterToCombatants={this.props.addEncounterToCombatants}
                     id={i}
                     key={i}
                  />
               ))}
            </div>
         </div>
      );
   }
}

export default CampaignEncounters;
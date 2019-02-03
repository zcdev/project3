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
                     name={encounter.name}
                     databaseId={encounter._id}
                     monsters={encounter.monsters}
                     // index={monster.index}
                     encounter={encounter}
                     getEncounterInfo={this.props.getEncounterInfo}
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
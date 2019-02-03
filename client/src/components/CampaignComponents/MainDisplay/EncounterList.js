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
         // console.log(res);
         this.setState({
            encounters: res.data
         })
      })
      .catch(err => console.log(err));

   }

   render() {
      return (
         <div>
            {this.state.encounters.map((encounter, i) => (
               <EncounterListItem
                  name={encounter.name}
                  databaseId={encounter._id}
                  monsters={encounter.monsters}
                  // index={monster.index}
                  encounter={encounter}
                  getEncounterInfo={this.props.getEncounterInfo}
                  key={i}
               />
            ))}
         </div>
      );
   }
}

export default CampaignEncounters;
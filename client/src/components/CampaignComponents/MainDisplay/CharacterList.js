import React, { Component } from "react";
import API from "../../../utils/API";
import CharacterListItem from "./CharacterListItem";

class CharacterList extends Component {
   state = {
      characters: [],
   }

   componentDidMount() {

      API.getCharactersFromCampaign(this.props.campaignId)
      .then(res => {
         console.log("CHARACTERS: ", res);
         this.setState({
            characters: res.data
         })
      })
      .catch(err => console.log(err));

   }

   render() {
      return (
         <div id="campaign-characters">
            <h4>Characters</h4>
            <div>
               {this.state.characters.map((character, i) => (
                  <CharacterListItem
                     character={character}
                     // getEncounterInfo={this.props.getEncounterInfo}
                     id={i}
                     key={i}
                  />
               ))}
            </div>
         </div>
      );
   }
}

export default CharacterList;
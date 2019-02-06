import React, { Component } from "react";
// import EncounterItem from "../EncounterItem";
// import EncounterNew from "../EncounterNew";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Input } from "../Form";
// import EncounterDisplay from "../EncounterDisplay";
// import monsters from "../../dnd-data/monsters.json";
import API from "../../utils/API";
import CharacterItem from "../CharacterItem";
import CharacterDisplay from "../CharacterDisplay";

class SetupCharacters extends Component {
  state = {
    characters: [],
    newCharacter: 0,
    displayItem: {},
    show: false,
    characterName: ""
  };

  componentDidMount = () => {
    API.getCharactersFromCampaign(this.props.campaignId)
      .then(res => {
        // console.log(res)
        this.setState({
            characters: res.data
        })
      })

/*       const newCharacter = {
        name: "CharacterTwo",
        initiativeBonus: 2
     }

     API.addCharacterToCampaign(this.props.campaignId, newCharacter)
        .then(res => console.log(res))
        .catch(err => console.log(err)); */
  };
  

  handleDisplay = id => {

    // console.log(id);
    // console.log("ENCOUNTERS: ", this.state.encounters);

    this.setState({
      displayItem: this.state.characters.find(character => character._id === id)
    });

    // console.log(this.state.displayItem);
  };

  handleClose = () => {
    this.setState({ show: false });
  };

  handleShow = () => {
    this.setState({ show: true });
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    const newCharacter = {
      name: this.state.characterName,
      initiativeBonus: this.state.newCharacter
    }

    API.addCharacterToCampaign(this.props.campaignId, newCharacter)
      .then(res => {
        // console.log(res)
        API.getCharactersFromCampaign(this.props.campaignId)
          .then(res => {
            // console.log(res)
            this.setState({
              characters: res.data
            })
          })
      })
      .catch(err => console.log(err));
  };

/*   addMonsterToEncounter = monsterId => {

    const alteredEncounter = this.state.newEncounter;
    alteredEncounter.push(monsters[monsterId - 1])

    console.log("ALTERED ENCOUNTER: ", alteredEncounter);

    this.setState({
      newEncounter: alteredEncounter
    })
  } */

  render() {
    return (
      <div id="wrapper">
        <div id="cta">
          {this.state.characters.map( (character, i) => (
            <CharacterItem
              id={character._id}
              // key={encounter.id}
              name={character.name}
              // image={character.image}
              handleDisplay={this.handleDisplay}
              key={i}
            />
          ))}
            <Button variant="primary" onClick={this.handleShow}>New</Button>
        </div>
        <div id="render">
          <CharacterDisplay
            character={this.state.displayItem}
          />
          <div>
            <Modal show={this.state.show} onHide={this.handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>New Character</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div>
                  <form className="form">
                  <label>Character Name:</label>
                    <Input className="form-control"
                      value={this.state.characterName}
                      name="characterName"
                      onChange={this.handleInputChange}
                      type="text"
                      placeholder="Character Name"
                    />
                    <label>Dex Mod:</label>
                    <Input className="form-control"
                      value={this.state.newCharacter}
                      name="newCharacter"
                      onChange={this.handleInputChange}
                      type="number"
                      placeholder="Character Number"
                    />
                    <Button onClick={this.handleFormSubmit}>Submit</Button>
                  </form>
                  <div className="row">
{/*                     <div className="col-6" id="monster-list">
                      <EncounterMonsterList addMonsterToEncounter={this.addMonsterToEncounter} />
                    </div>
                    <div className="col-6" id="selected-monsters">
                      Encounter Monsters
                       {this.state.newEncounter.map((monster, i) => (
                        <SelectedMonster
                          monster={monster}
                          key={i}
                        />
                      ))}
                    </div> */}
                  </div>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={this.handleClose}>Close</Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </div>
    );
  }
}

export default SetupCharacters;

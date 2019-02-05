import React, { Component } from "react";
import EncounterItem from "../EncounterItem";
// import EncounterNew from "../EncounterNew";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Input } from "../Form";
import EncounterMonsterList from "../SetupEncounters/EncounterMonsterList";
import SelectedMonster from "../SetupEncounters/SelectedMonster";
import EncounterDisplay from "../EncounterDisplay";
import monsters from "../../dnd-data/monsters.json";
import API from "../../utils/API";

class SetupEncounters extends Component {
  state = {
    encounters: [],
    newEncounter: [],
    displayItem: {},
    show: false,
    encounterName: ""
  };

  componentDidMount = () => {
    API.getEncountersFromCampaign(this.props.campaignId)
      .then(res => {
        // console.log(res)
        this.setState({
          encounters: res.data
        })
      })
  };

  handleDisplay = id => {

    // console.log(id);
    // console.log("ENCOUNTERS: ", this.state.encounters);

    this.setState({
      displayItem: this.state.encounters.find(encounter => encounter._id === id)
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

    const newEncounter = {
      name: this.state.encounterName,
      monsters: this.state.newEncounter
    }

    API.addEncounterToCampaign(this.props.campaignId, newEncounter)
      .then(res => {
        // console.log(res)
        API.getEncountersFromCampaign(this.props.campaignId)
          .then(res => {
            // console.log(res)
            this.setState({
              encounters: res.data
            })
          })
      })
      .catch(err => console.log(err));
  };

  addMonsterToEncounter = monsterId => {

    const alteredEncounter = this.state.newEncounter;
    alteredEncounter.push(monsters[monsterId - 1])

    console.log("ALTERED ENCOUNTER: ", alteredEncounter);

    this.setState({
      newEncounter: alteredEncounter
    })
  }

  render() {
    return (
      <div>
        <div id="cta">
          {this.state.encounters.map( (encounter, i) => (
            <EncounterItem
              id={encounter._id}
              // key={encounter.id}
              name={encounter.name}
              // image={encounter.image}
              handleDisplay={this.handleDisplay}
              key={i}
            />
          ))}
          <Button variant="primary" onClick={this.handleShow}>New</Button>
        </div>
        <div id="render">
          <EncounterDisplay
            encounter={this.state.displayItem}
          />
          <div>
            <Modal show={this.state.show} onHide={this.handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>New Encounter</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div>
                  <div className="row">
                    <div id="block">
                    <div id="monster-list">
                      <EncounterMonsterList addMonsterToEncounter={this.addMonsterToEncounter} />
                    </div>
                    </div>
                    <div id="selected-monsters">
                      <h5>Encounter Monsters:</h5>
                        {this.state.newEncounter.map((monster, i) => (
                        <SelectedMonster
                          monster={monster}
                          key={i}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <form className="form">
                    <label>Encounter Name:</label>
                    <Input className="form-control"
                      value={this.state.firstName}
                      name="encounterName"
                      onChange={this.handleInputChange}
                      type="text"
                      placeholder="Encounter Name"
                    />
                    <Button className="submit-btn" variant="primary" onClick={this.handleFormSubmit}>Submit</Button>
                  </form>
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

export default SetupEncounters;

import React, { Component } from "react";
import EncounterItem from "../EncounterItem";
import EncounterNew from "../EncounterNew";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import API from "../../utils/API";

class SetupEncounters extends Component {
  state = {
    encounters: [],
    displayItem: null,
    show: false,
    newItem: true,
    encounterName: ""
  };


  componentDidMount = () => {
    // Initially campaignId is "". So how do u solve this?
    // > move it to slack
   
    API.getEncountersFromCampaign(this.props.campaignId)
      .then(res => {
        console.log(res)
        this.setState({
          encounters: res.data
        })
      })
};

  handleDisplay = id => {
    this.setState({
      displayItem: this.state.encounters.find(encounter => encounter.id === id)
    });
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
    this.setState({
      encounterName: ""
    });
  };

  render() {
    return (
      <div>
        <div id="cta">
          {this.state.encounters.map(encounter => (
            <EncounterItem
              id={encounter.id}
              key={encounter.id}
              name={encounter.name}
              image={encounter.image}
              handleDisplay={this.handleDisplay}
            />
          ))}
          <Button onClick={this.handleShow}>New</Button>
        </div>
        <div id="render">
          {this.state.displayItem && (
            <EncounterItem
              id={this.state.displayItem.id}
              key={this.state.displayItem.id}
              name={this.state.displayItem.name}
              image={this.state.displayItem.image}
            />
          )}
          {this.state.newItem && (
            <div>
              <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>New Encounter</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <form className="form">
                    <input
                      value={this.state.firstName}
                      name="encounterName"
                      onChange={this.handleInputChange}
                      type="text"
                      placeholder="Encounter Name"
                    />
                    <button onClick={this.handleFormSubmit}>Submit</button>
                  </form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={this.handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={this.handleClose}>
                    Save
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default SetupEncounters;

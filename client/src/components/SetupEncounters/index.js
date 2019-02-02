import React, { Component } from "react";
import EncounterItem from "../EncounterItem";
import EncounterNew from "../EncounterNew";
import encounters from "../../EncountersTempData";

class SetupEncounters extends Component {
  state = {
    encounters,
    displayItem: null
  };

  handleDisplay = id => {
    this.setState({
      displayItem: encounters.find(encounter => encounter.id === id)
    });
  };

  handleNew = () => {
    this.setState({
      newItem: true
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
          <button onClick={this.handleNew}>New</button>
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
              <EncounterNew />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default SetupEncounters;

import React, { Component } from "react";
import EncounterItem from "../EncounterItem";
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
        </div>
      </div>
    );
  }
}

export default SetupEncounters;

import React, { Component } from "react";
import "./style.css";
import EncounterItem from "../EncounterItem";
const encounters = [{id: "1", name: "monster1", image: "😂"}, {id: "2", name: "monster2", image: "😂"}];
class EncounterDisplay extends Component {
    state = {
        encounters
    }
    render() {
        return (
            <div>
            {this.state.encounters.map(encounter => (
                <EncounterItem
                id={encounter.id}
                key={encounter.id}
                name={encounter.name}
                image={encounter.image}
                handleDisplay={this.props.handleDisplay}
                />
            ))}
            </div>
        );
    }
}
  
  export default EncounterDisplay;
import React, { Component } from "react";
import EncounterItem from "../EncounterItem";
import EncounterDisplay from "../EncounterDisplay";
import EncounterNew from "../EncounterNew";

// // Div
//    // Div
//       // EncounterItem components w/ onClick to display (1.)
//       // button with onClick event to display (2.)
//    // Div 
//       // 1.) EncounterDisplay 
// // 2.) EncounterNew component
const encounters = [{id: 1, name: "monster1", image: "😂"}, {id: 2, name: "monster2", image: "😂"}];
class SetupEncounters extends Component {
    
    state = {
        displayItem: false,
        newItem: false,
        isEncountered: false,
        encounters
    };

    handleDisplay(id) {
        this.setState({
            displayItem: true
        });
    }

    handleNew() {
        this.setState({
            newItem: true
        });
    }

    handleDisplay = this.handleDisplay.bind(this);
    handleNew = this.handleNew.bind(this);

    render() {
        if (this.state.encounters.length) {
            this.state.isEncountered = true;
        }
        return (
            <div>
                <div id="cta">
                    {this.state.isEncountered ? (
                        <EncounterDisplay handleDisplay={this.handleDisplay} />
                    ) : (
                        <div>Please start with a new encounter</div>
                    )}
                    <button onClick={this.handleNew}>New</button>
                </div>
                <div id="render">
                    {this.state.displayItem && (
                    <div>
                        <EncounterItem />
                    </div>
                    )}
                    {this.state.newItem && (
                    <div>
                        <EncounterNew />
                    </div>
                    )}
                </div>
            </div>
        )
    }
}

//// The Dungeon Master Set-up
// import React, { Component } from "react";
// import API from "../../utils/API"
// import { Link } from "react-router-dom";
// import "./encounter.css"

// // What we need from the Dungeon master Encounter setup
// //  - Chosen monster list/stats API
// //  the ability to create an encounter and then store it for later use

export default SetupEncounters;
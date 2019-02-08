import React, { Component } from "react";
import spells from "../../../dnd-data/spells.json";
import SpellListItem from "./SpellListItem";
import "./style.css";

class EncyclopediaSpells extends Component {

  state = {
     currentSpell: null,
     searchString: ""
  }

  // printMonsterStats = index => {
  //    console.log(this.state.currentMonster);
  //    this.setState({
  //       currentMonster: monsters[index - 1]
  //    })
  // }

  handleInputChange = event => {
     const { name, value } = event.target

     this.setState({
        [name]: value
     });
  }

  render() {

     const searchSpells = spells.filter(spell => {
        if (spell.name.substring(0, this.state.searchString.length).toLowerCase() === this.state.searchString.toLowerCase()) {
           return true;
        }
        return null
     });

     return (
        <div id="campaign-spells">
           <h4>Spell</h4>
           <div id="spell-search">
              <input
                 className="form-control"
                 value={this.state.searchString}
                 name="searchString"
                 onChange={this.handleInputChange}
                 type="text"
                 placeholder="Search for a spell"
              />
           </div>
           {searchSpells.map((spell, i) => (
              <SpellListItem
                 name={spell.name}
                 index={spell.index}
                 printSpellStats={this.props.printSpellStats}
                 key={i}
              />
           ))}
        </div>
     );
  }
}

export default EncyclopediaSpells;
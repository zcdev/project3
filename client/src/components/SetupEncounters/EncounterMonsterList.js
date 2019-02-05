import React, { Component } from "react";
import monsters from "../../dnd-data/monsters.json";
import EncounterMonsterListItem from "./EncounterMonsterListItem";
import "./style.css";

class EncounterMonsterList extends Component {

   state = {
      currentMonster: null,
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

      const searchMonsters = monsters.filter(monster => {
         if (monster.name.substring(0, this.state.searchString.length).toLowerCase() === this.state.searchString.toLowerCase()) {
            return true;
         }
      });

      return (
         <div id="campaign-monsters">
            <h4>Monsters</h4>
            <div id="monster-search">
               <input
                  className="form-control"
                  value={this.state.searchString}
                  name="searchString"
                  onChange={this.handleInputChange}
                  type="text"
                  placeholder="Search for a monster"
               />
            </div>
            {searchMonsters.map((monster, i) => (
               <EncounterMonsterListItem
                  name={monster.name}
                  index={monster.index}
                  addMonsterToEncounter={this.props.addMonsterToEncounter}
                  key={i}
               />
            ))}
         </div>
      );
   }
}

export default EncounterMonsterList;
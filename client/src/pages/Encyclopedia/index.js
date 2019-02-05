import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MonsterList from "./Monsters/MonsterList";
import MonsterDisplay from "./Monsters/MonsterDisplay";
import SpellList from "./Spells/SpellList";
import SpellDisplay from "./Spells/SpellDisplay";
import monsters from "../../dnd-data/monsters.json";
import spells from "../../dnd-data/spells.json";
import "./style.css";

class Encyclopedia extends Component {
   state = {

   }

   componentDidMount() {


   }
   printMonsterStats = index => {
      console.log(this.state.currentMonster);
      const newMonster = monsters[index - 1];
      newMonster.itemType = "monster";
      this.setState({
        currentMonster: newMonster
      })
    }
    
    printSpellStats = index => {
      console.log(this.state.currentSpell);
      const newSpell = spells[index - 1]
      newSpell.itemType = "spell"
      this.setState({
        currentSpell: newSpell
      })
    }
  


   render() {
      return (
         <Router>
            <div id="encyclopedia">
               <div id="encyclopedia-sidebar">
                  <div id="encyclopdia-nav">
                     <div className="encyclopedia-nav-btn light">
                        <Link to="/monsters">Monsters</Link>
                     </div>
                     <div className="encyclopedia-nav-btn dark">
                        <Link to="/spells">Spells</Link>
                     </div>

                  </div>

                  <div id="encyclopedia-main"> 
                                  
                     <div id="info-display">
                     <Route
                        path="/monsters"
                        component={() => <MonsterList printMonsterStats={this.printMonsterStats} />}
                     />
                      <Route
                        path="/spells"
                        component={() => <SpellList printSpellStats={this.printSpellStats} />}
                     />
                     </div>
                     
                     <div id="encyclopedia-display">
                     <Route
                        path="/encyclopedia"
                        component={() => <div><h2> Select a category, fair traveller.</h2></div>}
                        />
                     <Route
                        path="/monsters"
                        component={() => <MonsterDisplay monster={this.state.currentMonster} />}
                      />
                      <Route
                        path="/spells"
                        component={() =>  <SpellDisplay spell={this.state.currentSpell} />}
                     />
                     </div>
                  </div>
               </div>
            </div>
         </Router>
      );
   }
}

export default Encyclopedia;
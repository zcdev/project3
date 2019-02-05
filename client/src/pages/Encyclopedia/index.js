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
      this.setState({
        currentMonster: monsters[index - 1]
      })
    }
    
    printSpellStats = index => {
      console.log(this.state.currentSpell);
      this.setState({
        currentSpell: spells[index - 1]
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
                     <MonsterDisplay monster={this.state.currentMonster} />
                     <SpellDisplay spell={this.state.currentSpell} />
                     </div>
                  </div>
               </div>
            </div>
         </Router>
      );
   }
}

export default Encyclopedia;
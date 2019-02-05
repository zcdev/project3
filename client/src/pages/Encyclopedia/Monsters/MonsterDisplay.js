import React from "react";
import SpecialAbility from "./SpecialAbility";

function MonsterDisplay(props) {

  if (!props.monster)
    return (
      <div>
        <h1><i>Many monsters creep while the world sleeps.</i></h1>
      </div>
    );

  if (props.monster) {
    return (
      <div>
        <h3>{props.monster.name}</h3>
        <p><strong>Actions</strong></p>
        {props.monster.actions.map(action => (
          <div>
            <hr></hr>
            <p>Name: {action.name}</p>
            <p>Description: {action.desc}</p>
          </div>
        ))}
        {displaySpecialAbilities()}
      </div>
    );
    
  }

  function displaySpecialAbilities() {
  if (props.monster.special_abilities) {
    return (
      <div>
        <h3>Special Abilities</h3>
        {props.monster.special_abilities.map(ability => (
          <div>
            <hr></hr>
            <SpecialAbility
              name={ability.name}
              ability={ability.desc}
            />
          </div>
        ))}
      </div>
    );
  }
}

}



export default MonsterDisplay;
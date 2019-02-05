import React from "react";

function MonsterDisplay(props) {

  if (!props.monster)
    return (
      <div>
        <h1><i>Take caution: Many monsters creep while the world sleeps.</i></h1>
      </div>
    );

  if (props.monster) {
    return (
      <div>
        {displayActions()}
        {displaySpecialAbilities()}
      </div>
    );

  }

  function displayActions() {
    if (props.monster.actions) {
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
        </div>
      )
    }
  }

    function displaySpecialAbilities() {
      if (props.monster.special_abilities) {
        return (
          <div>
            <h3>Special Abilities</h3>
            {props.monster.special_abilities.map(ability => (
              <div>
                <hr></hr>
                <p><strong>Name: </strong>{ability.name}</p>
                <p><strong>Description: </strong>{ability.desc}</p>

              </div>
            ))}
          </div>
        );
      }
    }

  }



  export default MonsterDisplay;
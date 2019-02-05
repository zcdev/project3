import React from "react";

function MonsterDisplay(props) {

  const mon = props.monster

  if (!mon)
    return (
      <div>
        <h1><i>Take caution: Many monsters creep while the world sleeps.</i></h1>
      </div>
    );

  if (mon) {
    return (
      <div>
        {nameInfo()}
        {armorHP()}
        {table()}
        {skills()}
        {specialAbilities()}
        {actions()}
        {legendaryActions()}
      </div>
    );
  }

  //1 NAME
  // size - type, subtype , alignment

  function nameInfo() {
    if (mon) {
      return (
        <div>
          <h1>{mon.name}</h1>
          <p><i>{mon.size} {mon.type}, {mon.alignment}</i></p>
          <hr></hr>
        </div>
      )
    }
  }
  //========

  // armor_class (& Type ???)
  // hit_points & hit_dice    
  // speed


  function armorHP() {
    if (mon) {
      return (
        <div>
          <p><strong>Armor Class:</strong> {mon.armor_class}</p>
          <p><strong>Hit Points:</strong> {mon.hit_points} ({mon.hit_dice})</p>
          <p><strong>Speed:</strong> {mon.hit_points}</p>
          <hr></hr>
        </div>
      )
    }
  }

  //========
  //TABLE
  //strength       dexterity     constitution
  //save throw     save throw    save throw
  //intelligence   wisdom        charisma
  //save throw     save throw    save throw

  function table() {
    if (mon) {
      return (
        <div>
          <tr>
            <td >STR {mon.strength}</td>
            <td >DEX {mon.dexterity}</td>
            <td >CON {mon.constitution}</td>
          </tr>
          <tr>
            <td >INT {mon.intelligence}</td>
            <td >WIS {mon.wisdom}</td>
            <td >CHA {mon.charisma}</td>
          </tr>
          <hr></hr>
        </div>
      )
    }
  }

  //========

  // Skills perception, stealth
  //damage_vulnerabilities
  //damage_resistance
  //damage_immunities
  //condition_immunities
  //senses
  //languages
  //challenge_rating (and XP calculation)

  function skills (){
    if (mon.history || mon.perception || mon.stealth) {
      return (
        <div>
      <p>Skills: History {mon.history} Perception {mon.perception} Stealth {mon.stealth}</p>
      </div>
      )
    }

  }

  // if(props.VALUE === ""){
  //   //do nothing
  // }

  //========

  //special abilities

  function specialAbilities() {
    if (mon.special_abilities) {
      return (
        <div>
          <h2>Special Abilities</h2>
          {mon.special_abilities.map(ability => (
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

  //========

  //ACTIONS
  //actions

  function actions() {
    if (mon.actions) {
      return (
        <div>
          <h2><strong>Actions</strong></h2>
          {mon.actions.map(action => (
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


  //========

  //Legendary Actions
  //legendary_actions

  function legendaryActions() {
    if (mon.legendary_actions) {
      return (
        <div>
          <h2><strong>Legendary Actions</strong></h2>
          {mon.legendary_actions.map(action => (
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

  //

}




  export default MonsterDisplay;
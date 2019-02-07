import React from "react";

function MonsterDisplay(props) {

  const mon = props.monster

  if (!mon)
    return (
      <div>
        <h1><em>Take caution: Many monsters creep while the world sleeps.</em></h1>
      </div>
    );

  if (mon) {
    return (
      <div>
        {nameInfo()}
        {armorHP()}
        {table()}
        {saveThrows()}
        {skills()}
        {senseLanguageChallenge()}
        {languages()}
        {specialAbilities()}
        {actions()}
        {legendaryActions()}
      </div>
    );
  }

  //1 NAME
  // size - type, alignment
  // TO ADD subtype

  function nameInfo() {
    if (mon) {
      return (
        <div>
          <h1><strong>{mon.name}</strong></h1>
          <p><em>{mon.size} {mon.type}, {mon.alignment}</em></p>
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
            <td > STR {mon.strength} </td>
            <td > DEX {mon.dexterity} </td>
            <td > CON {mon.constitution} </td>
          </tr>
          <tr>
            <td > INT {mon.intelligence} </td>
            <td > WIS {mon.wisdom} </td>
            <td > CHA {mon.charisma} </td>
          </tr>
          <hr></hr>
        </div>
      )
    }
  }

  //========
 
  // Saving Throes

  function saveThrows() {
    const throwTypes = ["strength_save", "dexterity_save", "constitution_save", "intelligence_save", "wisdom_save", "charisma_save"]

    let throwString = ""

    for (let i = 0; i < throwTypes.length; i++) {
      if (mon[throwTypes[i]]) {
        throwString += throwTypes[i].charAt(0).toUpperCase() + 
        throwTypes[i].substring(1).replace("_save", "") + 
        " +" + 
        mon[throwTypes[i]] + 
        ",  "
      }
    }
    
    throwString = throwString.substring(0, (throwString.length-3));

    if (throwString) {
      return (
        <div>
          <p><strong>Saving Throws:</strong> <em>{throwString}</em></p>
        </div>
      )
    }

  }


  // Skills 
  
  function skills() {

    const monsterSkills = ["acrobatics", "arcana", "athletics", "deception", "history", "insight", "intimidation", "investigation", "medicine", "nature", "perception", "performance", "persuasion", "religion", "stealth", "survival"]

    let skillString = ""

    for (let i = 0; i < monsterSkills.length; i++) {
      if (mon[monsterSkills[i]]) {
        skillString += monsterSkills[i].charAt(0).toUpperCase() + 
        monsterSkills[i].substring(1) + 
        " +" + 
        mon[monsterSkills[i]] + 
        ",  "
      }
    }
    skillString = skillString.substring(0, skillString.length - 3)

    if (skillString) {
      return (
        <div>
          <p><strong>Skills:</strong> <em>{skillString}</em></p>
        </div>
      )
    }
  }

  //senses
  function senseLanguageChallenge(){
    let challengeRatingXP ={
      .125:25,
      .25:50,
      .5:100,
      1:200,
      2:450,
      3:700,
      4:1100,
      5: 1800,
      6: 2300,
      7: 2900,
      8: 3900,
      9: 5000,
      10: 5900,
      11: 7200,
      12: 8400,
      13: 10000,
      14: 11500,
      15: 13000,
      16: 15000,
      17: 18000,
      18: 20000,
      19: 22000,
      20: 25000,
      21: 33000,
      22: 41000,
      23: 50000,
      24: 62000,
      30: 155000,
    }

  if (mon.senses) {
    return (
      <div>
        <p><strong>Senses:</strong> <em>{mon.senses}</em></p>
        <p><strong>Languages:</strong> <em>{mon.languages}</em></p>
        <p><strong>Challenge:</strong> <em>{mon.challenge_rating} ({challengeRatingXP[mon.challenge_rating]} XP) </em></p>
      </div>
    )
  }
}

  //languages
  function languages (){
    if (mon.languages) {
      return (
        <div>
          
        </div>
      )
    }
  }

//challenge_rating (and XP calculation)
function challenge() {

}

  //damage_vulnerabilities
  //damage_resistance
  //damage_immunities
  //condition_immunities

  //challenge_rating (and XP calculation)



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
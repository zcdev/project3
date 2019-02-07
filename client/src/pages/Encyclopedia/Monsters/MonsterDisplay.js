import React from "react";

const abilityScoreModifier = {
  1: "-5",
  2: "-4",
  3: "-4",
  4: "-3",
  5: "-3",
  6: "-2",
  7: "-2",
  8: "-1",
  9: "-1",
  10: "0",
  11: "0",
  12: "+1",
  13: "+1",
  14: "+2",
  15: "+2",
  16: "+3",
  17: "+3",
  18: "+4",
  19: "+4",
  20: "+5",
  21: "+5",
  22: "+6",
  23: "+6",
  24: "+7",
  25: "+7",
  26: "+8",
  27: "+8",
  28: "+9",
  29: "+9",
  30: "+10"
}

function MonsterDisplay(props) {

  const mon = props.monster

  if (!mon)
    return (
      <div>
        <h1 id="monster-name"><em>Take caution: Many monsters creep while the world sleeps.</em></h1>
      </div>
    );

  if (mon) {
    return (
      <div>
        {nameInfoArmorHP()}
        {table()}
        {saveThrows()}
        {skills()}
        {senseLanguageChallenge()}
        {mapDisplay("Special Abilities", mon.special_abilities)}
        {mapDisplay("Actions", mon.actions)}
        {mapDisplay("Legendary Actions", mon.legendary_actions)}
      </div>
    );
  }

  //1 NAME
  // size - type, alignment
    //========

  // armor_class (& Type ???)
  // hit_points & hit_dice    
  // speed


  function nameInfoArmorHP() {
    if (mon) {

        let subTypeString = ""
      if(mon.subtype)
      {subTypeString = " (" + mon.subtype + ")"}

      return (

        <div>
          <h1 id="monsterName"><strong>{mon.name}</strong></h1>
          <p id="sizeTypeAlign"><em>{mon.size} {mon.type + subTypeString}, {mon.alignment}</em></p>
          <hr></hr>
          <p id="battleStats"><strong>Armor Class:</strong> {mon.armor_class}</p>
          <p id="battleStats"><strong>Hit Points:</strong> {mon.hit_points + "  "} 
          ({mon.hit_dice + 
          " + " +
            abilityScoreModifier[mon.constitution] * mon.hit_dice.split("d", 1)})
            </p>
            <p id="battleStats"><strong>Speed:</strong> {mon.speed}</p>
          <hr></hr>
        </div>
      )
    }
  }

  //========
  //TABLE
  //strength       dexterity     constitution
  //intelligence   wisdom        charisma

  function table() {
   
    if (mon) {
      return (
        <div>
          <tr>
            <td> STR {mon.strength + "  "} 
            ({abilityScoreModifier[mon.strength]})  
            </td>
            <td> DEX {mon.dexterity + "  "} 
            ({abilityScoreModifier[mon.dexterity]})
            </td>
            <td> CON {mon.constitution + "  "} 
            ({abilityScoreModifier[mon.constitution]})
            </td>
          </tr>
          <tr>
            <td> INT {mon.intelligence + "  "} 
            ({abilityScoreModifier[mon.wisdom]})
            </td>
            <td> WIS {mon.wisdom + "  "} 
            ({abilityScoreModifier[mon.wisdom]})
            </td>
            <td> CHA {mon.charisma + "  "} 
            ({abilityScoreModifier[mon.charisma]})
            </td>
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

  throwString = throwString.substring(0, (throwString.length - 3));

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
function senseLanguageChallenge() {
  const challengeRatingXP = {
    .125: 25,
    .25: 50,
    .5: 100,
    1: 200,
    2: 450,
    3: 700,
    4: 1100,
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

//========

function mapDisplay(titleString, jsonLocation){
  if(jsonLocation) {
    return(
<div>
        <h2><strong>{titleString}</strong></h2>
        {jsonLocation.map(location => (
          <div>
            <hr></hr>
            <p><strong>{location.name + ": "}</strong></p>
            <p><em>{location.desc}</em></p>
          </div>
        ))}
      </div>
    )
  }
}


//end of MonsterDisplay function
}

export default MonsterDisplay;
'use strict'
const Dicebag = require('smecky-dicebag')

module.exports = () => {
  let roll

  roll = (roll_log) => {
    let table_roll

    table_roll = Dicebag.roll(100, 1, { verbose: true })
    roll_log.push({ dice: '1d100', rolls: table_roll.roll_log })

    if (table_roll.sum < 6) {
      return 'magicitems?name=Defender'
    } else if (table_roll.sum < 11) {
      return 'magicitems?name=Hammer of Thunderbolts'
    } else if (table_roll.sum < 16) {
      return 'magicitems?name=Luck Blade'
    } else if (table_roll.sum < 21) {
      return 'magicitems?name=Sword of Answering'
    } else if (table_roll.sum < 24) {
      return 'magicitems?name=Holy Avenger'
    } else if (table_roll.sum < 27) {
      return 'magicitems?name=Ring of Djinni Summoning'
    } else if (table_roll.sum < 30) {
      return 'magicitems?name=Ring of Invisibility'
    } else if (table_roll.sum < 33) {
      return 'magicitems?name=Ring of Spell Turning'
    } else if (table_roll.sum < 36) {
      return 'magicitems?name=Rod of Lordly Might'
    } else if (table_roll.sum < 39) {
      return 'magicitems?name=Staff of the Magi'
    } else if (table_roll.sum < 42) {
      return 'magicitems?name=Vorpal Sword'
    } else if (table_roll.sum < 44) {
      return 'magicitems?name=Belt of Cloud Giant Strength'
    } else if (table_roll.sum < 46) {
      return 'magicitems?name=Armor&modifier=2&sub_type=Breastplate'
    } else if (table_roll.sum < 48) {
      return 'magicitems?name=Armor&modifier=3&sub_type=Chain Mail'
    } else if (table_roll.sum < 50) {
      return 'magicitems?name=Armor&modifier=3&sub_type=Chain Shirt'
    } else if (table_roll.sum < 52) {
      return 'magicitems?name=Cloak of Invisibility'
    } else if (table_roll.sum < 54) {
      /*
       TODO: Roll of legendary crystal ball
       */
    } else if (table_roll.sum < 56) {
      return 'magicitems?name=Armor&modifier=1&sub_type=Half Plate'
    } else if (table_roll.sum < 58) {
      return 'magicitems?name=Iron Flask'
    } else if (table_roll.sum < 60) {
      return 'magicitems?name=Armor&modifier=3&sub_type=Leather'
    } else if (table_roll.sum < 62) {
      return 'magicitems?name=Armor&modifier=1&sub_type=Plate'
    } else if (table_roll.sum < 64) {
      return 'magicitems?name=Robe of the Archmagi'
    } else if (table_roll.sum < 66) {
      return 'magicitems?name=Rod of Resurrection'
    } else if (table_roll.sum < 68) {
      return 'magicitems?name=Armor&modifier=1&sub_type=Scale Mail'
    } else if (table_roll.sum < 70) {
      return 'magicitems?name=Scarab of Protection'
    } else if (table_roll.sum < 72) {
      return 'magicitems?name=Armor&modifier=2&sub_type=Splint'
    } else if (table_roll.sum < 74) {
      return 'magicitems?name=Armor&modifier=2&sub_type=Studded Leather'
    } else if (table_roll.sum < 76) {
      return 'magicitems?name=Well of Many Worlds'
    } else if (table_roll.sum < 77) {
      /*
        TODO: Roll for magic armor
       */
      return 'magicitems?name=Anstruth Harp'
    } else if (table_roll.sum < 78) {
      return 'magicitems?name=Apparatus of Kwalish'
    } else if (table_roll.sum < 79) {
      return 'magicitems?name=Armor of Invulnerability'
    } else if (table_roll.sum < 80) {
      return 'magicitems?name=Belt of Storm Giant Strength'
    } else if (table_roll.sum < 81) {
      return 'magicitems?name=Cubic Gate'
    } else if (table_roll.sum < 82) {
      return 'magicitems?name=Deck of Many Things'
    } else if (table_roll.sum < 83) {
      return 'magicitems?name=Efreeti Chain'
    } else if (table_roll.sum < 84) {
      return 'magicitems?name=Armor of Resistance&sub_type=Half Plate'
    } else if (table_roll.sum < 85) {
      return 'magicitems?name=Iron Horn of Valhalla'
    } else if (table_roll.sum < 86) {
      return 'magicitems?name=Ollamh Harp'
    } else if (table_roll.sum < 87) {
      return 'magicitems?name=Greater Absorption Ioun Stone'
    } else if (table_roll.sum < 88) {
      return 'magicitems?name=Mastery Ioun Stone'
    } else if (table_roll.sum < 89) {
      return 'magicitems?name=Regeneration Ioun Stone'
    } else if (table_roll.sum < 90) {
      return 'magicitems?name=Armor of Etherealness'
    } else if (table_roll.sum < 91) {
      return 'magicitems?name=Armor of Resistance&sub_type=Plate'
    } else if (table_roll.sum < 92) {
      return 'magicitems?name=Ring of Air Elemental Command'
    } else if (table_roll.sum < 93) {
      return 'magicitems?name=Ring of Earth Elemental Command'
    } else if (table_roll.sum < 94) {
      return 'magicitems?name=Ring of Fire Elemental Command'
    } else if (table_roll.sum < 95) {
      return 'magicitems?name=Ring of Three Wishes'
    } else if (table_roll.sum < 96) {
      return 'magicitems?name=Ring of Water Elemental Command'
    } else if (table_roll.sum < 97) {
      return 'magicitems?name=Sphere of Annihilation'
    } else if (table_roll.sum < 98) {
      return 'magicitems?name=Talisman of Pure Good'
    } else if (table_roll.sum < 99) {
      return 'magicitems?name=Talisman of the Sphere'
    } else if (table_roll.sum < 100) {
      return 'magicitems?name=Talisman of Ultimate Evil'
    } else if (table_roll.sum < 101) {
      return 'magicitems?name=Tome of the Stilled Tongue'
    } else {
      // TODO: Handle this error
    }
  }

  return {
    roll: roll
  }
}

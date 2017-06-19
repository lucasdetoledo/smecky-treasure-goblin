'use strict'
const Dicebag = require('smecky-dicebag')

module.exports = () => {
  let roll

  roll = (roll_log) => {
    let table_roll

    table_roll = Dicebag.roll(100, 1, { verbose: true })
    roll_log.push({ dice: '1d100', rolls: table_roll.roll_log })

    if (table_roll.sum < 11) {
      return 'magicitems?name=Weapon&modifier=3'
    } else if (table_roll.sum < 13) {
      return 'magicitems?name=Amulet of the Planes'
    } else if (table_roll.sum < 15) {
      return 'magicitems?name=Carpet of Flying'
    } else if (table_roll.sum < 17) {
      return 'magicitems?name=Crystal Ball'
    } else if (table_roll.sum < 19) {
      return 'magicitems?name=Ring of Regeneration'
    } else if (table_roll.sum < 21) {
      return 'magicitems?name=Ring of Shooting Stars'
    } else if (table_roll.sum < 23) {
      return 'magicitems?name=Ring of Telekinesis'
    } else if (table_roll.sum < 25) {
      return 'magicitems?name=Robe of Scintillating Colors'
    } else if (table_roll.sum < 27) {
      return 'magicitems?name=Robe of Stars'
    } else if (table_roll.sum < 29) {
      return 'magicitems?name=Rod of Absorption'
    } else if (table_roll.sum < 31) {
      return 'magicitems?name=Rod of Alertness'
    } else if (table_roll.sum < 33) {
      return 'magicitems?name=Rod of Security'
    } else if (table_roll.sum < 35) {
      return 'magicitems?name=Rod of the Pact Keeper&modifier=3'
    } else if (table_roll.sum < 37) {
      return 'magicitems?name=Scimitar of Speed'
    } else if (table_roll.sum < 39) {
      return 'magicitems?name=Shield&modifier=3'
    } else if (table_roll.sum < 41) {
      return 'magicitems?name=Staff of Fire'
    } else if (table_roll.sum < 43) {
      return 'magicitems?name=Staff of Frost'
    } else if (table_roll.sum < 45) {
      return 'magicitems?name=Staff of Power'
    } else if (table_roll.sum < 47) {
      return 'magicitems?name=Staff of Striking'
    } else if (table_roll.sum < 49) {
      return 'magicitems?name=Staff of Thunder and Lightning'
    } else if (table_roll.sum < 51) {
      return 'magicitems?name=Sword of Sharpness'
    } else if (table_roll.sum < 53) {
      return 'magicitems?name=Wand of Polymorph'
    } else if (table_roll.sum < 55) {
      return 'magicitems?name=Wand of the War Mage&modifier=3'
    } else if (table_roll.sum < 56) {
      return 'magicitems?name=Adamantine Armor&sub_type=Half Plate'
    } else if (table_roll.sum < 57) {
      return 'magicitems?name=Adamantine Armor&sub_type=Plate'
    } else if (table_roll.sum < 58) {
      return 'magicitems?name=Animated Shield'
    } else if (table_roll.sum < 59) {
      return 'magicitems?name=Belt of Fire Giant Strength'
    } else if (table_roll.sum < 60) {
      /*
        TODO: Roll for Frost or Stone giant strength
       */
      return 'magicitems?name=Belt of Frost Giant Strength'
    } else if (table_roll.sum < 61) {
      return 'magicitems?name=Armor&modifier=1&sub_type=Breastplate'
    } else if (table_roll.sum < 62) {
      return 'magicitems?name=Armor of Resistance&sub_type=Breastplate'
    } else if (table_roll.sum < 63) {
      return 'magicitems?name=Candle of Invocation'
    } else if (table_roll.sum < 64) {
      return 'magicitems?name=Armor&modifier=2&sub_type=Chain Mail'
    } else if (table_roll.sum < 65) {
      return 'magicitems?name=Armor&modifier=2&sub_type=Chain Shirt'
    } else if (table_roll.sum < 66) {
      return 'magicitems?name=Cloak of Arachnida'
    } else if (table_roll.sum < 67) {
      return 'magicitems?name=Dancing Sword'
    } else if (table_roll.sum < 68) {
      return 'magicitems?name=Demon Armor'
    } else if (table_roll.sum < 69) {
      return 'magicitems?name=Dragon Scale Mail'
    } else if (table_roll.sum < 70) {
      return 'magicitems?name=Dwarven Plate'
    } else if (table_roll.sum < 71) {
      return 'magicitems?name=Dwarven Thrower'
    } else if (table_roll.sum < 72) {
      return 'magicitems?name=Efreeti Bottle'
    } else if (table_roll.sum < 73) {
      return 'magicitems?name=Obsidian Steed Figurine of Wondrous Power'
    } else if (table_roll.sum < 74) {
      return 'magicitems?name=Frost Brand'
    } else if (table_roll.sum < 75) {
      return 'magicitems?name=Helm of Brilliance'
    } else if (table_roll.sum < 76) {
      return 'magicitems?name=Bronze Horn of Valhalla'
    } else if (table_roll.sum < 77) {
      return 'magicitems?name=Anstruth Harp'
    } else if (table_roll.sum < 78) {
      return 'magicitems?name=Absorption Ioun Stone'
    } else if (table_roll.sum < 79) {
      return 'magicitems?name=Agility Ioun Stone'
    } else if (table_roll.sum < 80) {
      return 'magicitems?name=Fortitude Ioun Stone'
    } else if (table_roll.sum < 81) {
      return 'magicitems?name=Insight Ioun Stone'
    } else if (table_roll.sum < 82) {
      return 'magicitems?name=Intellect Ioun Stone'
    } else if (table_roll.sum < 83) {
      return 'magicitems?name=Leadership Ioun Stone'
    } else if (table_roll.sum < 84) {
      return 'magicitems?name=Strength Ioun Stone'
    } else if (table_roll.sum < 85) {
      return 'magicitems?name=Armor&modifier=2&sub_type=Leather'
    } else if (table_roll.sum < 86) {
      return 'magicitems?name=Manual of Bodily Health'
    } else if (table_roll.sum < 87) {
      return 'magicitems?name=Manual of Gainful Exercise'
    } else if (table_roll.sum < 88) {
      return 'magicitems?name=Manual of Golems'
    } else if (table_roll.sum < 89) {
      return 'magicitems?name=Manual of Quickness of Action'
    } else if (table_roll.sum < 90) {
      return 'magicitems?name=Mirror of Life Trapping'
    } else if (table_roll.sum < 91) {
      return 'magicitems?name=Nine Lives Stealer'
    } else if (table_roll.sum < 92) {
      return 'magicitems?name=Oathbow'
    } else if (table_roll.sum < 93) {
      return 'magicitems?name=Armor&modifier=2&sub_type=Scale Mail'
    } else if (table_roll.sum < 94) {
      return 'magicitems?name=Spellguard Shield'
    } else if (table_roll.sum < 95) {
      return 'magicitems?name=Armor&modifier=1&sub_type=Splint'
    } else if (table_roll.sum < 96) {
      return 'magicitems?name=Armor of Resistance&sub_type=Splint'
    } else if (table_roll.sum < 97) {
      return 'magicitems?name=Armor&modifier=1&sub_type=Studded Leather'
    } else if (table_roll.sum < 98) {
      return 'magicitems?name=Armor of Resistance&sub_type=Studded Leather'
    } else if (table_roll.sum < 99) {
      return 'magicitems?name=Tome of Clear Thought'
    } else if (table_roll.sum < 100) {
      return 'magicitems?name=Tome of Leadership and Influence'
    } else if (table_roll.sum < 101) {
      return 'magicitems?name=Tome of Understanding'
    } else {
      // TODO: Handle this error
    }
  }

  return {
    roll: roll
  }
}

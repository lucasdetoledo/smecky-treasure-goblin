'use strict'
const Dicebag = require('smecky-dicebag')

module.exports = () => {
  let roll

  roll = (roll_log) => {
    let table_roll
    table_roll = Dicebag.roll(100, 1, { verbose: true })
    roll_log.push(`=> 1d100 (${table_roll.roll_log}) on Table H`)

    if (table_roll < 11) {
      return 'magicitems?name=Weapon&modifier=3'
    } else if (table_roll < 13) {
      return 'magicitems?name=Amulet of the Planes'
    } else if (table_roll < 15) {
      return 'magicitems?name=Carpet of Flying'
    } else if (table_roll < 17) {
      return 'magicitems?name=Crystal Ball'
    } else if (table_roll < 19) {
      return 'magicitems?name=Ring of Regeneration'
    } else if (table_roll < 21) {
      return 'magicitems?name=Ring of Shooting Stars'
    } else if (table_roll < 23) {
      return 'magicitems?name=Ring of Telekinesis'
    } else if (table_roll < 25) {
      return 'magicitems?name=Robe of Scintillating Colors'
    } else if (table_roll < 27) {
      return 'magicitems?name=Robe of Stars'
    } else if (table_roll < 29) {
      return 'magicitems?name=Rod of Absorption'
    } else if (table_roll < 31) {
      return 'magicitems?name=Rod of Alertness'
    } else if (table_roll < 33) {
      return 'magicitems?name=Rod of Security'
    } else if (table_roll < 35) {
      return 'magicitems?name=Rod of the Pact Keeper&modifier=3'
    } else if (table_roll < 37) {
      return 'magicitems?name=Scimitar of Speed'
    } else if (table_roll < 39) {
      return 'magicitems?name=Shield&modifier=3'
    } else if (table_roll < 41) {
      return 'magicitems?name=Staff of Fire'
    } else if (table_roll < 43) {
      return 'magicitems?name=Staff of Frost'
    } else if (table_roll < 45) {
      return 'magicitems?name=Staff of Power'
    } else if (table_roll < 47) {
      return 'magicitems?name=Staff of Striking'
    } else if (table_roll < 49) {
      return 'magicitems?name=Staff of Thunder and Lightning'
    } else if (table_roll < 51) {
      return 'magicitems?name=Sword of Sharpness'
    } else if (table_roll < 53) {
      return 'magicitems?name=Wand of Polymorph'
    } else if (table_roll < 55) {
      return 'magicitems?name=Wand of the War Mage&modifier=3'
    } else if (table_roll < 56) {
      return 'magicitems?name=Adamantine Armor&sub_type=Half Plate'
    } else if (table_roll < 57) {
      return 'magicitems?name=Adamantine Armor&sub_type=Plate'
    } else if (table_roll < 58) {
      return 'magicitems?name=Animated Shield'
    } else if (table_roll < 59) {
      return 'magicitems?name=Belt of Fire Giant Strength'
    } else if (table_roll < 60) {
      /*
        TODO: Roll for Frost or Stone giant strength
       */
      return 'magicitems?name=Belt of Frost Giant Strength'
    } else if (table_roll < 61) {
      return 'magicitems?name=Armor&modifier=1&sub_type=Breastplate'
    } else if (table_roll < 62) {
      return 'magicitems?name=Armor of Resistance&sub_type=Breastplate'
    } else if (table_roll < 63) {
      return 'magicitems?name=Candle of Invocation'
    } else if (table_roll < 64) {
      return 'magicitems?name=Armor&modifier=2&sub_type=Chain Mail'
    } else if (table_roll < 65) {
      return 'magicitems?name=Armor&modifier=2&sub_type=Chain Shirt'
    } else if (table_roll < 66) {
      return 'magicitems?name=Cloak of Arachnida'
    } else if (table_roll < 67) {
      return 'magicitems?name=Dancing Sword'
    } else if (table_roll < 68) {
      return 'magicitems?name=Demon Armor'
    } else if (table_roll < 69) {
      return 'magicitems?name=Dragon Scale Mail'
    } else if (table_roll < 70) {
      return 'magicitems?name=Dwarven Plate'
    } else if (table_roll < 71) {
      return 'magicitems?name=Dwarven Thrower'
    } else if (table_roll < 72) {
      return 'magicitems?name=Efreeti Bottle'
    } else if (table_roll < 73) {
      return 'magicitems?name=Obsidian Steed Figurine of Wondrous Power'
    } else if (table_roll < 74) {
      return 'magicitems?name=Frost Brand'
    } else if (table_roll < 75) {
      return 'magicitems?name=Helm of Brilliance'
    } else if (table_roll < 76) {
      return 'magicitems?name=Bronze Horn of Valhalla'
    } else if (table_roll < 77) {
      return 'magicitems?name=Anstruth Harp'
    } else if (table_roll < 78) {
      return 'magicitems?name=Absorption Ioun Stone'
    } else if (table_roll < 79) {
      return 'magicitems?name=Agility Ioun Stone'
    } else if (table_roll < 80) {
      return 'magicitems?name=Fortitude Ioun Stone'
    } else if (table_roll < 81) {
      return 'magicitems?name=Insight Ioun Stone'
    } else if (table_roll < 82) {
      return 'magicitems?name=Intellect Ioun Stone'
    } else if (table_roll < 83) {
      return 'magicitems?name=Leadership Ioun Stone'
    } else if (table_roll < 84) {
      return 'magicitems?name=Strength Ioun Stone'
    } else if (table_roll < 85) {
      return 'magicitems?name=Armor&modifier=2&sub_type=Leather'
    } else if (table_roll < 86) {
      return 'magicitems?name=Manual of Bodily Health'
    } else if (table_roll < 87) {
      return 'magicitems?name=Manual of Gainful Exercise'
    } else if (table_roll < 88) {
      return 'magicitems?name=Manual of Golems'
    } else if (table_roll < 89) {
      return 'magicitems?name=Manual of Quickness of Action'
    } else if (table_roll < 90) {
      return 'magicitems?name=Mirror of Life Trapping'
    } else if (table_roll < 91) {
      return 'magicitems?name=Nine Lives Stealer'
    } else if (table_roll < 92) {
      return 'magicitems?name=Oathbow'
    } else if (table_roll < 93) {
      return 'magicitems?name=Armor&modifier=2&sub_type=Scale Mail'
    } else if (table_roll < 94) {
      return 'magicitems?name=Spellguard Shield'
    } else if (table_roll < 95) {
      return 'magicitems?name=Armor&modifier=1&sub_type=Splint'
    } else if (table_roll < 96) {
      return 'magicitems?name=Armor of Resistance&sub_type=Splint'
    } else if (table_roll < 97) {
      return 'magicitems?name=Armor&modifier=1&sub_type=Studded Leather'
    } else if (table_roll < 98) {
      return 'magicitems?name=Armor of Resistance&sub_type=Studded Leather'
    } else if (table_roll < 99) {
      return 'magicitems?name=Tome of Clear Thought'
    } else if (table_roll < 100) {
      return 'magicitems?name=Tome of Leadership and Influence'
    } else if (table_roll < 101) {
      return 'magicitems?name=Tome of Understanding'
    } else {
      // TODO: Handle this error
    }
  }

  return {
    roll: roll
  }
}

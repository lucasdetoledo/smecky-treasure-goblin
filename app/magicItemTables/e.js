'use strict'
const Dicebag = require('smecky-dicebag')

module.exports = () => {
  let roll

  roll = (roll_log) => {
    let table_roll

    table_roll = Dicebag.roll(100, 1, { verbose: true })
    roll_log.push({ category: 'magic item', name: 'Table E', dice: '1d100', rolls: table_roll.roll_log })

    if (table_roll.sum < 31) {
      return 'magicitems?name=Spell Scroll&modifier=8'
    } else if (table_roll.sum < 56) {
      return 'magicitems?name=Potion of Storm Giant Strength'
    } else if (table_roll.sum < 71) {
      return 'magicitems?name=Potion of Supreme Healing'
    } else if (table_roll.sum < 86) {
      return 'magicitems?name=Spell Scroll&modifier=9'
    } else if (table_roll.sum < 94) {
      return 'magicitems?name=Universal Solvent'
    } else if (table_roll.sum < 99) {
      return 'magicitems?name=Arrow of Slaying'
    } else if (table_roll.sum < 101) {
      return 'magicitems?name=Sovereign Glue'
    } else {
      // TODO: Handle this error
    }
  }

  return {
    roll: roll
  }
}

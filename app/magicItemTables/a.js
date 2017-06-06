'use strict'
const Dicebag = require('smecky-dicebag')

module.exports = () => {
  let roll

  roll = (roll_log) => {
    let table_roll

    table_roll = Dicebag.roll(100, 1, { verbose: true })
    roll_log.push({ dice: '1d100', rolls: table_roll.roll_log })

    if (table_roll.sum < 51) {
      return 'magicitems?name=Potion of Healing'
    } else if (table_roll.sum < 61) {
      return 'magicitems?name=Spell Scroll&modifier=0'
    } else if (table_roll.sum < 71) {
      return 'magicitems?name=Potion of Climbing'
    } else if (table_roll.sum < 91) {
      return 'magicitems?name=Spell Scroll&modifier=1'
    } else if (table_roll.sum < 95) {
      return 'magicitems?name=Spell Scroll&modifier=2'
    } else if (table_roll.sum < 99) {
      return 'magicitems?name=Potion of Greater Healing'
    } else if (table_roll.sum < 100) {
      return 'magicitems?name=Bag of Holding'
    } else if (table_roll.sum < 101) {
      return 'magicitems?name=Driftglobe'
    } else {
      // TODO: Handle this error
    }
  }

  return {
    roll: roll
  }
}

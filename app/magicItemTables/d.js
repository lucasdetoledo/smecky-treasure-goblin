'use strict'
const Dicebag = require('smecky-dicebag')

module.exports = () => {
  let roll

  roll = (roll_log) => {
    let table_roll
    table_roll = Dicebag.roll(100, 1, { verbose: true })
    roll_log.push(`=> 1d100 (${table_roll.roll_log}) on Table D`)

    if (table_roll.sum < 21) {
      return 'magicitems?name=Potion of Supreme Healing'
    } else if (table_roll.sum < 31) {
      return 'magicitems?name=Potion of Invisibility'
    } else if (table_roll.sum < 41) {
      return 'magicitems?name=Potion of Speed'
    } else if (table_roll.sum < 51) {
      return 'magicitems?name=Spell Scroll&modifier=6'
    } else if (table_roll.sum < 58) {
      return 'magicitems?name=Spell Scroll&modifier=7'
    } else if (table_roll.sum < 63) {
      return 'magicitems?name=Ammunition&modifier=3'
    } else if (table_roll.sum < 68) {
      return 'magicitems?name=Oil of Sharpness'
    } else if (table_roll.sum < 73) {
      return 'magicitems?name=Potion of Flying'
    } else if (table_roll.sum < 78) {
      return 'magicitems?name=Potion of Cloud Giant Strength'
    } else if (table_roll.sum < 83) {
      return 'magicitems?name=Potion of Longevity'
    } else if (table_roll.sum < 88) {
      return 'magicitems?name=Potion of Vitality'
    } else if (table_roll.sum < 93) {
      return 'magicitems?name=Spell Scroll&modifier=8'
    } else if (table_roll.sum < 96) {
      return 'magicitems?name=Horseshoes of a Zephyr'
    } else if (table_roll.sum < 99) {
      return "magicitems?name=Nolzur's Marvelous Pigments"
    } else if (table_roll.sum < 100) {
      return 'magicitems?name=Bag of Devouring'
    } else if (table_roll.sum < 101) {
      return 'magicitems?name=Portable Hole'
    } else {
      // TODO: Handle this error
    }
  }

  return {
    roll: roll
  }
}

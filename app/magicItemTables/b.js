'use strict'
const Dicebag = require('smecky-dicebag')

module.exports = () => {
  let roll

  roll = (roll_log) => {
    let table_roll
    table_roll = Dicebag.roll(100, 1, { verbose: true })
    roll_log.push(`=> 1d100 (${table_roll.roll_log}) on Table B`)

    if (table_roll.sum < 16) {
      return 'magicitems?name=Potion of Greater Healing'
    } else if (table_roll.sum < 23) {
      return 'magicitems?name=Potion of Fire Breath'
    } else if (table_roll.sum < 30) {
      return 'magicitems?name=Potion of Resistance'
    } else if (table_roll.sum < 35) {
      return 'magicitems?name=Ammunition&modifier=1'
    } else if (table_roll.sum < 40) {
      return 'magicitems?name=Potion of Animal Friendship'
    } else if (table_roll.sum < 45) {
      return 'magicitems?name=Potion of Hill Giant Strength'
    } else if (table_roll.sum < 50) {
      return 'magicitems?name=Potion of Growth'
    } else if (table_roll.sum < 55) {
      return 'magicitems?name=Potion of Water Breathing'
    } else if (table_roll.sum < 60) {
      return 'magicitems?name=Spell Scroll&modifier=2'
    } else if (table_roll.sum < 65) {
      return 'magicitems?name=Spell Scroll&modifier=3'
    } else if (table_roll.sum < 68) {
      return 'magicitems?name=Bag of Holding'
    } else if (table_roll.sum < 71) {
      return "magicitems?name=Keoghtom's Ointment"
    } else if (table_roll.sum < 74) {
      return 'magicitems?name=Oil of Slipperiness'
    } else if (table_roll.sum < 76) {
      return 'magicitems?name=Dust of Disappearance'
    } else if (table_roll.sum < 78) {
      return 'magicitems?name=Dust of Dryness'
    } else if (table_roll.sum < 80) {
      return 'magicitems?name=Dust of Sneezing and Choking'
    } else if (table_roll.sum < 82) {
      return 'magicitems?name=Elemental Gem'
    } else if (table_roll.sum < 84) {
      return 'magicitems?name=Philter of Love'
    } else if (table_roll.sum < 85) {
      return 'magicitems?name=Alchemy Jug'
    } else if (table_roll.sum < 86) {
      return 'magicitems?name=Cap of Water Breathing'
    } else if (table_roll.sum < 87) {
      return 'magicitems?name=Cloak of the Manta Ray'
    } else if (table_roll.sum < 88) {
      return 'magicitems?name=Driftglobe'
    } else if (table_roll.sum < 89) {
      return 'magicitems?name=Goggles of Night'
    } else if (table_roll.sum < 90) {
      return 'magicitems?name=Helm of Comprehending Languages'
    } else if (table_roll.sum < 91) {
      return 'magicitems?name=Immovable Rod'
    } else if (table_roll.sum < 92) {
      return 'magicitems?name=Lantern of Revealing'
    } else if (table_roll.sum < 93) {
      return "magicitems?name=Mariner's Armor"
    } else if (table_roll.sum < 94) {
      return 'magicitems?name=Mithral Armor'
    } else if (table_roll.sum < 95) {
      return 'magicitems?name=Potion of Poison'
    } else if (table_roll.sum < 96) {
      return 'magicitems?name=Ring of Swimming'
    } else if (table_roll.sum < 97) {
      return 'magicitems?name=Robe of Useful Items'
    } else if (table_roll.sum < 98) {
      return 'magicitems?name=Rope of Climbing'
    } else if (table_roll.sum < 99) {
      return 'magicitems?name=Saddle of the Cavalier'
    } else if (table_roll.sum < 100) {
      return 'magicitems?name=Wand of Magic Detection'
    } else if (table_roll.sum < 101) {
      return 'magicitems?name=Wand of Secrets'
    } else {
      // TODO: Handle this error
    }
  }

  return {
    roll: roll
  }
}

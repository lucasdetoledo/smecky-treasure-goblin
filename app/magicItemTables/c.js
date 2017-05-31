'use strict'
const Dicebag = require('smecky-dicebag')

module.exports = () => {
  let roll

  roll = (roll_log) => {
    let table_roll
    table_roll = Dicebag.roll(100, 1, { verbose: true })
    roll_log.push(`=> (${table_roll.roll_log}) on Table C`)

    if (table_roll.sum < 16) {
      return 'magicitems?name=Potion of Superior Healing'
    } else if (table_roll.sum < 23) {
      return 'magicitems?name=Spell Scroll&modifier=4'
    } else if (table_roll.sum < 28) {
      return 'magicitems?name=Ammunition&modifier=2'
    } else if (table_roll.sum < 33) {
      return 'magicitems?name=Potion of Clairvoyance'
    } else if (table_roll.sum < 38) {
      return 'magicitems?name=Potion of Diminution'
    } else if (table_roll.sum < 43) {
      return 'magicitems?name=Potion of Gaseous Form'
    } else if (table_roll.sum < 48) {
      return 'magicitems?name=Potion of Frost Giant Strength'
    } else if (table_roll.sum < 53) {
      return 'magicitems?name=Potion of Stone Giant Strength'
    } else if (table_roll.sum < 58) {
      return 'magicitems?name=Potion of Heroism'
    } else if (table_roll.sum < 63) {
      return 'magicitems?name=Potion of Invulnerability'
    } else if (table_roll.sum < 68) {
      return 'magicitems?name=Potion of Mind Reading'
    } else if (table_roll.sum < 73) {
      return 'magicitems?name=Spell Scroll&modifier=5'
    } else if (table_roll.sum < 76) {
      return 'magicitems?name=Elixir of Health'
    } else if (table_roll.sum < 79) {
      return 'magicitems?name=Oil of Etherealness'
    } else if (table_roll.sum < 82) {
      return 'magicitems?name=Potion of Fire Giant Strength'
    } else if (table_roll.sum < 85) {
      /*
        TODO: Fix this
       */
      return "magicitems?name=Quaal's Feather Token"
    } else if (table_roll.sum < 88) {
      return 'magicitems?name=Scroll of Protection'
    } else if (table_roll.sum < 90) {
      return 'magicitems?name=Bag of Beans'
    } else if (table_roll.sum < 92) {
      return 'magicitems?name=Bead of Force'
    } else if (table_roll.sum < 93) {
      return 'magicitems?name=Chime of Opening'
    } else if (table_roll.sum < 94) {
      return 'magicitems?name=Decanter of Endless Water'
    } else if (table_roll.sum < 95) {
      return 'magicitems?name=Eyes of Minute Seeing'
    } else if (table_roll.sum < 96) {
      return 'magicitems?name=Folding Boat'
    } else if (table_roll.sum < 97) {
      return "magicitems?name=Heward's Handy Haversack"
    } else if (table_roll.sum < 98) {
      return 'magicitems?name=Horseshoes of Speed'
    } else if (table_roll.sum < 99) {
      return 'magicitems?name=Necklace of Fireballs'
    } else if (table_roll.sum < 100) {
      return 'magicitems?name=Periapt of Health'
    } else if (table_roll.sum < 101) {
      return 'magicitems?name=Sending Stones'
    } else {
      // TODO: Handle this error
    }
  }

  return {
    roll: roll
  }
}

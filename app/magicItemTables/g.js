'use strict'
const Dicebag = require('smecky-dicebag')

module.exports = () => {
  let roll

  roll = (roll_log) => {
    let table_roll
    table_roll = Dicebag.roll(100, 1, { verbose: true })
    roll_log.push(`=> 1d100 (${table_roll.roll_log}) on Table G`)

    if (table_roll < 12) {
      return 'magicitems?name=Weapon&modifier=2'
    } else if (table_roll < 15) {
      /*
        TODO: Roll 1d8 to decide which figurine of wondrous power gets selected
       */
      return 'magicitems?name=Shield&modifier=1'
    } else if (table_roll < 16) {
      return 'magicitems?name=Adamantine Armor&sub_type=Breastplate'
    } else if (table_roll < 17) {
      return 'magicitems?name=Adamantine Armor&sub_type=Splint'
    } else if (table_roll < 18) {
      return 'magicitems?name=Amulet of Health'
    } else if (table_roll < 19) {
      return 'magicitems?name=Armor of Vulnerability'
    } else if (table_roll < 20) {
      return 'magicitems?name=Arrow-Catching Shield'
    } else if (table_roll < 21) {
      return 'magicitems?name=Belt of Dwarvenkind'
    } else if (table_roll < 22) {
      return 'magicitems?name=Belt of Hill Giant Strength'
    } else if (table_roll < 23) {
      return 'magicitems?name=Berserker Axe'
    } else if (table_roll < 24) {
      return 'magicitems?name=Boots of Levitation'
    } else if (table_roll < 25) {
      return 'magicitems?name=Boots of Speed'
    } else if (table_roll < 26) {
      return 'magicitems?name=Bowl of Commanding Water Elementals'
    } else if (table_roll < 27) {
      return 'magicitems?name=Bracers of Defense'
    } else if (table_roll < 28) {
      return 'magicitems?name=Brazier of Commanding Fire Elementals'
    } else if (table_roll < 29) {
      return 'magicitems?name=Cape of the Mountebank'
    } else if (table_roll < 30) {
      return 'magicitems?name=Censer of Controlling Air Elementals'
    } else if (table_roll < 31) {
      return 'magicitems?name=Armor&modifier=1&sub_type=Chain Mail'
    } else if (table_roll < 32) {
      return 'magicitems?name=Armor of Resistance&sub_type=Chain Mail'
    } else if (table_roll < 33) {
      return 'magicitems?name=Armor&modifier=1&sub_type=Chain Shirt'
    } else if (table_roll < 34) {
      return 'magicitems?name=Armor of Resistance&sub_type=Chain Shirt'
    } else if (table_roll < 35) {
      return 'magicitems?name=Cloak of Displacement'
    } else if (table_roll < 36) {
      return 'magicitems?name=Cloak of the Bat'
    } else if (table_roll < 37) {
      return 'magicitems?name=Cube of Force'
    } else if (table_roll < 38) {
      return "magicitems?name=Daern's Instant Fortress"
    } else if (table_roll < 39) {
      return 'magicitems?name=Dagger of Venom'
    } else if (table_roll < 40) {
      return 'magicitems?name=Dimensional Shackles'
    } else if (table_roll < 41) {
      return 'magicitems?name=Dragon Slayer'
    } else if (table_roll < 42) {
      return 'magicitems?name=Elven Chain'
    } else if (table_roll < 43) {
      return 'magicitems?name=Flame Tongue'
    } else if (table_roll < 44) {
      return 'magicitems?name=Gem of Seeing'
    } else if (table_roll < 45) {
      return 'magicitems?name=Giant Slayer'
    } else if (table_roll < 46) {
      return 'magicitems?name=Glamoured Studded Leather'
    } else if (table_roll < 47) {
      return 'magicitems?name=Helm of Teleportation'
    } else if (table_roll < 48) {
      return 'magicitems?name=Horn of Blasting'
    } else if (table_roll < 49) {
      /*
        TODO: Roll to determine silver or brass horn
       */
      return 'magicitems?name=Horn of Valhalla'
    } else if (table_roll < 50) {
      return 'magicitems?name=Canaith Mandolin'
    } else if (table_roll < 51) {
      return 'magicitems?name=Cli Lyre'
    } else if (table_roll < 52) {
      return 'magicitems?name=Awareness Ioun Stone'
    } else if (table_roll < 53) {
      return 'magicitems?name=Protection Ioun Stone'
    } else if (table_roll < 54) {
      return 'magicitems?name=Reserve Ioun Stone'
    } else if (table_roll < 55) {
      return 'magicitems?name=Sustenance Ioun Stone'
    } else if (table_roll < 56) {
      return 'magicitems?name=Iron Bands of Bilarro'
    } else if (table_roll < 57) {
      return 'magicitems?name=Armor&modifier=1&sub_type=Leather'
    } else if (table_roll < 58) {
      return 'magicitems?name=Armor of Resistance&sub_type=Leather'
    } else if (table_roll < 59) {
      return 'magicitems?name=Mace of Disruption'
    } else if (table_roll < 60) {
      return 'magicitems?name=Mace of Smiting'
    } else if (table_roll < 61) {
      return 'magicitems?name=Mace of Terror'
    } else if (table_roll < 62) {
      return 'magicitems?name=Mantle of Spell Resistance'
    } else if (table_roll < 63) {
      return 'magicitems?name=Necklace of Prayer Beads'
    } else if (table_roll < 64) {
      return 'magicitems?name=Periapt of Proof Against Poison'
    } else if (table_roll < 65) {
      return 'magicitems?name=Ring of Animal Influence'
    } else if (table_roll < 66) {
      return 'magicitems?name=Ring of Evasion'
    } else if (table_roll < 67) {
      return 'magicitems?name=Ring of Feather Falling'
    } else if (table_roll < 68) {
      return 'magicitems?name=Ring of Free Action'
    } else if (table_roll < 69) {
      return 'magicitems?name=Ring of Protection'
    } else if (table_roll < 70) {
      return 'magicitems?name=Ring of Resistance'
    } else if (table_roll < 71) {
      return 'magicitems?name=Ring of Spell Storing'
    } else if (table_roll < 72) {
      return 'magicitems?name=Ring of the Ram'
    } else if (table_roll < 73) {
      return 'magicitems?name=Ring of X-Ray Vision'
    } else if (table_roll < 74) {
      return 'magicitems?name=Robe of Eyes'
    } else if (table_roll < 75) {
      return 'magicitems?name=Rod of Rulership'
    } else if (table_roll < 76) {
      return 'magicitems?name=Rod of the Pact Keeper&modifier=2'
    } else if (table_roll < 77) {
      return 'magicitems?name=Rope of Entanglement'
    } else if (table_roll < 78) {
      return 'magicitems?name=Armor&modifier=1&sub_type=Scale Mail'
    } else if (table_roll < 79) {
      return 'magicitems?name=Armor of Resistance&sub_type=Scale Mail'
    } else if (table_roll < 80) {
      return 'magicitems?name=Shield&modifier=2'
    } else if (table_roll < 81) {
      return 'magicitems?name=Shield of Missile Attraction'
    } else if (table_roll < 82) {
      return 'magicitems?name=Staff of Charming'
    } else if (table_roll < 83) {
      return 'magicitems?name=Staff of Healing'
    } else if (table_roll < 84) {
      return 'magicitems?name=Staff of Swarming Insects'
    } else if (table_roll < 85) {
      return 'magicitems?name=Staff of the Woodlands'
    } else if (table_roll < 86) {
      return 'magicitems?name=Staff of Withering'
    } else if (table_roll < 87) {
      return 'magicitems?name=Stone of Controlling Earth Elementals'
    } else if (table_roll < 88) {
      return 'magicitems?name=Sun Blade'
    } else if (table_roll < 89) {
      return 'magicitems?name=Sword of Life Stealing'
    } else if (table_roll < 90) {
      return 'magicitems?name=Sword of Wounding'
    } else if (table_roll < 91) {
      return 'magicitems?name=Tentacle Rod'
    } else if (table_roll < 92) {
      return 'magicitems?name=Vicious Weapon'
    } else if (table_roll < 93) {
      return 'magicitems?name=Wand of Binding'
    } else if (table_roll < 94) {
      return 'magicitems?name=Wand of Enemy Detection'
    } else if (table_roll < 95) {
      return 'magicitems?name=Wand of Fear'
    } else if (table_roll < 96) {
      return 'magicitems?name=Wand of Fireballs'
    } else if (table_roll < 97) {
      return 'magicitems?name=Wand of Lightning Bolts'
    } else if (table_roll < 98) {
      return 'magicitems?name=Wand of Paralysis'
    } else if (table_roll < 99) {
      return 'magicitems?name=Wand of the War Mage&modifier=2'
    } else if (table_roll < 100) {
      return 'magicitems?name=Wand of Wonder'
    } else if (table_roll < 101) {
      return 'magicitems?name=Wings of Flying'
    } else {
      // TODO: Handle this error
    }
  }

  return {
    roll: roll
  }
}

'use strict'
const Dicebag = require('smecky-dicebag')

module.exports = () => {
  let roll

  roll = (roll_log) => {
    let table_roll

    table_roll = Dicebag.roll(100, 1, { verbose: true })
    roll_log.push({ dice: '1d100', rolls: table_roll.roll_log })

    if (table_roll.sum < 12) {
      return 'magicitems?name=Weapon&modifier=2'
    } else if (table_roll.sum < 15) {
      /*
        TODO: Roll 1d8 to decide which figurine of wondrous power gets selected
       */
      return 'magicitems?name=Shield&modifier=1'
    } else if (table_roll.sum < 16) {
      return 'magicitems?name=Adamantine Armor&sub_type=Breastplate'
    } else if (table_roll.sum < 17) {
      return 'magicitems?name=Adamantine Armor&sub_type=Splint'
    } else if (table_roll.sum < 18) {
      return 'magicitems?name=Amulet of Health'
    } else if (table_roll.sum < 19) {
      return 'magicitems?name=Armor of Vulnerability'
    } else if (table_roll.sum < 20) {
      return 'magicitems?name=Arrow-Catching Shield'
    } else if (table_roll.sum < 21) {
      return 'magicitems?name=Belt of Dwarvenkind'
    } else if (table_roll.sum < 22) {
      return 'magicitems?name=Belt of Hill Giant Strength'
    } else if (table_roll.sum < 23) {
      return 'magicitems?name=Berserker Axe'
    } else if (table_roll.sum < 24) {
      return 'magicitems?name=Boots of Levitation'
    } else if (table_roll.sum < 25) {
      return 'magicitems?name=Boots of Speed'
    } else if (table_roll.sum < 26) {
      return 'magicitems?name=Bowl of Commanding Water Elementals'
    } else if (table_roll.sum < 27) {
      return 'magicitems?name=Bracers of Defense'
    } else if (table_roll.sum < 28) {
      return 'magicitems?name=Brazier of Commanding Fire Elementals'
    } else if (table_roll.sum < 29) {
      return 'magicitems?name=Cape of the Mountebank'
    } else if (table_roll.sum < 30) {
      return 'magicitems?name=Censer of Controlling Air Elementals'
    } else if (table_roll.sum < 31) {
      return 'magicitems?name=Armor&modifier=1&sub_type=Chain Mail'
    } else if (table_roll.sum < 32) {
      return 'magicitems?name=Armor of Resistance&sub_type=Chain Mail'
    } else if (table_roll.sum < 33) {
      return 'magicitems?name=Armor&modifier=1&sub_type=Chain Shirt'
    } else if (table_roll.sum < 34) {
      return 'magicitems?name=Armor of Resistance&sub_type=Chain Shirt'
    } else if (table_roll.sum < 35) {
      return 'magicitems?name=Cloak of Displacement'
    } else if (table_roll.sum < 36) {
      return 'magicitems?name=Cloak of the Bat'
    } else if (table_roll.sum < 37) {
      return 'magicitems?name=Cube of Force'
    } else if (table_roll.sum < 38) {
      return "magicitems?name=Daern's Instant Fortress"
    } else if (table_roll.sum < 39) {
      return 'magicitems?name=Dagger of Venom'
    } else if (table_roll.sum < 40) {
      return 'magicitems?name=Dimensional Shackles'
    } else if (table_roll.sum < 41) {
      return 'magicitems?name=Dragon Slayer'
    } else if (table_roll.sum < 42) {
      return 'magicitems?name=Elven Chain'
    } else if (table_roll.sum < 43) {
      return 'magicitems?name=Flame Tongue'
    } else if (table_roll.sum < 44) {
      return 'magicitems?name=Gem of Seeing'
    } else if (table_roll.sum < 45) {
      return 'magicitems?name=Giant Slayer'
    } else if (table_roll.sum < 46) {
      return 'magicitems?name=Glamoured Studded Leather'
    } else if (table_roll.sum < 47) {
      return 'magicitems?name=Helm of Teleportation'
    } else if (table_roll.sum < 48) {
      return 'magicitems?name=Horn of Blasting'
    } else if (table_roll.sum < 49) {
      /*
        TODO: Roll to determine silver or brass horn
       */
      return 'magicitems?name=Horn of Valhalla'
    } else if (table_roll.sum < 50) {
      return 'magicitems?name=Canaith Mandolin'
    } else if (table_roll.sum < 51) {
      return 'magicitems?name=Cli Lyre'
    } else if (table_roll.sum < 52) {
      return 'magicitems?name=Awareness Ioun Stone'
    } else if (table_roll.sum < 53) {
      return 'magicitems?name=Protection Ioun Stone'
    } else if (table_roll.sum < 54) {
      return 'magicitems?name=Reserve Ioun Stone'
    } else if (table_roll.sum < 55) {
      return 'magicitems?name=Sustenance Ioun Stone'
    } else if (table_roll.sum < 56) {
      return 'magicitems?name=Iron Bands of Bilarro'
    } else if (table_roll.sum < 57) {
      return 'magicitems?name=Armor&modifier=1&sub_type=Leather'
    } else if (table_roll.sum < 58) {
      return 'magicitems?name=Armor of Resistance&sub_type=Leather'
    } else if (table_roll.sum < 59) {
      return 'magicitems?name=Mace of Disruption'
    } else if (table_roll.sum < 60) {
      return 'magicitems?name=Mace of Smiting'
    } else if (table_roll.sum < 61) {
      return 'magicitems?name=Mace of Terror'
    } else if (table_roll.sum < 62) {
      return 'magicitems?name=Mantle of Spell Resistance'
    } else if (table_roll.sum < 63) {
      return 'magicitems?name=Necklace of Prayer Beads'
    } else if (table_roll.sum < 64) {
      return 'magicitems?name=Periapt of Proof Against Poison'
    } else if (table_roll.sum < 65) {
      return 'magicitems?name=Ring of Animal Influence'
    } else if (table_roll.sum < 66) {
      return 'magicitems?name=Ring of Evasion'
    } else if (table_roll.sum < 67) {
      return 'magicitems?name=Ring of Feather Falling'
    } else if (table_roll.sum < 68) {
      return 'magicitems?name=Ring of Free Action'
    } else if (table_roll.sum < 69) {
      return 'magicitems?name=Ring of Protection'
    } else if (table_roll.sum < 70) {
      return 'magicitems?name=Ring of Resistance'
    } else if (table_roll.sum < 71) {
      return 'magicitems?name=Ring of Spell Storing'
    } else if (table_roll.sum < 72) {
      return 'magicitems?name=Ring of the Ram'
    } else if (table_roll.sum < 73) {
      return 'magicitems?name=Ring of X-Ray Vision'
    } else if (table_roll.sum < 74) {
      return 'magicitems?name=Robe of Eyes'
    } else if (table_roll.sum < 75) {
      return 'magicitems?name=Rod of Rulership'
    } else if (table_roll.sum < 76) {
      return 'magicitems?name=Rod of the Pact Keeper&modifier=2'
    } else if (table_roll.sum < 77) {
      return 'magicitems?name=Rope of Entanglement'
    } else if (table_roll.sum < 78) {
      return 'magicitems?name=Armor&modifier=1&sub_type=Scale Mail'
    } else if (table_roll.sum < 79) {
      return 'magicitems?name=Armor of Resistance&sub_type=Scale Mail'
    } else if (table_roll.sum < 80) {
      return 'magicitems?name=Shield&modifier=2'
    } else if (table_roll.sum < 81) {
      return 'magicitems?name=Shield of Missile Attraction'
    } else if (table_roll.sum < 82) {
      return 'magicitems?name=Staff of Charming'
    } else if (table_roll.sum < 83) {
      return 'magicitems?name=Staff of Healing'
    } else if (table_roll.sum < 84) {
      return 'magicitems?name=Staff of Swarming Insects'
    } else if (table_roll.sum < 85) {
      return 'magicitems?name=Staff of the Woodlands'
    } else if (table_roll.sum < 86) {
      return 'magicitems?name=Staff of Withering'
    } else if (table_roll.sum < 87) {
      return 'magicitems?name=Stone of Controlling Earth Elementals'
    } else if (table_roll.sum < 88) {
      return 'magicitems?name=Sun Blade'
    } else if (table_roll.sum < 89) {
      return 'magicitems?name=Sword of Life Stealing'
    } else if (table_roll.sum < 90) {
      return 'magicitems?name=Sword of Wounding'
    } else if (table_roll.sum < 91) {
      return 'magicitems?name=Tentacle Rod'
    } else if (table_roll.sum < 92) {
      return 'magicitems?name=Vicious Weapon'
    } else if (table_roll.sum < 93) {
      return 'magicitems?name=Wand of Binding'
    } else if (table_roll.sum < 94) {
      return 'magicitems?name=Wand of Enemy Detection'
    } else if (table_roll.sum < 95) {
      return 'magicitems?name=Wand of Fear'
    } else if (table_roll.sum < 96) {
      return 'magicitems?name=Wand of Fireballs'
    } else if (table_roll.sum < 97) {
      return 'magicitems?name=Wand of Lightning Bolts'
    } else if (table_roll.sum < 98) {
      return 'magicitems?name=Wand of Paralysis'
    } else if (table_roll.sum < 99) {
      return 'magicitems?name=Wand of the War Mage&modifier=2'
    } else if (table_roll.sum < 100) {
      return 'magicitems?name=Wand of Wonder'
    } else if (table_roll.sum < 101) {
      return 'magicitems?name=Wings of Flying'
    } else {
      // TODO: Handle this error
    }
  }

  return {
    roll: roll
  }
}

'use strict'
const Dicebag = require('smecky-dicebag')

module.exports = () => {
  let roll

  roll = (roll_log) => {
    let table_roll
    table_roll = Dicebag.roll(100, 1, { verbose: true })
    roll_log.push(`=> 1d100 (${table_roll.roll_log}) on Table F`)

    if (table_roll.sum < 16) {
      return 'magicitems?name=Weapon&modifier=1'
    } else if (table_roll.sum < 19) {
      return 'magicitems?name=Shield&modifier=1'
    } else if (table_roll.sum < 22) {
      return 'magicitems?name=Sentinel Shield'
    } else if (table_roll.sum < 24) {
      return 'magicitems?name=Amulet of Proof Against Detection and Location'
    } else if (table_roll.sum < 26) {
      return 'magicitems?name=Boots of Elvenkind'
    } else if (table_roll.sum < 28) {
      return 'magicitems?name=Boots of Striding and Springing'
    } else if (table_roll.sum < 30) {
      return 'magicitems?name=Bracers of Archery'
    } else if (table_roll.sum < 32) {
      return 'magicitems?name=Brooch of Shielding'
    } else if (table_roll.sum < 34) {
      return 'magicitems?name=Broom of Flying'
    } else if (table_roll.sum < 36) {
      return 'magicitems?name=Cloak of Elvenkind'
    } else if (table_roll.sum < 38) {
      return 'magicitems?name=Cloak of Protection'
    } else if (table_roll.sum < 40) {
      return 'magicitems?name=Gauntlets of Ogre Power'
    } else if (table_roll.sum < 42) {
      return 'magicitems?name=Hat of Disguise'
    } else if (table_roll.sum < 44) {
      return 'magicitems?name=Javelin of Lightning'
    } else if (table_roll.sum < 46) {
      return 'magicitems?name=Pearl of Power'
    } else if (table_roll.sum < 48) {
      return 'magicitems?name=Rod of the Pact Keeper&modifier=1'
    } else if (table_roll.sum < 50) {
      return 'magicitems?name=Slippers of Spider Climbing'
    } else if (table_roll.sum < 52) {
      return 'magicitems?name=Staff of the Adder'
    } else if (table_roll.sum < 54) {
      return 'magicitems?name=Staff of the Python'
    } else if (table_roll.sum < 56) {
      return 'magicitems?name=Sword of Vengeance'
    } else if (table_roll.sum < 58) {
      return 'magicitems?name=Trident of Fish Command'
    } else if (table_roll.sum < 60) {
      return 'magicitems?name=Wand of Magic Missiles'
    } else if (table_roll.sum < 62) {
      return 'magicitems?name=Wand of the War Mage&modifier=1'
    } else if (table_roll.sum < 64) {
      return 'magicitems?name=Wand of Web'
    } else if (table_roll.sum < 66) {
      return 'magicitems?name=Weapon of Warning'
    } else if (table_roll.sum < 67) {
      return 'magicitems?name=Adamantine Armor&sub_type=Chain Mail'
    } else if (table_roll.sum < 68) {
      return 'magicitems?name=Adamantine Armor&sub_type=Chain Shirt'
    } else if (table_roll.sum < 69) {
      return 'magicitems?name=Adamantine Armor&sub_type=Scale Mail'
    } else if (table_roll.sum < 70) {
      return 'magicitems?name=Gray Bag of Tricks'
    } else if (table_roll.sum < 71) {
      return 'magicitems?name=Rust Bag of Tricks'
    } else if (table_roll.sum < 72) {
      return 'magicitems?name=Tan Bag of Tricks'
    } else if (table_roll.sum < 73) {
      return 'magicitems?name=Boots of the Winterlands'
    } else if (table_roll.sum < 74) {
      return 'magicitems?name=Circlet of Blasting'
    } else if (table_roll.sum < 75) {
      return 'magicitems?name=Deck of Illusions'
    } else if (table_roll.sum < 76) {
      return 'magicitems?name=Eversmoking Bottle'
    } else if (table_roll.sum < 77) {
      return 'magicitems?name=Eyes of Charming'
    } else if (table_roll.sum < 78) {
      return 'magicitems?name=Eyes of the Eagle'
    } else if (table_roll.sum < 79) {
      return 'magicitems?name=Silver Raven Figurine of Wondrous Power'
    } else if (table_roll.sum < 80) {
      return 'magicitems?name=Gem of Brightness'
    } else if (table_roll.sum < 81) {
      return 'magicitems?name=Gloves of Missile Snaring'
    } else if (table_roll.sum < 82) {
      return 'magicitems?name=Gloves of Swimming and Climbing'
    } else if (table_roll.sum < 83) {
      return 'magicitems?name=Gloves of Thievery'
    } else if (table_roll.sum < 84) {
      return 'magicitems?name=Headband of Intellect'
    } else if (table_roll.sum < 85) {
      return 'magicitems?name=Helm of Telepathy'
    } else if (table_roll.sum < 86) {
      return 'magicitems?name=Doss Lute'
    } else if (table_roll.sum < 87) {
      return 'magicitems?name=Fochlucan Bandore'
    } else if (table_roll.sum < 88) {
      return 'magicitems?name=Mac-Fuimidh Cittern'
    } else if (table_roll.sum < 89) {
      return 'magicitems?name=Medallion of Thoughts'
    } else if (table_roll.sum < 90) {
      return 'magicitems?name=Necklace of Adaptation'
    } else if (table_roll.sum < 91) {
      return 'magicitems?name=Periapt of Wound Closure'
    } else if (table_roll.sum < 92) {
      return 'magicitems?name=Pipes of Haunting'
    } else if (table_roll.sum < 93) {
      return 'magicitems?name=Pipes of the Sewers'
    } else if (table_roll.sum < 94) {
      return 'magicitems?name=Ring of Jumping'
    } else if (table_roll.sum < 95) {
      return 'magicitems?name=Ring of Mind Shielding'
    } else if (table_roll.sum < 96) {
      return 'magicitems?name=Ring of Warmth'
    } else if (table_roll.sum < 97) {
      return 'magicitems?name=Ring of Water Walking'
    } else if (table_roll.sum < 98) {
      return 'magicitems?name=Quiver of Ehlonna'
    } else if (table_roll.sum < 99) {
      return 'magicitems?name=Stone of Good Luck'
    } else if (table_roll.sum < 100) {
      return 'magicitems?name=Wind Fan'
    } else if (table_roll.sum < 101) {
      return 'magicitems?name=Winged Boots'
    } else {
      // TODO: Handle this error
    }
  }

  return {
    roll: roll
  }
}

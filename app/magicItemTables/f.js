'use strict'
const Dicebag = require('smecky-dicebag')

module.exports = () => {
  let roll

  roll = (roll_log) => {
    let table_roll
    table_roll = Dicebag.roll(100, 1, { verbose: true })
    roll_log.push(`=> 1d100 (${table_roll.roll_log}) on Table F`)

    if (table_roll < 16) {
      return 'magicitems?name=Weapon&modifier=1'
    } else if (table_roll < 19) {
      return 'magicitems?name=Shield&modifier=1'
    } else if (table_roll < 22) {
      return 'magicitems?name=Sentinel Shield'
    } else if (table_roll < 24) {
      return 'magicitems?name=Amulet of Proof Against Detection and Location'
    } else if (table_roll < 26) {
      return 'magicitems?name=Boots of Elvenkind'
    } else if (table_roll < 28) {
      return 'magicitems?name=Boots of Striding and Springing'
    } else if (table_roll < 30) {
      return 'magicitems?name=Bracers of Archery'
    } else if (table_roll < 32) {
      return 'magicitems?name=Brooch of Shielding'
    } else if (table_roll < 34) {
      return 'magicitems?name=Broom of Flying'
    } else if (table_roll < 36) {
      return 'magicitems?name=Cloak of Elvenkind'
    } else if (table_roll < 38) {
      return 'magicitems?name=Cloak of Protection'
    } else if (table_roll < 40) {
      return 'magicitems?name=Gauntlets of Ogre Power'
    } else if (table_roll < 42) {
      return 'magicitems?name=Hat of Disguise'
    } else if (table_roll < 44) {
      return 'magicitems?name=Javelin of Lightning'
    } else if (table_roll < 46) {
      return 'magicitems?name=Pearl of Power'
    } else if (table_roll < 48) {
      return 'magicitems?name=Rod of the Pact Keeper&modifier=1'
    } else if (table_roll < 50) {
      return 'magicitems?name=Slippers of Spider Climbing'
    } else if (table_roll < 52) {
      return 'magicitems?name=Staff of the Adder'
    } else if (table_roll < 54) {
      return 'magicitems?name=Staff of the Python'
    } else if (table_roll < 56) {
      return 'magicitems?name=Sword of Vengeance'
    } else if (table_roll < 58) {
      return 'magicitems?name=Trident of Fish Command'
    } else if (table_roll < 60) {
      return 'magicitems?name=Wand of Magic Missiles'
    } else if (table_roll < 62) {
      return 'magicitems?name=Wand of the War Mage&modifier=1'
    } else if (table_roll < 64) {
      return 'magicitems?name=Wand of Web'
    } else if (table_roll < 66) {
      return 'magicitems?name=Weapon of Warning'
    } else if (table_roll < 67) {
      return 'magicitems?name=Adamantine Armor&sub_type=Chain Mail'
    } else if (table_roll < 68) {
      return 'magicitems?name=Adamantine Armor&sub_type=Chain Shirt'
    } else if (table_roll < 69) {
      return 'magicitems?name=Adamantine Armor&sub_type=Scale Mail'
    } else if (table_roll < 70) {
      return 'magicitems?name=Gray Bag of Tricks'
    } else if (table_roll < 71) {
      return 'magicitems?name=Rust Bag of Tricks'
    } else if (table_roll < 72) {
      return 'magicitems?name=Tan Bag of Tricks'
    } else if (table_roll < 73) {
      return 'magicitems?name=Boots of the Winterlands'
    } else if (table_roll < 74) {
      return 'magicitems?name=Circlet of Blasting'
    } else if (table_roll < 75) {
      return 'magicitems?name=Deck of Illusions'
    } else if (table_roll < 76) {
      return 'magicitems?name=Eversmoking Bottle'
    } else if (table_roll < 77) {
      return 'magicitems?name=Eyes of Charming'
    } else if (table_roll < 78) {
      return 'magicitems?name=Eyes of the Eagle'
    } else if (table_roll < 79) {
      return 'magicitems?name=Silver Raven Figurine of Wondrous Power'
    } else if (table_roll < 80) {
      return 'magicitems?name=Gem of Brightness'
    } else if (table_roll < 81) {
      return 'magicitems?name=Gloves of Missile Snaring'
    } else if (table_roll < 82) {
      return 'magicitems?name=Gloves of Swimming and Climbing'
    } else if (table_roll < 83) {
      return 'magicitems?name=Gloves of Thievery'
    } else if (table_roll < 84) {
      return 'magicitems?name=Headband of Intellect'
    } else if (table_roll < 85) {
      return 'magicitems?name=Helm of Telepathy'
    } else if (table_roll < 86) {
      return 'magicitems?name=Doss Lute'
    } else if (table_roll < 87) {
      return 'magicitems?name=Fochlucan Bandore'
    } else if (table_roll < 88) {
      return 'magicitems?name=Mac-Fuimidh Cittern'
    } else if (table_roll < 89) {
      return 'magicitems?name=Medallion of Thoughts'
    } else if (table_roll < 90) {
      return 'magicitems?name=Necklace of Adaptation'
    } else if (table_roll < 91) {
      return 'magicitems?name=Periapt of Wound Closure'
    } else if (table_roll < 92) {
      return 'magicitems?name=Pipes of Haunting'
    } else if (table_roll < 93) {
      return 'magicitems?name=Pipes of the Sewers'
    } else if (table_roll < 94) {
      return 'magicitems?name=Ring of Jumping'
    } else if (table_roll < 95) {
      return 'magicitems?name=Ring of Mind Shielding'
    } else if (table_roll < 96) {
      return 'magicitems?name=Ring of Warmth'
    } else if (table_roll < 97) {
      return 'magicitems?name=Ring of Water Walking'
    } else if (table_roll < 98) {
      return 'magicitems?name=Quiver of Ehlonna'
    } else if (table_roll < 99) {
      return 'magicitems?name=Stone of Good Luck'
    } else if (table_roll < 100) {
      return 'magicitems?name=Wind Fan'
    } else if (table_roll < 101) {
      return 'magicitems?name=Winged Boots'
    } else {
      // TODO: Handle this error
    }
  }

  return {
    roll: roll
  }
}

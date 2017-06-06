'use strict'
const AppRoot = require('app-root-path')
const Promise = require('bluebird')
const HoardHelper = require(`${AppRoot}/app/utils/hoardHelper`)()
const Dicebag = require('smecky-dicebag')

module.exports = () => {
  let rollCoins, rollLoot, roll

  rollCoins = (loot_map, roll_log) => {
    let cp_roll, sp_roll, gp_roll

    cp_roll = Dicebag.d6(6, { verbose: true })
    loot_map.coins.cp = cp_roll.sum * 100
    roll_log.coins.cp = { dice: '6d6', rolls: cp_roll.roll_log }

    sp_roll = Dicebag.d6(3, { verbose: true })
    loot_map.coins.sp = sp_roll.sum * 100
    roll_log.coins.sp = { dice: '3d6', rolls: sp_roll.roll_log }

    gp_roll = Dicebag.d6(2, { verbose: true })
    loot_map.coins.gp = gp_roll.sum * 10
    roll_log.coins.gp = { dice: '2d6', rolls: gp_roll.roll_log }
  }

  rollLoot = (loot_map, roll_log) => {
    let table_roll, gemstone_promise_list, art_object_promise_list, magic_item_promise_list

    table_roll = Dicebag.roll(100, 1, { verbose: true })
    roll_log.hoard_table = { name: 'Treasure Hoard Challenge 0 - 4', dice: '1d100', rolls: table_roll.roll_log }

    gemstone_promise_list = []
    art_object_promise_list = []
    magic_item_promise_list = []

    if (table_roll.sum < 7) {
      // Do nothing
    } else if (table_roll.sum < 17) {
      gemstone_promise_list = HoardHelper.buildGemstonePromises(6, 2, '10', roll_log)
    } else if (table_roll.sum < 27) {
      art_object_promise_list = HoardHelper.buildArtObjectPromises(4, 2, '25', roll_log)
    } else if (table_roll.sum < 37) {
      gemstone_promise_list = HoardHelper.buildGemstonePromises(6, 2, '50', roll_log)
    } else if (table_roll.sum < 45) {
      gemstone_promise_list = HoardHelper.buildGemstonePromises(6, 2, '10', roll_log)
      magic_item_promise_list = HoardHelper.buildMagicItemPromises(6, 1, 'a', roll_log)
    } else if (table_roll.sum < 53) {
      art_object_promise_list = HoardHelper.buildArtObjectPromises(4, 2, '25', roll_log)
      magic_item_promise_list = HoardHelper.buildMagicItemPromises(6, 1, 'a', roll_log)
    } else if (table_roll.sum < 61) {
      gemstone_promise_list = HoardHelper.buildGemstonePromises(6, 2, '50', roll_log)
      magic_item_promise_list = HoardHelper.buildMagicItemPromises(6, 1, 'a', roll_log)
    } else if (table_roll.sum < 66) {
      gemstone_promise_list = HoardHelper.buildGemstonePromises(6, 2, '10', roll_log)
      magic_item_promise_list = HoardHelper.buildMagicItemPromises(4, 1, 'b', roll_log)
    } else if (table_roll.sum < 71) {
      art_object_promise_list = HoardHelper.buildArtObjectPromises(4, 2, '25', roll_log)
      magic_item_promise_list = HoardHelper.buildMagicItemPromises(4, 1, 'b', roll_log)
    } else if (table_roll.sum < 76) {
      gemstone_promise_list = HoardHelper.buildGemstonePromises(6, 2, '50', roll_log)
      magic_item_promise_list = HoardHelper.buildMagicItemPromises(4, 1, 'b', roll_log)
    } else if (table_roll.sum < 79) {
      gemstone_promise_list = HoardHelper.buildGemstonePromises(6, 2, '10', roll_log)
      magic_item_promise_list = HoardHelper.buildMagicItemPromises(4, 1, 'c', roll_log)
    } else if (table_roll.sum < 81) {
      art_object_promise_list = HoardHelper.buildArtObjectPromises(4, 2, '25', roll_log)
      magic_item_promise_list = HoardHelper.buildMagicItemPromises(4, 1, 'c', roll_log)
    } else if (table_roll.sum < 86) {
      gemstone_promise_list = HoardHelper.buildGemstonePromises(6, 2, '50', roll_log)
      magic_item_promise_list = HoardHelper.buildMagicItemPromises(4, 1, 'c', roll_log)
    } else if (table_roll.sum < 93) {
      art_object_promise_list = HoardHelper.buildArtObjectPromises(4, 2, '25', roll_log)
      magic_item_promise_list = HoardHelper.buildMagicItemPromises(4, 1, 'f', roll_log)
    } else if (table_roll.sum < 98) {
      gemstone_promise_list = HoardHelper.buildGemstonePromises(6, 2, '50', roll_log)
      magic_item_promise_list = HoardHelper.buildMagicItemPromises(4, 1, 'f', roll_log)
    } else if (table_roll.sum < 100) {
      art_object_promise_list = HoardHelper.buildArtObjectPromises(4, 2, '25', roll_log)
      magic_item_promise_list = HoardHelper.buildMagicItemPromises(1, 1, 'g', roll_log)
    } else if (table_roll.sum < 101) {
      gemstone_promise_list = HoardHelper.buildGemstonePromises(6, 2, '50', roll_log)
      magic_item_promise_list = HoardHelper.buildMagicItemPromises(1, 1, 'g', roll_log)
    } else {
      throw Error('- hoard04.js : table_roll out of range.')
    }

    return Promise.all([gemstone_promise_list, art_object_promise_list,
      magic_item_promise_list].map(inner_promise => Promise.all(inner_promise)))
      .spread((gemstone_data, art_object_data, magic_item_data) => {
        loot_map.gemstones = gemstone_data
        loot_map.art_objects = art_object_data
        loot_map.magic_items = magic_item_data
      }).catch((e) => {
        console.log(e)
      })
  }

  roll = () => {
    let loot_map, roll_log
    loot_map = {
      coins: {
        cp: null,
        sp: null,
        ep: null,
        gp: null,
        pp: null
      },
      gemstones: [],
      art_objects: [],
      magic_items: []
    }
    roll_log = {
      coins: {
        cp: null,
        sp: null,
        ep: null,
        gp: null,
        pp: null,
      },
      gemstones: null,
      artobjects: null,
      hoard_table: null,
      magic_item_tables: []
    }

    rollCoins(loot_map, roll_log)
    return rollLoot(loot_map, roll_log).then(() => {
      return {
        loot_list: loot_map,
        log: roll_log
      }
    }).catch((e) => {
      console.log(e)
    })
  }

  return {
    roll: roll
  }
}

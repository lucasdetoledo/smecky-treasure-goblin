'use strict'
const AppRoot = require('app-root-path')
const Promise = require('bluebird')
const RequestPromise = require('request-promise')
const MagicItemHelper = require(`${AppRoot}/app/utils/magicItemHelper`)()
const Dicebag = require('smecky-dicebag')
const TableA = require(`${AppRoot}/app/magicItemTables/a`)()
const TableB = require(`${AppRoot}/app/magicItemTables/b`)()
const TableC = require(`${AppRoot}/app/magicItemTables/c`)()
const TableF = require(`${AppRoot}/app/magicItemTables/f`)()
const TableG = require(`${AppRoot}/app/magicItemTables/g`)()

module.exports = () => {
  let rollCoins, rollLoot, roll

  rollCoins = (loot_map, roll_log) => {
    roll_log.push('Rolling Coins')
    let cp_roll, sp_roll, gp_roll
    cp_roll = Dicebag.d6(6, { verbose: true })
    loot_map.coins.cp = cp_roll.sum * 100
    roll_log.push(`=> 6d6 (${cp_roll.roll_log}) * 100 (${loot_map.coins.cp}) CP`)
    sp_roll = Dicebag.d6(3, { verbose: true })
    loot_map.coins.sp = sp_roll.sum * 100
    roll_log.push(`=> 3d6 (${sp_roll.roll_log}) * 100 (${loot_map.coins.sp}) SP`)
    gp_roll = Dicebag.d6(2, { verbose: true })
    loot_map.coins.gp = gp_roll.sum * 10
    roll_log.push(`=> 2d6 (${gp_roll.roll_log}) * 10 (${loot_map.coins.gp}) GP`)
    return
  }

  rollLoot = (loot_map, roll_log) => {
    roll_log.push('Rolling Gem, Art Objects and Magic Items')
    let table_roll, gemstone_promise_list, art_object_promise_list, magic_item_promise_list
    table_roll = Dicebag.roll(100, 1, { verbose: true })
    roll_log.push(`=> 1d100 on Treasure Hoard: Challenge 0-4 (${table_roll.roll_log})`)
    gemstone_promise_list = []
    art_object_promise_list = []
    magic_item_promise_list = []

    if (table_roll.sum < 7) {
      // Do nothing
    } else if (table_roll.sum < 17) {
      let r = Dicebag.d6(2, { verbose: true })
      roll_log.push(`=> 2d6 (${r.roll_log}) 10gp Gemstones`)
      for (let i = 0; i < r.sum; ++i) {
        gemstone_promise_list.push(RequestPromise.get(MagicItemHelper.formatGet('gemstones?value=10')))
      }
    } else if (table_roll.sum < 27) {
      let r = Dicebag.d4(2, { verbose: true })
      roll_log.push(`=> 2d4 (${r.roll_log}) 25gp Art Objects`)
      for (let i = 0; i < r.sum; ++i) {
        art_object_promise_list.push(RequestPromise.get(MagicItemHelper.formatGet('artobjects?value=25')))
      }
    } else if (table_roll.sum < 37) {
      let r = Dicebag.d6(2, { verbose: true })
      roll_log.push(`=> 2d6 (${r.roll_log}) 50gp Gemstones`)
      for (let i = 0; i < r.sum; ++i) {
        gemstone_promise_list.push(RequestPromise.get(MagicItemHelper.formatGet('gemstones?value=50')))
      }
    } else if (table_roll.sum < 45) {
      let r = Dicebag.d6(2, { verbose: true })
      roll_log.push(`=> 2d6 (${r.roll_log}) 10gp Gemstones`)
      for (let i = 0; i < r.sum; ++i) {
        gemstone_promise_list.push(RequestPromise.get(MagicItemHelper.formatGet('gemstones?value=10')))
      }
      r = Dicebag.d6(1, { verbose: true })
      roll_log.push(`=> 1d6 (${r.roll_log}) items from Table A`)
      for (let i = 0; i < r.sum; ++i) {
        magic_item_promise_list.push(RequestPromise.get(MagicItemHelper.formatGet(TableA.roll(roll_log))))
      }
    } else if (table_roll.sum < 53) {
      let r = Dicebag.d4(2, { verbose: true })
      roll_log.push(`=> 2d4 (${r.roll_log}) 25gp Art Objects`)
      for (let i = 0; i < r.sum; ++i) {
        art_object_promise_list.push(RequestPromise.get(MagicItemHelper.formatGet('artobjects?value=25')))
      }
      r = Dicebag.d6(1, { verbose: true })
      roll_log.push(`=> 1d6 (${r.roll_log}) items from Table A`)
      for (let i = 0; i < r.sum; ++i) {
        magic_item_promise_list.push(RequestPromise.get(MagicItemHelper.formatGet(TableA.roll(roll_log))))
      }
    } else if (table_roll.sum < 61) {
      let r = Dicebag.d6(2, { verbose: true })
      roll_log.push(`=> 2d6 (${r.roll_log}) 50gp Gemstones`)
      for (let i = 0; i < r.sum; ++i) {
        gemstone_promise_list.push(RequestPromise.get(MagicItemHelper.formatGet('gemstones?value=50')))
      }
      r = Dicebag.d6(1, { verbose: true })
      roll_log.push(`=> 1d6 (${r.roll_log}) items from Table A`)
      for (let i = 0; i < r.sum; ++i) {
        magic_item_promise_list.push(RequestPromise.get(MagicItemHelper.formatGet(TableA.roll(roll_log))))
      }
    } else if (table_roll.sum < 66) {
      let r = Dicebag.d6(2, { verbose: true })
      roll_log.push(`=> 2d6 ${r.roll_log} 10gp Gemstones`)
      for (let i = 0; i < r.sum; ++i) {
        gemstone_promise_list.push(RequestPromise.get(MagicItemHelper.formatGet('gemstones?value=10')))
      }
      r = Dicebag.d4(1, { verbose: true })
      roll_log.push(`=> 1d4 (${r.roll_log}) items from Table B`)
      for (let i = 0; i < r.sum; ++i) {
        magic_item_promise_list.push(RequestPromise.get(MagicItemHelper.formatGet(TableB.roll(roll_log))))
      }
    } else if (table_roll.sum < 71) {
      let r = Dicebag.d4(2, { verbose: true })
      roll_log.push(`=> 2d4 (${r.roll_log}) 25gp Art Objects`)
      for (let i = 0; i < r.sum; ++i) {
        art_object_promise_list.push(RequestPromise.get(MagicItemHelper.formatGet('artobjects?value=25')))
      }
      r = Dicebag.d4(1, { verbose: true })
      roll_log.push(`=> 1d4 (${r.roll_log}) items from Table B`)
      for (let i = 0; i < r.sum; ++i) {
        magic_item_promise_list.push(RequestPromise.get(MagicItemHelper.formatGet(TableB.roll(roll_log))))
      }
    } else if (table_roll.sum < 76) {
      let r = Dicebag.d6(2, { verbose: true })
      roll_log.push(`=> 2d6 (${r.roll_log}) 50gp Gemstones`)
      for (let i = 0; i < r.sum; ++i) {
        gemstone_promise_list.push(RequestPromise.get(MagicItemHelper.formatGet('gemstones?value=50')))
      }
      r = Dicebag.d4(1, { verbose: true })
      roll_log.push(`=> 1d4 (${r.roll_log}) items from Table B`)
      for (let i = 0; i < r.sum; ++i) {
        magic_item_promise_list.push(RequestPromise.get(MagicItemHelper.formatGet(TableB.roll(roll_log))))
      }
    } else if (table_roll.sum < 79) {
      let r = Dicebag.d6(2, { verbose: true })
      roll_log.push(`=> 2d6 (${r.roll_log}) 10gp Gemstones`)
      for (let i = 0; i < r.sum; ++i) {
        gemstone_promise_list.push(RequestPromise.get(MagicItemHelper.formatGet('gemstones?value=10')))
      }
      r = Dicebag.d4(1, { verbose: true })
      roll_log.push(`=> 1d4 (${r.roll_log}) items from Table C`)
      for (let i = 0; i < r.sum; ++i) {
        magic_item_promise_list.push(RequestPromise.get(MagicItemHelper.formatGet(TableC.roll(roll_log))))
      }
    } else if (table_roll.sum < 81) {
      let r = Dicebag.d4(2, { verbose: true })
      roll_log.push(`=> 2d4 (${r.roll_log}) 25gp Art Objects`)
      for (let i = 0; i < r.sum; ++i) {
        gemstone_promise_list.push(RequestPromise.get(MagicItemHelper.formatGet('artobjects?value=25')))
      }
      r = Dicebag.d4(1, { verbose: true })
      roll_log.push(`=> 1d4 (${r.roll_log}) items from Table C`)
      for (let i = 0; i < r.sum; ++i) {
        magic_item_promise_list.push(RequestPromise.get(MagicItemHelper.formatGet(TableC.roll(roll_log))))
      }
    } else if (table_roll.sum < 86) {
      let r = Dicebag.d6(2, { verbose: true })
      roll_log.push(`=> 2d6 (${r.roll_log}) 50gp Gemstones`)
      for (let i = 0; i < r.sum; ++i) {
        gemstone_promise_list.push(RequestPromise.get(MagicItemHelper.formatGet('gemstones?value=50')))
      }
      r = Dicebag.d4(1, { verbose: true })
      roll_log.push(`=> 1d4 (${r.roll_log}) items from Table C`)
      for (let i = 0; i < r.sum; ++i) {
        magic_item_promise_list.push(RequestPromise.get(MagicItemHelper.formatGet(TableC.roll(roll_log))))
      }
    } else if (table_roll.sum < 93) {
      let r = Dicebag.d4(2, { verbose: true })
      roll_log.push(`=> 2d4 (${r.roll_log}) 25gp Art Objects`)
      for (let i = 0; i < r.sum; ++i) {
        gemstone_promise_list.push(RequestPromise.get(MagicItemHelper.formatGet('artobjects?value=25')))
      }
      r = Dicebag.d4(1, { verbose: true })
      roll_log.push(`=> 1d4 (${r.roll_log}) items from Table F`)
      for (let i = 0; i < r.sum; ++i) {
        magic_item_promise_list.push(RequestPromise.get(MagicItemHelper.formatGet(TableF.roll(roll_log))))
      }
    } else if (table_roll.sum < 98) {
      let r = Dicebag.d6(2, { verbose: true })
      roll_log.push(`=> 2d6 (${r.roll_log}) 50gp Gemstones`)
      for (let i = 0; i < r.sum; ++i) {
        gemstone_promise_list.push(RequestPromise.get(MagicItemHelper.formatGet('gemstones?value=50')))
      }
      r = Dicebag.d4(1, { verbose: true })
      roll_log.push(`=> 1d4 (${r.roll_log}) items from Table F`)
      for (let i = 0; i < r.sum; ++i) {
        magic_item_promise_list.push(RequestPromise.get(MagicItemHelper.formatGet(TableF.roll(roll_log))))
      }
    } else if (table_roll.sum < 100) {
      // roll 2d4 25gp art objects
      // roll once on magic item table g
      let r = Dicebag.d4(2, { verbose: true })
      roll_log.push(`=> 2d4 (${r.roll_log}) 25gp Art Objects`)
      for (let i = 0; i < r.sum; ++i) {
        gemstone_promise_list.push(RequestPromise.get(MagicItemHelper.formatGet('artobjects?value=25')))
      }
      roll_log.push(`=> 1 item from Table G`)
      for (let i = 0; i < Dicebag.roll(1, 1); ++i) {
        magic_item_promise_list.push(RequestPromise.get(MagicItemHelper.formatGet(TableG.roll(roll_log))))
      }
    } else if (table_roll.sum < 101) {
      let r = Dicebag.d6(2, { verbose: true })
      roll_log.push(`=> 2d6 (${r.roll_log}) 50gp Gemstones`)
      for (let i = 0; i < Dicebag.d6(2); ++i) {
        gemstone_promise_list.push(RequestPromise.get(MagicItemHelper.formatGet('gemstones?value=50')))
      }
      roll_log.push(`=> 1 item from Table G`)
      for (let i = 0; i < Dicebag.roll(1, 1); ++i) {
        magic_item_promise_list.push(RequestPromise.get(MagicItemHelper.formatGet(TableG.roll(roll_log))))
      }
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
    roll_log = []

    rollCoins(loot_map, roll_log)
    return rollLoot(loot_map, roll_log).then(() => {
      return {
        loot: loot_map,
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

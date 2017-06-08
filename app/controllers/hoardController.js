'use strict'
const AppRoot = require('app-root-path')
const Logger = require('winston')
const Hoard4 = require(`${AppRoot}/app/lootTables/hoard4`)()
const Hoard10 = require(`${AppRoot}/app/lootTables/hoard10`)()

exports.get = (req, res, next) => {
  Logger.log('info', '+ hoardController.get')
  let hoard

  if (!req.query.level) {
    return res.status(404).json('valid level range must be included')
  }
  switch (req.query.level) {
    case '4':
      hoard = Hoard4
      break
    case '10':
      hoard = Hoard10
      break
    case '16':
      break
    case '17':
      break
  }
  hoard.roll().then((loot_data) => {
    Logger.log('info', '- hoardController.get')
    return res.status(200).json(loot_data)
  }).catch((e) => {
    Logger.log('info', `- hoardController : ${e}`)
    return res.status(500).json('an unexpected error occurred.')
  })
}

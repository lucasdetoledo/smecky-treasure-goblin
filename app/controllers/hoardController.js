'use strict'
const AppRoot = require('app-root-path')
const Logger = require('winston')
const Hoard04 = require(`${AppRoot}/app/lootTables/hoard04`)()

exports.get = (req, res, next) => {
  Logger.log('info', '+ hoardController.get')
  Hoard04.roll().then((loot_data) => {
    Logger.log('info', '- hoardController.get')
    return res.status(200).json(loot_data)
  }).catch((e) => {
    Logger.log('info', `- hoardController : ${e}`)
    return res.status(500).json('an unexpected error occurred.')
  })
}

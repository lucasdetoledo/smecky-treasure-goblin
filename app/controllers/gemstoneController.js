'use strict'
const AppRoot = require('app-root-path')
const Logger = require('winston')
const Validate = require(`${AppRoot}/app/utils/validators/gemstoneControllerValidator`)
const Models = require(`${AppRoot}/app/models`)
const Gemstone = Models.gemstone

exports.get = (req, res, next) => {
  Logger.log('info', '+ gemstoneController.get')
  let validation_errors = Validate.get(req)
  if (validation_errors.length > 0) {
    Logger.log('warn', `- gemstoneController.get : ${validation_errors.toString()}`)
    return res.status(400).json(validation_errors)
  }
  return Gemstone.findAll({
    attributes: ['description', 'value'],
    where: {
      value: req.query.value
    }
  }).then((gemstone_data) => {
    let gemstone = gemstone_data[Math.floor((Math.random() * gemstone_data.length))].dataValues
    Logger.log('info', '- gemController.get')
    return res.status(200).json(gemstone)
  }).catch((error) => {
    Logger.log('error', `- gemstoneController : ${error}`)
    return res.status(500).json('an unexpected error occurred')
  })
}

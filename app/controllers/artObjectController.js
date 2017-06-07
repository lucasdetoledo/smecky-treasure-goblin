'use strict'
const AppRoot = require('app-root-path')
const Logger = require('winston')
const Validate = require(`${AppRoot}/app/utils/validators/artObjectControllerValidator`)
const Models = require(`${AppRoot}/app/models`)
const ArtObject = Models.art_object

exports.get = (req, res, next) => {
  Logger.log('info', '+ artObjectController.get')
  let validation_errors = Validate.get(req)
  if (validation_errors.length > 0) {
    Logger.log('warn', `- artObjectController.get : ${validation_errors.toString()}`)
    return res.status(400).json(validation_errors)
  }
  return ArtObject.findAll({
    attributes: ['description', 'value'],
    where: {
      value: req.query.value
    }
  }).then((art_object_data) => {
    let art_object = art_object_data[Math.floor((Math.random() * art_object_data.length))].dataValues
    Logger.log('info', '- artObjectController.get')
    return res.status(200).json(art_object)
  }).catch((error) => {
    Logger.log('error', `- artObjectController : ${error}`)
    return res.status(500).json('an unexpected error occurred')
  })
}

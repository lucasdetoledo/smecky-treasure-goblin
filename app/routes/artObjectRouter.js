'use strict'
const AppRoot = require('app-root-path')
const Express = require('express')
const Router = Express.Router()
const ArtObjectsController = require(`${AppRoot}/app/controllers/artObjectController`)

Router.get('/', ArtObjectsController.get)

module.exports = Router

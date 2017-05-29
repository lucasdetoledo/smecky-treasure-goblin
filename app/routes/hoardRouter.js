'use strict'
const AppRoot = require('app-root-path')
const Express = require('express')
const Router = Express.Router()
const hoardController = require(`${AppRoot}/app/controllers/hoardController`)

Router.get('/', hoardController.get)

module.exports = Router

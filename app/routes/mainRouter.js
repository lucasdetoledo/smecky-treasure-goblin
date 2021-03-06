'use strict'
const AppRoot = require('app-root-path')
const Express = require('express')
const Router = Express.Router()
const MainController = require(`${AppRoot}/app/controllers/mainController`)

Router.get('/', MainController.home)

module.exports = Router

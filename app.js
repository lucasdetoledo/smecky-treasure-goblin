'use strict'
const AppRoot = require('app-root-path')
const Express = require('express')
const BodyParser = require('body-parser')
const Umzug = require('umzug')
const Models = require(`${AppRoot}/app/models`)
const App = Express()

App.set('views', `${AppRoot}/views`)
App.set('view engine', 'pug')
App.use(BodyParser.json())
App.use(Express.static(`${AppRoot}/public`))

let mainRouter = require(`${AppRoot}/app/routes/mainRouter`)
let hoardRouter = require(`${AppRoot}/app/routes/hoardRouter`)
let gemstoneRouter = require(`${AppRoot}/app/routes/gemstoneRouter`)
let artObjectRouter = require(`${AppRoot}/app/routes/artObjectRouter`)
let magicItemController = require(`${AppRoot}/app/routes/magicItemRouter`)

App.use('/', mainRouter)
App.use('/hoard', hoardRouter)
App.use('/gemstones', gemstoneRouter)
App.use('/artobjects', artObjectRouter)
App.use('/magicitems', magicItemController)

let umzug = new Umzug({
  storage: 'sequelize',

  storageOptions: {
    sequelize: Models.sequelize
  },

  migrations: {
    params: [Models.sequelize.getQueryInterface(), Models.sequelize.constructor],
    path: './db/migrations',
    pattern: /\.js$/
  }

})

umzug.pending().then((migrations) => {
  migrations = migrations.map(function (migration) {
    return migration.file.replace(/\.js$/, '')
  })
  umzug.execute({
    migrations: migrations,
    method: 'up'
  }).then((migrations) => {
    App.listen(process.env.APP_PORT, () => {
      console.log(`Express server listening on port ${process.env.APP_PORT} in ${process.env.NODE_ENV} mode`)
    })
  })
})


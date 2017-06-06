'use strict'
const Gulp = require('gulp')
const Nodemon = require('gulp-nodemon')
const GulpMocha = require('gulp-mocha')
const Env = require('gulp-env')

const jsFiles = ['*.js', 'app/**/*.js']

Gulp.task(`test`, [`set-Env`], () => {
  return Gulp.src(`./tests/**/*.js`)
    .pipe(GulpMocha({
      bail: true
    }))
})

Gulp.task('integrate', () => {
  return Gulp.src('./tests_integration/**/*.js')
    .pipe(GulpMocha({
      bail: true
    }))
})

Gulp.task('set-Env', () => {
  Env({
    file: '.env',
    type: 'ini'
  })
})

Gulp.task('serve', [ 'set-Env' ], () => {
  'use strict'
  let options = {
    script: 'app.js',
    delayTime: 1,
    watch: jsFiles
  }
  return Nodemon(options)
    .on('restart', () => {
      console.log('Restarting....')
    })
})

'use strict'
/* global $, dataManager, stateManager */
var modalModule = (function () { // eslint-disable-line no-unused-vars
  // ---------------------------------------------------------------Module Scope Variables
  var configMap = {
    html: null
  }

  var stateMap = {
    modal_width: null
  }

  var jqueryMap = {}

  var config, init, set_jquery_map, retractRollLogAsync, extendRollLogAsync,
    toggleRollLogAsync
  // ----------------------------------------------------------------------------------end

  // ----------------------------------------------------------------------Private Methods
  set_jquery_map = function () {
    var $container = stateMap.$container
    jqueryMap = {
      $container: $container,
      $roll_log_modal: $container.find('#roll-log-modal')
    }
  }
  // ----------------------------------------------------------------------------------end

  // -----------------------------------------------------------------------Event Handlers
  // ----------------------------------------------------------------------------------End

  // -----------------------------------------------------------------------Public Methods
  toggleRollLogAsync = function () {
    if (jqueryMap.$roll_log_modal && jqueryMap.$roll_log_modal.width() > 0) {
      return retractRollLogAsync()
    } else {
      return extendRollLogAsync()
    }
  }

  extendRollLogAsync = function () {
    let currentlyExtended = stateManager.get('currentlyExtended')
    if ((!currentlyExtended || currentlyExtended === 'roll_log_modal') && !stateManager.get('isAnimating')) {
      stateManager.set('isAnimating', true)
      return new Promise(function (resolve, reject) {
        let roll_log = dataManager.get('roll_log')
        jqueryMap.$container.empty()
        jqueryMap.$container.css('visibility', 'visible')
        jqueryMap.$container.append('<div id="roll-log-modal"></div>')
        jqueryMap.$container.animate({ width: '100vw' }, 600, function () {
          let roll_log_modal = $('#roll-log-modal')

          roll_log_modal.append('<div class="roll-log-header">' + roll_log.hoard_table.name + '</div>')
          roll_log_modal.append('<div class="roll-log-item-divider"></div>')
          roll_log_modal.append(
            '<div class="roll-log-item-container">' +
              '<div class="roll-log-item-left">&#8226&nbspTable Roll</div>' +
              '<div class="roll-log-item-center">' + roll_log.hoard_table.dice + '</div>' +
              '<div class="roll-log-item-right">' + roll_log.hoard_table.rolls + '</div>' +
            '</div>'
          )
          roll_log_modal.append('<div class="roll-log-header">Coins</div>')
          roll_log_modal.append('<div class="roll-log-item-divider"></div>')
          if (roll_log.coins.cp) {
            roll_log_modal.append(
              '<div class="roll-log-item-container">' +
                '<div class="roll-log-item-left">&#8226&nbspCopper Pieces</div>' +
                '<div class="roll-log-item-center">' + roll_log.coins.cp.dice + '</div>' +
                '<div class="roll-log-item-right">' + roll_log.coins.cp.rolls + '</div>' +
              '</div>'
            )
          }
          if (roll_log.coins.sp) {
            roll_log_modal.append(
              '<div class="roll-log-item-container">' +
                '<div class="roll-log-item-left">&#8226&nbspSilver Pieces</div>' +
                '<div class="roll-log-item-center">' + roll_log.coins.sp.dice + '</div>' +
                '<div class="roll-log-item-right">' + roll_log.coins.sp.rolls + '</div>' +
              '</div>'
            )
          }
          if (roll_log.coins.ep) {
            roll_log_modal.append(
              '<div class="roll-log-item-container">' +
                '<div class="roll-log-item-left">&#8226&nbspElectrum Pieces</div>' +
                '<div class="roll-log-item-center">' + roll_log.coins.ep.dice + '</div>' +
                '<div class="roll-log-item-right">' + roll_log.coins.ep.rolls + '</div>' +
              '</div>'
            )
          }
          if (roll_log.coins.gp) {
            roll_log_modal.append(
              '<div class="roll-log-item-container">' +
                '<div class="roll-log-item-left">&#8226&nbspGold Pieces</div>' +
                '<div class="roll-log-item-center">' + roll_log.coins.gp.dice + '</div>' +
                '<div class="roll-log-item-right">' + roll_log.coins.gp.rolls + '</div>' +
              '</div>'
            )
          }
          if (roll_log.coins.pp) {
            roll_log_modal.append(
              '<div class="roll-log-item-container">' +
                '<div class="roll-log-item-left">&#8226&nbspPlatinum Pieces</div>' +
                '<div class="roll-log-item-center">' + roll_log.coins.pp.dice + '</div>' +
                '<div class="roll-log-item-right">' + roll_log.coins.pp.rolls + '</div>' +
              '</div>'
            )
          }
          if (roll_log.gemstones) {
            roll_log_modal.append('<div class="roll-log-header">Gemstones</div>')
            roll_log_modal.append('<div class="roll-log-item-divider"></div>')
            roll_log_modal.append(
              '<div class="roll-log-item-container">' +
                '<div class="roll-log-item-left">&#8226&nbspTable Roll</div>' +
                '<div class="roll-log-item-center">' + roll_log.gemstones.dice + '</div>' +
                '<div class="roll-log-item-right">' + roll_log.gemstones.rolls + '</div>' +
              '</div>'
            )
          }
          if (roll_log.artobjects) {
            roll_log_modal.append('<div class="roll-log-header">Art Objects</div>')
            roll_log_modal.append('<div class="roll-log-item-divider"></div>')
            roll_log_modal.append(
              '<div class="roll-log-item-container">' +
                '<div class="roll-log-item-left">&#8226&nbspTable Roll</div>' +
                '<div class="roll-log-item-center">' + roll_log.artobjects.dice + '</div>' +
                '<div class="roll-log-item-right">' + roll_log.artobjects.rolls + '</div>' +
              '</div>'
            )
          }
          if (roll_log.magic_item_tables.length > 0) {
            roll_log_modal.append('<div class="roll-log-header">Magic Item ' +
              roll_log.magic_item_tables[0].name + '</div>')
            roll_log_modal.append('<div class="roll-log-item-divider"></div>')
            roll_log_modal.append(
              '<div class="roll-log-item-container">' +
                '<div class="roll-log-item-left">&#8226&nbspTable Roll</div>' +
                '<div class="roll-log-item-center">' + roll_log.magic_item_tables[0].dice + '</div>' +
                '<div class="roll-log-item-right">' + roll_log.magic_item_tables[0].rolls + '</div>' +
              '</div>'
            )
            roll_log.magic_item_tables[0].magicitems.forEach(function (magic_item) {
              roll_log_modal.append(
                '<div class="roll-log-item-container">' +
                  '<div class="roll-log-item-left">&#8226&nbspTable G Roll</div>' +
                  '<div class="roll-log-item-center">' + magic_item.dice + '</div>' +
                  '<div class="roll-log-item-right">' + magic_item.rolls + '</div>' +
                '</div>'
              )
            })
          }
          set_jquery_map()
        })
        stateManager.set('isAnimating', false)
        stateManager.set('currentlyExtended', 'roll_log_modal')
        return resolve()
      })
    }
    return Promise.resolve()
  }

  retractRollLogAsync = function () {
    return new Promise(function (resolve, reject) {
      jqueryMap.$container.animate({ width: '0' }, 300, function () {
        jqueryMap.$container.css('visibility', 'hidden')
        jqueryMap.$container.empty()
        set_jquery_map()
        stateMap.current_modal = null
        stateManager.set('currentlyExtended', null)
        resolve(true)
      })
    })
  }

  config = function (input_map) {

  }

  init = function (input_map) {
    stateMap.$container = input_map.$container
    input_map.$container.append(configMap[configMap.starting_modal])
    set_jquery_map()
    stateMap.modal_width = jqueryMap.$container.width()
  }
  // ----------------------------------------------------------------------------------end

  return {
    config: config,
    init: init,
    toggleRollLogAsync: toggleRollLogAsync
  }
}())

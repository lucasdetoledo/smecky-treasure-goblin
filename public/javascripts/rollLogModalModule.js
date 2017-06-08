'use strict'
/* global $, dataManager, stateManager */
var rollLogModalModule = (function () { // eslint-disable-line no-unused-vars
  // ---------------------------------------------------------------Module Scope Variables
  var configMap = {
    html: null
  }

  var stateMap = {
    modal_width: null
  }

  var jqueryMap = {}

  var config, init, set_jquery_map, retractRollLogAsync, extendRollLogAsync,
    toggleRollLogAsync, add_log_item
  // ----------------------------------------------------------------------------------end

  // ----------------------------------------------------------------------Private Methods
  set_jquery_map = function () {
    var $container = stateMap.$container
    jqueryMap = {
      $container: $container,
      $roll_log_modal: $container.find('#roll-log-modal')
    }
  }

  add_log_item = function ($container, text, dice, rolls) {
    $container.append(
      '<div class="roll-log-modal-item-container">' +
        `<div class="roll-log-modal-item-left">&#8226&nbsp${text}</div>` +
        `<div class="roll-log-modal-item-center">${dice}</div>` +
        `<div class="roll-log-modal-item-right">${rolls}</div>` +
      '</div>'
    )
  }
  // ----------------------------------------------------------------------------------end

  // -----------------------------------------------------------------------Event Handlers
  // ----------------------------------------------------------------------------------End

  // -----------------------------------------------------------------------Public Methods
  toggleRollLogAsync = function () {
    if (jqueryMap.$roll_log_modal && jqueryMap.$roll_log_modal.width() > 0) {
      return retractRollLogAsync()
    } else {
      if (dataManager.get('loot_list')) {
        return extendRollLogAsync()
      } else {
        return Promise.resolve(true)
      }
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
          let $roll_log_modal = $('#roll-log-modal')

          $roll_log_modal.append('<div class="roll-log-modal-header">' + roll_log.hoard_table.name + '</div>')
          $roll_log_modal.append('<div class="roll-log-modal-item-divider"></div>')
          add_log_item($roll_log_modal, 'Table Roll', roll_log.hoard_table.dice, roll_log.hoard_table.rolls)
          $roll_log_modal.append('<div class="roll-log-modal-header">Coins</div>')
          $roll_log_modal.append('<div class="roll-log-modal-item-divider"></div>')
          if (roll_log.coins.cp) {
            add_log_item($roll_log_modal, 'Copper Pieces', roll_log.coins.cp.dice, roll_log.coins.cp.rolls)
          }
          if (roll_log.coins.sp) {
            add_log_item($roll_log_modal, 'Silver Pieces', roll_log.coins.sp.dice, roll_log.coins.sp.rolls)
          }
          if (roll_log.coins.ep) {
            add_log_item($roll_log_modal, 'Electrum Pieces', roll_log.coins.ep.dice, roll_log.coins.ep.rolls)
          }
          if (roll_log.coins.gp) {
            add_log_item($roll_log_modal, 'Gold Pieces', roll_log.coins.gp.dice, roll_log.coins.gp.rolls)
          }
          if (roll_log.coins.pp) {
            add_log_item($roll_log_modal, 'Platinum Pieces', roll_log.coins.pp.dice, roll_log.coins.pp.rolls)
          }
          if (roll_log.gemstones) {
            $roll_log_modal.append('<div class="roll-log-modal-header">Gemstones</div>')
            $roll_log_modal.append('<div class="roll-log-modal-item-divider"></div>')
            add_log_item($roll_log_modal, 'Table Roll', roll_log.gemstones.dice, roll_log.gemstones.rolls)
          }
          if (roll_log.art_objects) {
            $roll_log_modal.append('<div class="roll-log-modal-header">Art Objects</div>')
            $roll_log_modal.append('<div class="roll-log-modal-item-divider"></div>')
            add_log_item($roll_log_modal, 'Table Roll', roll_log.art_objects.dice, roll_log.art_objects.rolls)
          }
          if (roll_log.magic_item_tables.length > 0) {
            roll_log.magic_item_tables.forEach(function (magic_item_table) {
              $roll_log_modal.append(`<div class="roll-log-modal-header">Magic Item ${magic_item_table.name}</div>`)
              $roll_log_modal.append('<div class="roll-log-modal-item-divider"></div>')
              add_log_item($roll_log_modal, 'Table Roll', magic_item_table.dice, magic_item_table.rolls)
              magic_item_table.magic_items.forEach(function (magic_item) {
                add_log_item($roll_log_modal, `${magic_item_table.name} Roll`, magic_item.dice, magic_item.rolls)
              })
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

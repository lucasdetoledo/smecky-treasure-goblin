'use strict'
/* global stateManager */

var bodyModule = (function () { // eslint-disable-line no-unused-vars
 // ----------------------------------------------------------------Module Scope Variables
  var configMap = {
    html: String() +
    '<div id="body-container">' +
      '<div id="body-dropdown-container">' +
        '<div id="body-type-dropdown-container" class="body-dropdown-container">' +
          '<div class="body-dropdown-placeholder-icon-container">' +
            '<div id="body-type-dropdown-placeholder">Select A Type</div>' +
            '<i class="fa fa-caret-down fa-lg"></i>' +
          '</div>' +
          '<div id="body-type-dropdown-content" style="display:none" class="body-dropdown-content">' +
            '<div id="body-type-dropdown-horde" class="body-type-dropdown-item">Horde</div>' +
            '<div id="body-type-dropdown-individual" class="body-type-dropdown-item">Individual</div>' +
          '</div>' +
        '</div>' +
        '<div id="body-level-dropdown-container" class="body-dropdown-container">' +
          '<div class="body-dropdown-placeholder-icon-container">' +
            '<div id="body-level-dropdown-placeholder">Select A Level</div>' +
            '<i class="fa fa-caret-down fa-lg"></i>' +
          '</div>' +
          '<div id="body-level-dropdown-content" style="display:none" class="body-dropdown-content">' +
            '<div id="body-level-dropdown-four" class="body-type-dropdown-item">0 - 4</div>' +
            '<div id="body-level-dropdown-ten" class="body-type-dropdown-item">5 - 10</div>' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<div id="body-title"></div>' +
      '<div id="body-loot-list-container"></div>' +
    '</div>',
    title: null
  }
  var stateMap = {}
  var jqueryMap = {
    $container: null,
    $body_dropdown_container: null,
    $body_type_dropdown_container: null,
    $body_type_dropdown_placeholder: null,
    $body_type_dropdown_content: null,
    $body_type_dropdown_horde: null,
    $body_type_dropdown_individual: null,
    $body_level_dropdown_container: null,
    $body_level_dropdown_placeholder: null,
    $body_level_dropdown_content: null,
    $body_level_dropdown_four: null,
    $body_level_dropdown_ten: null,
    $body_loot_list_container: null
  }
  var config, init, set_jquery_map, type_dropdown_click, type_dropdown_horde_click,
    type_dropdown_individual_click, level_dropdown_click, level_dropdown_four_click,
    level_dropdown_ten_click, setLootList, setDropdownErrorColor,
    resetDropdownErrorColor, add_loot_item
  // ----------------------------------------------------------------------------------end

  // ----------------------------------------------------------------------Private Methods
  set_jquery_map = function () {
    var $container = stateMap.$container
    jqueryMap = {
      $container: $container,
      $body_dropdown_container: $container.find('#body-dropdown-container'),
      $body_type_dropdown_container: $container.find('#body-type-dropdown-container'),
      $body_type_dropdown_placeholder: $container.find('#body-type-dropdown-placeholder'),
      $body_type_dropdown_content: $container.find('#body-type-dropdown-content'),
      $body_type_dropdown_horde: $container.find('#body-type-dropdown-horde'),
      $body_type_dropdown_individual: $container.find('#body-type-dropdown-individual'),
      $body_level_dropdown_container: $container.find('#body-level-dropdown-container'),
      $body_level_dropdown_placeholder: $container.find('#body-level-dropdown-placeholder'),
      $body_level_dropdown_content: $container.find('#body-level-dropdown-content'),
      $body_level_dropdown_four: $container.find('#body-level-dropdown-four'),
      $body_level_dropdown_ten: $container.find('#body-level-dropdown-ten'),
      $body_loot_list_container: $container.find('#body-loot-list-container')
    }
  }

  add_loot_item = function (icon, item, val) {
    jqueryMap.$body_loot_list_container.append(
      '<div class="body-loot-item-container">' +
        '<div class="body-loot-icon-item-container">' +
          `<img src="${icon}" style="width: 10px; height: 10px">` +
          '<div class="body-loot-item">' + item + '</div>' +
        '</div>' +
        '<div class="body-loot-item">' + val + '</div>' +
      '</div>'
    )
  }
  // ----------------------------------------------------------------------------------end

  // -------------------------------------------------------------------------------events
  type_dropdown_click = function () {
    let currentlyExtended = stateManager.get('currentlyExtended')
    if ((!currentlyExtended || currentlyExtended === 'type_dropdown') && !stateManager.get('isAnimating')) {
      stateManager.set('isAnimating', true)
      return new Promise(function (resolve, reject) {
        jqueryMap.$body_type_dropdown_content.slideToggle()
        stateManager.set('isAnimating', false)
        if (!currentlyExtended) {
          stateManager.set('currentlyExtended', 'type_dropdown')
        } else {
          stateManager.set('currentlyExtended', null)
        }
        jqueryMap.$body_type_dropdown_placeholder.css('color', 'black')
        return resolve()
      })
    }
    return Promise.resolve()
  }

  type_dropdown_horde_click = function () {
    jqueryMap.$body_type_dropdown_placeholder.html('Horde')
    stateManager.set('type', 'horde')
  }

  type_dropdown_individual_click = function () {
    jqueryMap.$body_type_dropdown_placeholder.html('Individual')
    stateManager.set('type', 'individual')
  }

  level_dropdown_click = function () {
    let currentlyExtended = stateManager.get('currentlyExtended')
    if ((!currentlyExtended || currentlyExtended === 'level_dropdown') && !stateManager.get('isAnimating')) {
      stateManager.set('isAnimating', true)
      return new Promise(function (resolve, reject) {
        jqueryMap.$body_level_dropdown_content.slideToggle()
        stateManager.set('isAnimating', false)
        if (!currentlyExtended) {
          stateManager.set('currentlyExtended', 'level_dropdown')
        } else {
          stateManager.set('currentlyExtended', null)
        }
        jqueryMap.$body_level_dropdown_placeholder.css('color', 'black')
        return resolve()
      })
    }
    return Promise.resolve()
  }

  level_dropdown_four_click = function () {
    jqueryMap.$body_level_dropdown_placeholder.html('0 - 4')
    stateManager.set('level', '4')
  }

  level_dropdown_ten_click = function () {
    jqueryMap.$body_level_dropdown_placeholder.html('5 - 10')
    stateManager.set('level', '10')
  }
  // ----------------------------------------------------------------------------------end

  // -----------------------------------------------------------------------Public Methods
  setDropdownErrorColor = function (val) {
    if (val === 'type') {
      jqueryMap.$body_type_dropdown_placeholder.css('color', 'red')
    }
    if (val === 'level') {
      jqueryMap.$body_level_dropdown_placeholder.css('color', 'red')
    }
  }

  resetDropdownErrorColor = function () {
    jqueryMap.$body_type_dropdown_placeholder.css('color', 'black')
    jqueryMap.$body_level_dropdown_placeholder.css('color', 'black')
  }

  setLootList = function (loot_list) {
    jqueryMap.$body_loot_list_container.empty()
    jqueryMap.$body_loot_list_container.append('<div class="body-loot-header">Coins</div>')
    jqueryMap.$body_loot_list_container.append('<div class="body-loot-item-divider"></div>')
    if (loot_list.coins.cp) {
      add_loot_item('images/coinIcon.svg', 'Copper Pieces', loot_list.coins.cp)
    }
    if (loot_list.coins.sp) {
      add_loot_item('images/coinIcon.svg', 'Silver Pieces', loot_list.coins.sp)
    }
    if (loot_list.coins.ep) {
      add_loot_item('images/coinIcon.svg', 'Electrum Pieces', loot_list.coins.ep)
    }
    if (loot_list.coins.gp) {
      add_loot_item('images/coinIcon.svg', 'Gold Pieces', loot_list.coins.gp)
    }
    if (loot_list.coins.pp) {
      add_loot_item('images/coinIcon.svg', 'Platinum Pieces', loot_list.coins.gp)
    }
    if (loot_list.gemstones.length > 0) {
      jqueryMap.$body_loot_list_container.append('<div class="body-loot-header">Gemstones</div>')
      jqueryMap.$body_loot_list_container.append('<div class="body-loot-item-divider"></div>')

      for (var i = 0; i < loot_list.gemstones.length; ++i) {
        add_loot_item('images/gemstoneIcon.svg', loot_list.gemstones[i].description, loot_list.gemstones[i].value + 'gp')
      }
    }
    if (loot_list.art_objects.length > 0) {
      jqueryMap.$body_loot_list_container.append('<div class="body-loot-header">Art Objects</div>')
      jqueryMap.$body_loot_list_container.append('<div class="body-loot-item-divider"></div>')

      for (i = 0; i < loot_list.art_objects.length; ++i) {
        add_loot_item('images/paintBrushIcon.svg', loot_list.art_objects[i].description, loot_list.art_objects[i].value + 'gp')
      }
    }
    if (loot_list.magic_items.length > 0) {
      jqueryMap.$body_loot_list_container.append('<div class="body-loot-header">Magic Items</div>')
      jqueryMap.$body_loot_list_container.append('<div class="body-loot-item-divider"></div>')
      for (i = 0; i < loot_list.magic_items.length; ++i) {
        if (loot_list.magic_items[i].sub_type) {
          if (loot_list.magic_items[i].modifier !== '0') {
            add_loot_item('images/coinIcon.svg', `${loot_list.magic_items[i].name} (+${loot_list.magic_items[i].modifier}) (${loot_list.magic_items[i].sub_type})`, `pg ${loot_list.magic_items[i].page}`)
          } else {
            jqueryMap.$body_loot_list_container.append(
              '<div class="body-loot-item-container">' +
                '<div class="body-loot-item">&#8226&nbsp' + loot_list.magic_items[i].name +
                ' (' + loot_list.magic_items[i].sub_type + ')</div>' +
                '<div class="body-loot-item">pg.&nbsp' + loot_list.magic_items[i].page + '</div>' +
              '</div>'
            )
          }
        } else {
          if (loot_list.magic_items[i].modifier !== '0') {
            jqueryMap.$body_loot_list_container.append(
              '<div class="body-loot-item-container">' +
                '<div class="body-loot-item">&#8226&nbsp' + loot_list.magic_items[i].name +
                ' (' + loot_list.magic_items[i].modifier + ')</div>' +
                '<div class="body-loot-item">pg.&nbsp' + loot_list.magic_items[i].page + '</div>' +
              '</div>'
            )
          } else {
            jqueryMap.$body_loot_list_container.append(
              '<div class="body-loot-item-container">' +
                '<div class="body-loot-item">&#8226&nbsp' + loot_list.magic_items[i].name + '</div>' +
                '<div class="body-loot-item">pg.&nbsp' + loot_list.magic_items[i].page + '</div>' +
              '</div>'
            )
          }
        }
      }
    }
  }

  config = function (input_map) {}

  init = function (input_map) {
    stateMap.$container = input_map.$container
    input_map.$container.html(configMap.html)
    set_jquery_map()
    jqueryMap.$body_type_dropdown_container.on('click', type_dropdown_click)
    jqueryMap.$body_type_dropdown_horde.on('click', type_dropdown_horde_click)
    jqueryMap.$body_type_dropdown_individual.on('click', type_dropdown_individual_click)
    jqueryMap.$body_level_dropdown_container.on('click', level_dropdown_click)
    jqueryMap.$body_level_dropdown_four.on('click', level_dropdown_four_click)
    jqueryMap.$body_level_dropdown_ten.on('click', level_dropdown_ten_click)
  }
  // ----------------------------------------------------------------------------------end
  return {
    config: config,
    init: init,
    setLootList: setLootList,
    setDropdownErrorColor: setDropdownErrorColor,
    resetDropdownErrorColor: resetDropdownErrorColor
  }
}())

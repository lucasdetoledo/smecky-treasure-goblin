'use strict'
/* global */

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
            '<div id="body-level-dropdown-etc" class="body-type-dropdown-item">etc</div>' +
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
    $body_level_dropdown_etc: null,
    $body_loot_list_container: null
  }
  var config, init, set_jquery_map, type_dropdown_click, type_dropdown_horde_click,
    type_dropdown_individual_click, level_dropdown_click, level_dropdown_four_click,
    level_dropdown_etc_click, setLootList, toggleInfoDropdown
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
      $body_level_dropdown_etc: $container.find('#body-level-dropdown-etc'),
      $body_loot_list_container: $container.find('#body-loot-list-container')
    }
  }
  // ----------------------------------------------------------------------------------end

  // -------------------------------------------------------------------------------events
  /*
    TODO: Fix these clicks, they shoudl be setting something on stateManager which
    will then be passed into API manager on shellModule
   */
  type_dropdown_click = function () {
    jqueryMap.$body_type_dropdown_content.slideToggle()
  }

  type_dropdown_horde_click = function () {
    jqueryMap.$body_type_dropdown_placeholder.html('Horde')
  }

  type_dropdown_individual_click = function () {
    jqueryMap.$body_type_dropdown_placeholder.html('Individual')
  }

  level_dropdown_click = function () {
    jqueryMap.$body_level_dropdown_content.slideToggle()
  }

  level_dropdown_four_click = function () {
    jqueryMap.$body_level_dropdown_placeholder.html('0 - 4')
  }

  level_dropdown_etc_click = function () {
    jqueryMap.$body_level_dropdown_placeholder.html('etc')
  }
  // ----------------------------------------------------------------------------------end

  // -----------------------------------------------------------------------Public Methods
  setLootList = function (loot_list) {
    jqueryMap.$body_loot_list_container.empty()
    jqueryMap.$body_loot_list_container.append('<div class="body-loot-header">Coins</div>')
    jqueryMap.$body_loot_list_container.append('<div class="body-loot-item-divider"></div>')
    if (loot_list.coins.cp) {
      jqueryMap.$body_loot_list_container.append(
        '<div class="body-loot-item-container">' +
        '<div class="body-loot-item">&#8226&nbspCopper Pieces</div>' +
        '<div class="body-loot-item">' + loot_list.coins.cp + '</div>' +
        '</div>'
      )
    }
    if (loot_list.coins.sp) {
      jqueryMap.$body_loot_list_container.append(
        '<div class="body-loot-item-container">' +
        '<div class="body-loot-item">&#8226&nbspSilver Pieces</div>' +
        '<div class="body-loot-item">' + loot_list.coins.sp + '</div>' +
        '</div>'
      )
    }
    if (loot_list.coins.ep) {
      jqueryMap.$body_loot_list_container.append(
        '<div class="body-loot-item-container">' +
        '<div class="body-loot-item">&#8226&nbspElectrum Pieces</div>' +
        '<div class="body-loot-item">' + loot_list.coins.ep + '</div>' +
        '</div>'
      )
    }
    if (loot_list.coins.gp) {
      jqueryMap.$body_loot_list_container.append(
        '<div class="body-loot-item-container">' +
        '<div class="body-loot-item">&#8226&nbspGold Pieces</div>' +
        '<div class="body-loot-item">' + loot_list.coins.gp + '</div>' +
        '</div>'
      )
    }
    if (loot_list.coins.pp) {
      jqueryMap.$body_loot_list_container.append(
        '<div class="body-loot-item-container">' +
        '<div class="body-loot-item">&#8226&nbspPlatinum Pieces</div>' +
        '<div class="body-loot-item">' + loot_list.coins.pp + '</div>' +
        '</div>'
      )
    }
    if (loot_list.gemstones.length > 0) {
      jqueryMap.$body_loot_list_container.append('<div class="body-loot-header">Gemstones</div>')
      jqueryMap.$body_loot_list_container.append('<div class="body-loot-item-divider"></div>')
      for (var i = 0; i < loot_list.gemstones.length; ++i) {
        jqueryMap.$body_loot_list_container.append(
          '<div class="body-loot-item-container">' +
          '<div class="body-loot-item">&#8226&nbsp' + loot_list.gemstones[i].description + '</div>' +
          '<div class="body-loot-item">' + loot_list.gemstones[i].value + 'gp</div>' +
          '</div>'
        )
      }
    }
    if (loot_list.art_objects.length > 0) {
      jqueryMap.$body_loot_list_container.append('<div class="body-loot-header">Art Objects</div>')
      jqueryMap.$body_loot_list_container.append('<div class="body-loot-item-divider"></div>')
      for (i = 0; i < loot_list.art_objects.length; ++i) {
        jqueryMap.$body_loot_list_container.append(
          '<div class="body-loot-item-container">' +
          '<div class="body-loot-item">&#8226&nbsp' + loot_list.art_objects[i].description + '</div>' +
          '<div class="body-loot-item">' + loot_list.art_objects[i].value + 'gp</div>' +
          '</div>'
        )
      }
    }
    if (loot_list.magic_items.length > 0) {
      jqueryMap.$body_loot_list_container.append('<div class="body-loot-header">Magic Items</div>')
      jqueryMap.$body_loot_list_container.append('<div class="body-loot-item-divider"></div>')
      for (i = 0; i < loot_list.magic_items.length; ++i) {
        if (loot_list.magic_items[i].sub_type) {
          jqueryMap.$body_loot_list_container.append(
            '<div class="body-loot-item-container">' +
            '<div class="body-loot-item">&#8226&nbsp' + loot_list.magic_items[i].name + ' (' + loot_list.magic_items[i].sub_type + ')</div>' +
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
    jqueryMap.$body_level_dropdown_etc.on('click', level_dropdown_etc_click)
  }
  // ----------------------------------------------------------------------------------end
  return {
    config: config,
    init: init,
    setLootList: setLootList,
  }
}())

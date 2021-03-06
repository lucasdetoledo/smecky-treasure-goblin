'use strict'
/* global PubSub, stateManager */

var footModule = (function () { // eslint-disable-line no-unused-vars
  // ---------------------------------------------------------------Module Scope Variables
  var configMap = {
    html: String() +
    '<div id="foot-container">' +
      '<div id="foot-button-container">' +
        '<div id="foot-submit-button" class="foot-button">' +
        ' <i class="fa fa-trophy fa-2x"></i>' +
        '</div>' +
        '<div id="foot-roll-log-button" class="foot-button">' +
          '<i class="fa fa-info-circle fa-2x"></i>' +
        '</div>' +
        '<div id="foot-download-button" class="foot-button">' +
          '<i class="fa fa-file-pdf-o fa-2x"></i>' +
        '</div>' +
      '</div>' +
    '</div>'
  }
  var stateMap = {}
  var jqueryMap = {
    $container: null,
    $foot_submit_button: null
  }
  var config, init, set_jquery_map, submit_click, roll_log_click, download_click,
    resetSubmitButtonErrorColor
  // ----------------------------------------------------------------------------------end

  // ----------------------------------------------------------------------Private Methods
  set_jquery_map = function () {
    var $container = stateMap.$container
    jqueryMap = {
      $container: $container,
      $foot_submit_button: $container.find('#foot-submit-button'),
      $foot_roll_log_button: $container.find('#foot-roll-log-button'),
      $foot_download_button: $container.find('#foot-download-button')
    }
  }
  // ----------------------------------------------------------------------------------end

  // -------------------------------------------------------------------------------events
  submit_click = function () {
    if (!stateManager.get('currentlyExtended') && !stateManager.get('isAnimating')) {
      jqueryMap.$foot_submit_button.css('color', 'black')
      if (!stateManager.get('type') || !stateManager.get('level')) {
        jqueryMap.$foot_submit_button.css('color', 'red')
      }
      PubSub.publish('foot_submit_click', {
        type: stateManager.get('type'),
        level: stateManager.get('level')
      })
    }
  }

  roll_log_click = function () {
    if (!dataManager.get('loot_list')) {
      jqueryMap.$foot_submit_button.css('color', 'red')
      return
    }
    PubSub.publish('foot_log_click', {})
  }

  download_click = function () {
    PubSub.publish('download_click', {})
  }
  // ----------------------------------------------------------------------------------end

  // -----------------------------------------------------------------------Public Methods
  resetSubmitButtonErrorColor = function () {
    jqueryMap.$foot_submit_button.css('color', 'black')
  }

  config = function (input_map) {}

  init = function (input_map) {
    stateMap.$container = input_map.$container
    input_map.$container.html(configMap.html)
    set_jquery_map()
    jqueryMap.$foot_submit_button.on('click', submit_click)
    jqueryMap.$foot_roll_log_button.on('click', roll_log_click)
    jqueryMap.$foot_download_button.on('click', download_click)
  }
  // ----------------------------------------------------------------------------------end
  return {
    config: config,
    init: init,
    resetSubmitButtonErrorColor: resetSubmitButtonErrorColor,
  }
}())

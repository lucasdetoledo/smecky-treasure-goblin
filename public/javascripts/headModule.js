'use strict'
/* global */
var headModule = (function () { // eslint-disable-line no-unused-vars
  // -----------------------------------------------------Module Scope Variables
  var configMap = {
    html: String() +
    '<div id="head-container">' +
      '<div id="head-title"></div>' +
      '<div id="head-navbar-button">' +
        '<i class="fa fa-bars fa-2x"></i>' +
      '</div>' +
    '</div>',
    title: null
  }
  var stateMap = {}
  var jqueryMap = {
    $container: null,
    $head_title: null,
    $head_navbar_button: null
  }
  var config, init, set_jquery_map
  // ------------------------------------------------------------------------end

  // ------------------------------------------------------------Private Methods
  set_jquery_map = function () {
    var $container = stateMap.$container
    jqueryMap = {
      $container: $container,
      $head_title: $container.find('#head-title'),
      $head_navbar_button: $container.find('#head-navbar-button')
    }
  }
  // ------------------------------------------------------------------------end

  // -------------------------------------------------------------Public Methods
  config = function (input_map) {
    configMap.title = input_map.title
  }

  init = function (input_map) {
    stateMap.$container = input_map.$container
    input_map.$container.html(configMap.html)
    set_jquery_map()
    jqueryMap.$head_title.html(configMap.title)
  }
  // ------------------------------------------------------------------------end
  return {
    config: config,
    init: init
  }
}())

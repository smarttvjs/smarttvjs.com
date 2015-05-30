//your script here
'use strict';

var MenuButton = SmartTV.ItemView.extend({
  el: "#menu-toggle",
  template: false,
  events: {
    'click': 'onClick',
  },
  onClick: function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
  },
});

var Menu = SmartTV.ItemView.extend({
  el: "#sidebar-wrapper",
  template: false,
  hammerEvents: {
    'swipeleft': 'onSwipeleft',
  },
  onSwipeleft: function(e) {
    $("#wrapper").removeClass("toggled");
  },
});

var app = new SmartTV.Application({
  options: {
    debug_enabled: true,
  },
  onStart: function() {
    new MenuButton();
    new Menu();
  },
});



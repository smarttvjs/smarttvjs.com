//your script here
'use strict';

var Menu = SmartTV.ItemView.extend({
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

var app = new SmartTV.Application({
  options: {
    debug_enabled: true,
  },
  onStart: function() {
    smarttv.debug("onStart");
    new Menu();
  },
});



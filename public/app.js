//your script here
'use strict';

var SidebarView = SmartTV.ScrollView.extend({
  el: "#sidebar",
});

var ContentView = SmartTV.ScrollView.extend({
  el: "#content",
});

/*
var NavView = SmartTV.ItemView.extend({
  events: {
    'click ': 'clickLink',
  },

  clickLink: {
    
  },
});

var ContentView = SmartTV.ItemView.extend({
});
*/

var MyRouter = SmartTV.Router.extend({
  appRoutes: {
    "": "index",
  },
});

var MyController = SmartTV.Controller.extend({
  index: function() {
    (new SidebarView()).triggerMethod('show'); //already rendered
    (new ContentView()).triggerMethod('show'); //already rendered
  },
});

var app = new SmartTV.Application({
  options: {
    debug_enabled: true,
  },
  router: new MyRouter({controller: new MyController()}),
});

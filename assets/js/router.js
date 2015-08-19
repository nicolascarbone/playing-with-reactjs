
'use strict';

var $        = require('jquery'),
    Backbone = require('backbone');

module.exports = Backbone.Router.extend({

  routes: {
    'home': 'home',
  },

  home: function() {
    var HomeModule = require('./views/home.js'),
        HomeView   = new HomeModule();

    HomeView.render();
  },

});

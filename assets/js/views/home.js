
'use strict';

var $             = require('jquery'),
    Backbone      = require('backbone'),
    React         = require('react'),
    HomeComponent = require('../components/home.component.js');
    //YoutubeModule = require('./utils/youtube.js'),
    //YoutubeView   = new YoutubeModule();

module.exports = Backbone.View.extend({

    el: '#main',

    initialize: function() {
      var FilesModule = require('./files.js'),
          FilesView   = new FilesModule();
    },

    component: function() {
      return new HomeComponent();
    },

    render: function() {
      React.render(React.createElement(this.component()), document.body);
    }

});

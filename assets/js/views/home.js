
'use strict';

var $             = require('jquery'),
    Backbone      = require('backbone'),
    React         = require('react'),
    HomeComponent = require('../components/home.component.js');

module.exports = Backbone.View.extend({

    el: '#main',

    initialize: function() {
      console.log("init home");

    },

    render: function() {
      console.log("rendering home");
      React.render(<HomeComponent />, document.body);

      var FilesModule = require('./files.js'),
          FilesView   = new FilesModule();
      FilesView.render();

    }

});


'use strict';

var $                 = require('jquery'),
    Backbone          = require('backbone'),
    React             = require('react'),
    HomeComponent     = require('../components/home.component.js'),
    SpinnerComponent  = require('../components/spinner.component.js');

module.exports = Backbone.View.extend({

    el: '#main',

    render: function() {

      React.render(<HomeComponent />, document.body);

      React.render(<SpinnerComponent />, $('#spinner').get(0));

      var FilesModule   = require('./files.js'),
          FilesView     = new FilesModule();

      FilesView.render();


    }

});

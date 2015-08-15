
var $             = require('jquery'),
    Backbone      = require('backbone'),
    YoutubeModule = require('../utils/youtube.js'),
    React         = require('react'),
    YTComponent   = require('../components/youtube.component.js');

module.exports = Backbone.View.extend({

  el: '#files',

  events: {
    'change': 'handleFiles'
  },

  initialize: function() {
    console.log("initializing files");
    YoutubeView = new YoutubeModule();
  },

  component: function() {
    //console.log("YTComponent", YTComponent);
    //console.log("new YTComponent() ", new YTComponent());
    return new YTComponent();
  },

  handleFiles: function() {
    var files   = event.target.files,
        output  = [],
        self    = this;

    for (var i = 0, f; f = files[i]; i++) {
      // buscar en la api de youtube por el 'did you mean'
      // inspeccionar metadata de archivos
      console.log("###########################");
      console.log(f.name);

      YoutubeView.search( f.name );
      //console.log(React.createElement(self.component()));
      //React.renderComponent(React.createElement(self.component()), document.getElementById('main'));

      console.log("###########################");
    }

  }

})

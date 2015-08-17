
var $               = require('jquery'),
    Backbone        = require('backbone'),
    React           = require('react'),
    FilesComponent  = require('../components/files.component.js'),
    YoutubeModule   = require('../utils/youtube.js');

module.exports = Backbone.View.extend({

  el: document.body,

  events: {
    'change': 'handleFiles'
  },

  render: function() {
    console.log("initializing files");
    //document.getElementById('home')
    React.render(<FilesComponent />, $('#files').get(0));
  },

  initialize :function() {
    console.log("files se renderizo");
    YoutubeView = new YoutubeModule();
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
      console.log("###########################");
    }

  }

})

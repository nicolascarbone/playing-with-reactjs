
var $                     = require('jquery'),
    _                     = require('underscore'),
    Backbone              = require('backbone'),
    React                 = require('react'),
    KeysModule            = require('../utils/keys.js'),
    YTVideosComponent     = require('../components/youtube.component.js'),
    YTCategoriesComponent = require('../components/youtube.categories.component.js');

var YoutubeView = Backbone.View.extend({

  gapi: null,

  initialize: function() {

    var self = this,
        keys = KeysModule();

    this.OAUTH2_CLIENT_ID = keys.OAUTH2_CLIENT_ID

    this.OAUTH2_SCOPES = [
      'https://www.googleapis.com/auth/youtube'
    ];

    window.gapi_onload = function() {
      console.log("gapi_onload");
      self.googleApiClientReady();
    }

    $.getScript('https://apis.google.com/js/client.js');

  },


  googleApiClientReady: function() {
    var self = this;
    gapi.auth.init(function() {
      self.checkAuth();
    });
  },

  checkAuth: function() {

    var self = this;
    gapi.auth.authorize({
      client_id: self.OAUTH2_CLIENT_ID,
      scope: self.OAUTH2_SCOPES,
      immediate: true
    }, function( authResult ) {
      if (authResult && !authResult.error) {
        self.loadAPIClientInterfaces();
      }
    });

  },

  handleAPILoaded: function() {
    $('#spinner-loader').hide();
  },

  loadAPIClientInterfaces: function() {
    var self = this;
    gapi.client.load('youtube', 'v3', function() {
      self.handleAPILoaded();
    });
  },

  render: function( videos ) {

    var ids = [];

    _.each(videos, function( video, index ) {
      ids.push( video.id.videoId );
    });

    var request = gapi.client.youtube.videos.list({
      id: ids.join(),
      part: 'snippet'
    });

    request.execute(function( response ) {

      var categories = [];
      _.each(response.items, function( video, index ) {
        if ( $.inArray(video.snippet.categoryId, categories) === -1 ) {
          categories.push( video.snippet.categoryId );
        }
      });

      var request = gapi.client.youtube.videoCategories.list({
        id: categories.join(),
        part: 'snippet'
      });

      request.execute(function( response ) {
        React.render(<YTCategoriesComponent categories={response.items} videos={videos} />, $('#videos').get(0));
        //React.render(<YTVideosComponent videos={videos} />, $('#videos').get(0));
      });

    });

  },

  // Search for a specified string.
  search: function( q ) {
    var self = this,
        request = gapi.client.youtube.search.list({
          q: q,
          part: 'snippet'
        });

    request.execute(function( response ) {
      self.render( response.items );
    });

  }

});

module.exports = YoutubeView;

var $		 				= require('jquery'),
		Backbone 		= require('backbone'),
		React 			= require('react'),
		KeysModule  = require('../utils/keys.js'),
    YTComponent = require('../components/youtube.component.js');


var YoutubeView = Backbone.View.extend({

	gapi: null,

	// The client ID is obtained from the {{ Google Cloud Console }}
	// at {{ https://cloud.google.com/console }}.
	// If you run this code from a server other than http://localhost,
	// you need to register your own client ID.

	initialize: function() {

		var self = this;

    var keys = KeysModule();

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
	    //window.setTimeout(self.checkAuth, 1);
	  });
	},

	/*

	// Upon loading, the Google APIs JS client automatically invokes this callback.
	googleApiClientReady: function() {
		console.log("api client readu", this.nico, gapi);
		var self = this;
	  gapi.auth.init(function() {
	  	console.log("initi!!!!");
	  	self.checkAuth();
	    //window.setTimeout(self.checkAuth, 1);
	  });
	},*/

	// Attempt the immediate OAuth 2.0 client flow as soon as the page loads.
	// If the currently logged-in Google Account has previously authorized
	// the client specified as the OAUTH2_CLIENT_ID, then the authorization
	// succeeds with no user intervention. Otherwise, it fails and the
	// user interface that prompts for authorization needs to display.
	checkAuth: function() {

		var self = this;
	  gapi.auth.authorize({
	    client_id: self.OAUTH2_CLIENT_ID,
	    scope: self.OAUTH2_SCOPES,
	    immediate: true
	  }, function( authResult ) {
	  	console.log(authResult);
	  	if (authResult && !authResult.error) {
	  		self.loadAPIClientInterfaces();
	  	}
	  });

	},

	/*
	// Handle the result of a self.gapi.auth.authorize() call.
	handleAuthResult: function(authResult) {
		console.log("authresult ", authResult);
		var that = this;
	  if (authResult && !authResult.error) {
	    // Authorization was successful. Hide authorization prompts and show
	    // content that should be visible after authorization succeeds.
	    //$('.pre-auth').hide();
	    //$('.post-auth').show();
	    that.loadAPIClientInterfaces();
	  } else {
	    // Make the #login-link clickable. Attempt a non-immediate OAuth 2.0
	    // client flow. The current function is called when that flow completes.
	    //$('#login-link').click(function() {
	      that.gapi.auth.authorize({
	        client_id: that.OAUTH2_CLIENT_ID,
	        scope: that.OAUTH2_SCOPES,
	        immediate: false
	        }, that.handleAuthResult);
	    //});
	  }
	},
	*/

	// After the API loads, call a function to enable the search box.
	handleAPILoaded: function() {
	  //this.search();
	  console.log("API LOADED");

	},

	// Load the client interfaces for the YouTube Analytics and Data APIs, which
	// are required to use the Google APIs JS client. More info is available at
	// http://code.google.com/p/google-api-javascript-client/wiki/GettingStarted#Loading_the_Client
	loadAPIClientInterfaces: function() {
		var self = this;
	  gapi.client.load('youtube', 'v3', function() {
	    self.handleAPILoaded();
	  });
	},

	render: function( video ) {
		console.log("video ", video);
		React.render(<YTComponent {...video} />, document.getElementById('main'));
	},

	// Search for a specified string.
	search: function( q ) {
	  var self = this,
	  		request = gapi.client.youtube.search.list({
			    q: q,
			    part: 'snippet'
			  });

	  request.execute(function(response) {

	  	$.each(response.items, function(a, video) {
	  		self.render( video );
	  	});

	  });

	}

});

module.exports = YoutubeView;
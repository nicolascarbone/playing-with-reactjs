/** @jsx React.DOM */
var React         = require('react'),
		ReactBackbone	= require('react.backbone');

var HomeComponent = React.createClass({

  render: function () {
    return (
      <div id="home">
      	<div id="spinner"></div>
      	<div id="files"></div>
      	<div id="videos"></div>
      </div>
    );
  }
});

module.exports = HomeComponent;

/** @jsx React.DOM */
var React         = require('react'),
		ReactBackbone	= require('react.backbone');

var YTComponent = React.createBackboneClass({

  toUpperCase: function(a) {
		console.log("a ", arguments);
		return '';
	},
  render: function () {
    return (
      <div>
        <div id="main-container">YT!</div>
      </div>
    );
  }
});

module.exports = YTComponent;

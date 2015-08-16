/** @jsx React.DOM */
var React         = require('react'),
		ReactBackbone	= require('react.backbone');

var HomeComponent = React.createClass({

  render: function () {
    return (
      <div>
        <div id="main-container"></div>
      </div>
    );
  }
});

module.exports = HomeComponent;

/** @jsx React.DOM */
var React         = require('react'),
		ReactBackbone	= require('react.backbone'),
    SpinnerComponent  = require('../components/spinner.component.js');

var HomeComponent = React.createClass({

  componentDidMount: function() {
    //React.render(<SpinnerComponent />, document.getElementById('spinner'));
  },

  render: function () {
    return (
      <div id="home">
      	<div id="spinner"><SpinnerComponent /></div>
      	<div id="files"></div>
      	<div id="videos"></div>
      </div>
    );
  }
});

module.exports = HomeComponent;

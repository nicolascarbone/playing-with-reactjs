/** @jsx React.DOM */
var React         = require('react'),
    ReactBackbone = require('react.backbone');

var SpinnerComponent = React.createClass({

  render: function () {
    return (
      <div className="ui segment" id="spinner-loader">
        <div className="ui active dimmer">
          <div className="ui indeterminate text loader">Loading</div>
        </div>
        <br></br>
        <br></br>
        <br></br>
      </div>
    );
  }
});

module.exports = SpinnerComponent;


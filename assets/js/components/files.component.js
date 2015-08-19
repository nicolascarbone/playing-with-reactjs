/** @jsx React.DOM */
var React         = require('react'),
    ReactBackbone = require('react.backbone');

var FilesComponent = React.createClass({

  render: function () {
    return (
      <input type="file" id="files" name="files[]" />
    )
  }
});

module.exports = FilesComponent;

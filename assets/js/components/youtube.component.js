/** @jsx React.DOM */
var React         = require('react'),
		ReactBackbone	= require('react.backbone');

var YTComponent = React.createBackboneClass({

  render: function () {
    return (
      <div class="ui card">
        <div class="image">
          <img src={this.props.snippet.thumbnails.default.url}>
        </div>
        <div class="content">
          <a class="header">{this.props.snippet.title}</a>
          <div class="meta">
            <span class="date">{this.props.snippet.publishedAt}</span>
          </div>
          <div class="description">
            {this.props.snippet.description}
          </div>
        </div>
        <div class="extra content">
          <a>
            <i class="user icon"></i>
            22 Friends
          </a>
        </div>
      </div>
    );
  }

});

module.exports = YTComponent;

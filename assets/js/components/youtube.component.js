/** @jsx React.DOM */
var React         = require('react'),
    ReactBackbone = require('react.backbone');


var YTVideoComponent = React.createBackboneClass({

  render: function () {
    return (
      <div className="ui card">
        <div className="image">
          <img src={this.props.video.snippet.thumbnails.medium.url} />
        </div>
        <div className="content">
          <a className="header" href="https://www.youtube.com/watch?v={this.props.video.id.videoID}">
            {this.props.video.snippet.title}
          </a>
          <div className="meta">
            <span className="date">{this.props.video.snippet.publishedAt}</span>
          </div>
          <div className="description">
            {this.props.video.snippet.description}
          </div>
        </div>
        <div className="extra content">
          <a>
            <i className="user icon"></i>
            2 Friends
          </a>
        </div>
      </div>
    );
  }

});


var YTVideosComponent = React.createBackboneClass({

  render: function () {
    return (
      <div>
        {
          this.props.videos.map(function( video ) {
            return <YTVideoComponent key={video.id.videoID} video={video} />
          })
        }
      </div>
    );
  }

});

module.exports = YTVideosComponent;

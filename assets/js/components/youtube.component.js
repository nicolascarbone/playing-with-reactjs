/** @jsx React.DOM */
var React         = require('react'),
		ReactBackbone	= require('react.backbone');

var YTComponent = React.createBackboneClass({

  render: function () {
    return (
      <div>
        {
          this.props.videos.map(function( video ) {
            return <div className="ui card">
              <div className="image">
                <img src={video.snippet.thumbnails.medium.url} />
              </div>
              <div className="content">
                <a className="header" href="https://www.youtube.com/watch?v={video.id.videoID}">
                  {video.snippet.title}
                </a>
                <div className="meta">
                  <span className="date">{video.snippet.publishedAt}</span>
                </div>
                <div className="description">
                  {video.snippet.description}
                </div>
              </div>
              <div className="extra content">
                <a>
                  <i className="user icon"></i>
                  2 Friends
                </a>
              </div>
            </div>
          })
        }
      </div>
    );
  }

});

module.exports = YTComponent;

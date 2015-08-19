/** @jsx React.DOM */
var React             = require('react'),
    ReactBackbone     = require('react.backbone'),
    YTVideosComponent = require('./youtube.component.js');


var YTCategoryComponent = React.createBackboneClass({

  render: function () {
    return (
      <div className="ui card">
        <div className="image">
          {this.props.category.snippet.title}
        </div>
        <div>
          <YTVideosComponent videos={this.props.videos} />
        </div>
      </div>
    );
  }

});


var YTCategoriesComponent = React.createBackboneClass({

  render: function () {
    return (
      <div>
        {
          this.props.categories.map(function( category ) {
            return <YTCategoryComponent key={category.id} category={category} videos={this.props.videos} />
          })
        }
      </div>
    );
  }

});

module.exports = YTCategoriesComponent;

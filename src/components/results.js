"use strict";

var React = require('react');

var ResultsRow = React.createClass({
  render: function() {
    return (
      <li>{this.props.item.Mets} minutes of {this.props.item.Activity}</li>
    );
  }
});

var Results = React.createClass({
  render: function() {
    var rows = [];
    this.props.results.forEach(function(item) {
      rows.push(<ResultsRow item={item} key={item.Activity} />);
    });
    return (
      <div className="row">
        <div className="results-main-col col-xs-12 col-sm-8 col-sm-push-2">
          <div className="results-main">
            <div className="form-head">
              <span className="glyphicon glyphicon-heart-empty"></span>
              &nbsp; Results
            </div>
            <div className="results">
              To burn off xxx calories, you'll have to do:
              <ul>{rows}</ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Results;
"use strict";

var React = require('react');

var ResultsRow = React.createClass({
  render: function() {
    return (
      <li>{this.props.item.time} minutes of {this.props.item.activity}</li>
    );
  }
});

var Results = React.createClass({
  render: function() {
    var rows = [];
    this.props.results.forEach(function(item) {
      rows.push(<ResultsRow item={item} key={item.activity} />);
    });
    return (
      <div className="row">
        <div className="col-xs-12 col-sm-8 col-sm-push-2">
          <div className="results-main">
            <div className="form-head">
              <span className="glyphicon glyphicon-cutlery"></span>
              &nbsp; Results
            </div>
            <div className="results">
              <ul>{rows}</ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Results;
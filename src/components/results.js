"use strict";

var React = require('react');

var ResultsRow = React.createClass({
  render: function() {
    return (
      <li><span className="highlight">{this.props.item.time}</span> of {this.props.item.activity}</li>
    );
  }
});

var Results = React.createClass({
  render: function() {
    var totCal = this.props.calculateTotalCalories();
    var rows = [];
    this.props.results.forEach(function(item) {
      rows.push(<ResultsRow item={item} key={item.activity} />);
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
              <p>You consumed a total of <span className="highlight">{totCal} calories</span>.  To work all of that off you'll have to do ALL of the following:</p>
              <ul>{rows}</ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Results;
"use strict";

var React = require('react');

var ResultsRow = React.createClass({
  render: function() {
    return (
      <li>
        <img src="../images/run.png" className="action-icon" />
        <span>
          <span className="highlight">{this.props.item.time}</span> of {this.props.item.activity}
        </span>
      </li>
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
              <p>You consumed a total of <span className="highlight">{totCal} calories</span>.
                <br />
               To work all of that off you'll have to do <span className="highlight">ALL of the following:</span></p>
              <ul>{rows}</ul>
              <div className="btn-div">
                <button className="btnstyle back" onClick={this.props.goBack}>Change Food</button>
                <button className="btnstyle next" onClick={this.props.calculateResults}>Retry</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Results;
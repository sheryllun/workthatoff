"use strict";

var React = require('react');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
var Popover = require('react-bootstrap').Popover;
var OverlayTrigger = require('react-bootstrap').OverlayTrigger;

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
    if(this.props.currentCard !== '3') {
      return false;
    }
    var totCal = this.props.calculateTotalCalories();
    var rows = [];
    this.props.results.forEach(function(item) {
      rows.push(<ResultsRow item={item} key={item.activity} />);
    });
    var seriousModeTip = (
      <Popover id="modeTooltip" title="Serious Mode??">
        <strong>Serious Mode!!</strong>
        <p>You'll only get one exercise and it will be something that is doable for the average person. Check the box and click "Gimme Another."</p>
      </Popover>
    );
    return (
      <ReactCSSTransitionGroup
        transitionName='card'
        transitionEnterTimeout={600}
        transitionAppearTimeout={600}
        transitionLeaveTimeout={600}
        transitionAppear={true}>
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
               To work all of that off, you'll have to do <span className="highlight">ALL of the following:</span></p>
              <ul>{rows}</ul>
              <div className="mode">
                <input type="checkbox" id="serious" onChange={this.props.toggleSeriousMode} checked={this.props.seriousMode}/>
                <label htmlFor="serious">
                  <span className="check"></span>
                  <span className="box"></span>
                  Activate Serious Mode
                </label>
                <OverlayTrigger trigger="click" rootClose placement="right" overlay={seriousModeTip}>
                  <img className="question-icon" src="../images/info.png" alt="More info"/>
                </OverlayTrigger>
              </div>
              <div className="btn-div">
                <button className="btnstyle back" onClick={this.props.goBack}>Change Food</button>
                <button className="btnstyle next" onClick={this.props.calculateResults}>Gimme Another</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </ReactCSSTransitionGroup>
    );
  }
});

module.exports = Results;
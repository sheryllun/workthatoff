"use strict";

var React = require('react');
var AboutYou = require('./aboutYou');
var AboutFood = require('./aboutFood');

var Form = React.createClass({
  render: function() {
    return (
      <div className="row">
        <div className="main-form col-xs-12 col-sm-8 col-sm-push-2">
          <AboutYou
            heightUnit={this.props.heightUnit}
            heightChange={this.props.heightChange}
            lengthLarge={this.props.lengthLarge}
            lengthSmall={this.props.lengthSmall}
          />
          <AboutFood />
        </div>
      </div>
      );
  }
});

module.exports = Form;
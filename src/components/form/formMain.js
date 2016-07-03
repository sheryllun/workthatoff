"use strict";

var React = require('react');
var AboutYou = require('./aboutYou');

var Form = React.createClass({
  render: function() {
    return (
      <div className="row">
        <div className="main-form col-xs-12 col-sm-8 col-sm-push-2">
          <AboutYou />
        </div>
      </div>
      );
  }
});

module.exports = Form;
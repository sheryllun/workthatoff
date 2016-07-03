"use strict";

var React = require('react');

var Header = React.createClass({
  render: function() {
    return (
      <div className="row">
        <div className="header col-xs-12">
          <h1>Work That Off</h1>
          <p>Figure out how much exercise you need to do to burn off what you ate.</p>
        </div>
      </div>
      );
  }
});

module.exports = Header;
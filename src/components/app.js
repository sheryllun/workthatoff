"use strict";

var React = require('react');
var Header = require('./header');
var Form = require('./form/formMain');

var App = React.createClass({
  render: function() {
    return (
      <div className="main container-fluid">
        <Header />
        <Form />
      </div>
    );
  }
});

module.exports = App;
"use strict";

var React = require('react');
var Header = require('./header');
var Form = require('./form/formMain');
var Results = require('./results');

var App = React.createClass({
  render: function() {
    return (
      <div className="main container-fluid">
        <Header />
        <Form />
        <Results results={this.props.results} />
      </div>
    );
  }
});

module.exports = App;
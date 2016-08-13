"use strict";

var React = require('react');
var Header = require('./header');
var Form = require('./form/formMain');
var Results = require('./results');

var App = React.createClass({
  getInitialState: function() {
    return {
      aboutAnswers: {
        heightUnit: '1',
        weightUnit: '1',
        age: '',
        gender: '',
        weight: '',
        heightLarge: '',
        heightSmall: ''
      },
      errors: {}
    };
  },
  setAboutState: function(e) {
    var field = e.target.name;
    var value = e.target.value;
    this.state.aboutAnswers[field] = value;
    return this.setState({aboutAnswers: this.state.aboutAnswers});
  },

  validateSection: function(section) {
    var valid = true;
    var formSection = this.state[section];
    this.state.errors = {};
    for(var item in formSection) {
      if(formSection[item].length <= 0) {
        this.state.errors[item] = "Required";
        valid = false;
      }
    }
    this.setState({errors: this.state.errors});
    return valid;
  },

  goNext: function(e) {
    var sectionName = e.target.name;
    var valid = this.validateSection(sectionName);
    if(!valid) {
      return;
    }
    //show food card
  },

  render: function() {
    return (
      <div className="main container-fluid">
        <Header />
        <Form
          max={this.state.aboutAnswers.heightUnit === "1" ? "12" : "100"}
          lengthLarge={this.state.aboutAnswers.heightUnit === "1" ? "ft" : "m"}
          lengthSmall={this.state.aboutAnswers.heightUnit === "1" ? "in" : "cm"}
          heightChange={this.onHeightChange}
          aboutAnswers={this.state.aboutAnswers}
          setAboutState={this.setAboutState}
          goNext={this.goNext}
          errors={this.state.errors}
        />
        <Results results={this.props.results} />
      </div>
    );
  }
});

module.exports = App;
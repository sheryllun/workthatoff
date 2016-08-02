"use strict";

var React = require('react');
var Header = require('./header');
var Form = require('./form/formMain');
var Results = require('./results');

var App = React.createClass({
  getInitialState: function() {
    return {
      lengthLarge: 'ft',
      lengthSmall: 'in',
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
  onHeightChange: function(e) {
    var selected = e.currentTarget.value;
    if(selected === "1") {
      this.setState({lengthLarge: 'ft', lengthSmall: 'in'});
    } else {
      this.setState({lengthLarge: 'm', lengthSmall: 'cm'});
    }
    this.setAboutState(e);
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
        this.state.errors[item] = "Please enter a response";
        valid = false;
      }
    }
    this.setState({errors: this.state.errors});
    return valid;
  },

  goNext: function(e) {
    var sectionToValidate = e.target.name;
    var valid = this.validateSection(sectionToValidate);
    if(!valid) {
      return;
    }
    console.log("to the next section");
  },

  render: function() {
    return (
      <div className="main container-fluid">
        <Header />
        <Form
          lengthLarge={this.state.lengthLarge}
          lengthSmall={this.state.lengthSmall}
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
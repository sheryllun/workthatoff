"use strict";

var React = require('react');

var Radio = React.createClass({
  propTypes: {
    group: React.PropTypes.string.isRequired,
    value1: React.PropTypes.string.isRequired,
    value2: React.PropTypes.string.isRequired,
    label1: React.PropTypes.string,
    label2: React.PropTypes.string,
    onChange: React.PropTypes.func,
    error: React.PropTypes.string,
    checked1: React.PropTypes.bool,
    checked2: React.PropTypes.bool
  },
  render: function() {
    return(
        <fieldset>
          <input type="radio"
            name={this.props.group}
            value={this.props.value1}
            onChange={this.props.onChange}
            checked={this.props.checked1} />
          <label htmlFor={this.props.group}>{this.props.label1}</label>
            <input type="radio"
              name={this.props.group}
              value={this.props.value2}
              onChange={this.props.onChange}
              checked={this.props.checked2} />
          <label htmlFor={this.props.group}>{this.props.label2}</label>
          <div className="input">{this.props.error}</div>
        </fieldset>
      );
  }
});

module.exports = Radio;
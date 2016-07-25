"use strict";

var React = require('react');

var Input = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    label: React.PropTypes.string,
    type: React.PropTypes.string.isRequired,
    min: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired,
    value: React.PropTypes.string,
    error: React.PropTypes.string,
    placeholder: React.PropTypes.string
  },
  render: function() {
    var wrapperClass = '';
    if(this.props.error && this.props.error.length > 0) {
      wrapperClass = 'has-error';
    }
    return(
      <div className={this.props.name}>
        <label htmlFor={this.props.name}>{this.props.label}</label>
        <input
          className={wrapperClass}
          name={this.props.name}
          type={this.props.type}
          min={this.props.min}
          value={this.props.value}
          placeholder={this.props.placeholder}
          onChange={this.props.onChange} />
          <div className="input">{this.props.error}</div>
      </div>
      );
  }
});

module.exports = Input;
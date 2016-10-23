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
          <div className="switch-toggle well">
            <input type="radio"
              id={this.props.label1}
              name={this.props.group}
              value={this.props.value1}
              onChange={this.props.onChange}
              checked={this.props.checked1} />
            <label htmlFor={this.props.label1}>{this.props.label1}</label>
              <input type="radio"
                id={this.props.label2}
                name={this.props.group}
                value={this.props.value2}
                onChange={this.props.onChange}
                checked={this.props.checked2} />
            <label htmlFor={this.props.label2}>{this.props.label2}</label>
            <a className="toggle-btn"></a>
          </div>
        </fieldset>
      );
  }
});

module.exports = Radio;
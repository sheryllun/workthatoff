"use strict";

var React = require('react');

var Radio = React.createClass({
  render: function() {
    return(
        <fieldset>
          <input type="radio"
            name={this.props.group}
            value={this.props.value1} 
            checked={this.props.checked} />
          <label htmlFor={this.props.group}>{this.props.label1}</label>

            <input type="radio"
              name={this.props.group}
              value={this.props.value2}
              checked={this.props.checked} />
          <label htmlFor={this.props.group}>{this.props.label2}</label>

        </fieldset>
      );
  }
});

module.exports = Radio;
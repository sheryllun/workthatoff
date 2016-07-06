"use strict";

var React = require('react');

var AboutFood = React.createClass({
  render: function() {
    return (
      <div className="about-food">
        <div className="form-head">
          <span className="glyphicon glyphicon-star-empty"></span>
          &nbsp; About What You Ate
        </div>
        <p>Add</p>
        <input name="food-item" type="text" />
      </div>
      );
  }
});

module.exports = AboutFood;
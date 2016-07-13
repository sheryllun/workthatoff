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
          <div className="questions">
          <div className="holder">
            <p>Start typing to search for a food.  Add up to 5 items.</p>
            <input name="food-item" type="text" />
          </div>
          <hr />
          <button className="btn btn-default next">Calculate!</button>
        </div>
      </div>
      );
  }
});

module.exports = AboutFood;
"use strict";

var React = require('react');

var AboutYou = React.createClass({
  render: function() {
    return (
      <div className="about-you">
        <div className="form-head">
          <span className="glyphicon glyphicon-star-empty"></span>
          &nbsp; About You
        </div>
        <div className="questions">
          <div className="age">
            <label htmlFor="age">Age: </label>
            <input name="age" type="text" />
          </div>
          <div className="gender">
            <label htmlFor="gender">Gender: </label>
            <input type="radio" value="1" name="gender" /> Male
            <input type="radio" value="2" name="gender" /> Female
          </div>
          <div className="weight">
            <label htmlFor="weight">Weight: </label>
            <input name="weight" type="text" />
            <input type="radio" value="1" name="unit" /> lb
            <input type="radio" value="2" name="unit" /> kg
          </div>
        </div>
      </div>
      );
  }
});

module.exports = AboutYou;
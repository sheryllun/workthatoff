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
            <input name="age" type="number" />
          </div>
          <div className="gender">
            <label htmlFor="gender">Gender: </label>
            <input type="radio" value="1" name="gender" />Male
            <input type="radio" value="2" name="gender" />Female
          </div>
          <div className="weight">
            <label htmlFor="weight">Weight: </label>
            <input name="weight" type="number" />
            <input type="radio" value="1" name="wt-unit" />Pounds
            <input type="radio" value="2" name="wt-unit" />Kilos
          </div>
          <div className="height">
            <label htmlFor="height">Height: </label>
            <input name="height" type="number" placeholder="ft" />
            <input name="height" type="number" placeholder="in" />
            <input type="radio" value="1" name="ht-unit" />Feet
            <input type="radio" value="2" name="ht-unit" />Meters
          </div>
          <hr />
          <button className="btn btn-default next">Next</button>
        </div>
      </div>
      );
  }
});

module.exports = AboutYou;
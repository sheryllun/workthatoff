"use strict";

var React = require('react');
var SearchList = require('./searchList');

var AboutFood = React.createClass({
  render: function() {
    var searchList = this.props.searchList;
    return (
      <div className="about-food">
        <div className="form-head">
          <span className="glyphicon glyphicon-cutlery"></span>
          &nbsp; About What You Ate
        </div>
          <div className="questions">
            <div className="holder">
              <p>Start typing to search for a food.  Add up to 5 items.</p>
              <input name="food-item" type="text" onChange={this.props.searchFood} />
              <SearchList searchList={searchList} />
            </div>
            <hr />
            <button className="btn btn-default back">Back</button>
            <button className="btn btn-default next">Calculate!</button>
          </div>
        </div>
      );
  }
});

module.exports = AboutFood;
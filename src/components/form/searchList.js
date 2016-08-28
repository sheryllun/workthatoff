"use strict";

var React = require('react');

var SearchItem = React.createClass({
  render: function() {
    return (
      <li onClick={this.props.selectFood} data-cals={this.props.food.calories} data-id={this.props.food.id}>
        {this.props.food.name}, {this.props.food.quantity} {this.props.food.unit}
      </li>
    );
  }
});

var SearchList = React.createClass({
  render: function() {
    var selectFood = this.props.selectFood;
    var rows = [];
    this.props.searchList.forEach(function(food) {
      rows.push(<SearchItem food={food} key={food.id} selectFood={selectFood} />);
    });
    return (
      <ul className="search-list">
        {rows}
      </ul>
    );
  }
});

module.exports = SearchList;
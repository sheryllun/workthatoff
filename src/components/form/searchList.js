"use strict";

var React = require('react');

var SearchItem = React.createClass({
  render: function() {
    return (
      <li className="">
        {this.props.food.name}, {this.props.food.quantity} {this.props.food.unit}
      </li>
    );
  }
});

var SearchList = React.createClass({
  render: function() {
    var rows = [];
    this.props.searchList.forEach(function(food) {
      rows.push(<SearchItem food={food} key={food.id} />);
    });
    return (
      <ul className="search-list">
        {rows}
      </ul>
    );
  }
});

module.exports = SearchList;
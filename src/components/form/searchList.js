"use strict";

var React = require('react');

var SearchItem = React.createClass({
  render: function() {
    var food = this.props.food;
    return (
      <li onClick={this.props.selectFood.bind(null, food)} data-cals={food.calories} data-id={food.id}>
        {food.name}, {food.quantity} {food.unit}
      </li>
    );
  }
});

var SearchList = React.createClass({
  componentDidMount: function() {
    document.addEventListener('click', this.props.hideList);
  },
  componentWillUnmount: function() {
    document.removeEventListener('click', this.props.hideList);
  },
  render: function() {
    var className = 'search-list';
    className += this.props.searchShown ? ' open' : '';
    var selectFood = this.props.selectFood;
    var rows = [];
    this.props.searchList.forEach(function(food) {
      rows.push(<SearchItem food={food} key={food.id} selectFood={selectFood} />);
    });
    return (
      <ul className={className}>
        {rows}
      </ul>
    );
  }
});

module.exports = SearchList;
"use strict";

var React = require('react');

var FoodItem = React.createClass({
  render: function() {
    var item = this.props.food;
    var totalCals = item.servings * item.calories;

    return(
      <div className='food-item'>
        {item.name}<br /> {item.servings} servings, {totalCals} total calories
      </div>
      );
  }
});

var FoodList = React.createClass({
  render: function() {
    var foodList = this.props.foodList;
    var rows = [];
    foodList.forEach(function(food) {
      rows.push(<FoodItem food={food} />);
    });
    return (
      <div className="list-of-food">
        {rows}
      </div>
    );
  }
});

module.exports = FoodList;
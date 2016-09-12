"use strict";

var React = require('react');

var FoodItem = React.createClass({
  render: function() {
    var item = this.props.food;
    var index = this.props.index;
    var totalCals = item.servings * item.calories;
    return(
      <div className='food-item' data-id={item.id}>
        {item.name}<br /> {item.servings} servings, {totalCals} total calories
        <span className="glyphicon glyphicon-remove" onClick={this.props.removeFromFoodList.bind(null, index)}></span>
      </div>
      );
  }
});

var FoodList = React.createClass({
  render: function() {
    var foodList = this.props.foodList;
    var removeFromFoodList = this.props.removeFromFoodList;
    var rows = [];
    foodList.forEach(function(food, i) {
      rows.push(<FoodItem food={food} key={i} index={i} removeFromFoodList={removeFromFoodList} />);
    });
    return (
      <div className="list-of-food">
        {rows}
      </div>
    );
  }
});

module.exports = FoodList;
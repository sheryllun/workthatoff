"use strict";

var React = require('react');
var SearchList = require('./searchList');
var FoodList = require('./foodList');

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
              <input name="food-item" type="text" onChange={this.props.searchFood} value={this.props.searchedText} disabled={this.props.foodList.length >= 5}/>
              <input type="number" placeholder="servings" onChange={this.props.setServings} value={this.props.servingsText} disabled={this.props.foodList.length >= 5}/>
              <span className={"glyphicon glyphicon-plus " + (this.props.foodList.length >= 5 ? "hidden" : "")} onClick={this.props.addToFoodList}></span>
              <SearchList
                selectFood={this.props.selectFood}
                searchList={searchList} />
              <FoodList
                foodList={this.props.foodList}
                removeFromFoodList={this.props.removeFromFoodList}/>
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
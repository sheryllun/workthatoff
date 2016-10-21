"use strict";

var React = require('react');
var SearchList = require('./searchList');
var FoodList = require('./foodList');
var Input = require('../common/textinput');

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
            <p>Start typing to search for a food.  Add up to 5 items.</p>
            <Input
              name="food-input"
              className="foodinput"
              type="text"
              min="1"
              label="Search food"
              value={this.props.searchedText}
              onChange={this.props.searchFood}
              disabled={this.props.foodList.length >= 5}
              error={this.props.errors.foodinput} />

              <Input
                name="num-svgs"
                className="numsvgs"
                type="number"
                min="1"
                label="servings"
                value={this.props.servingsText}
                onChange={this.props.setServings}
                disabled={this.props.foodList.length >= 5}
                error={this.props.errors.servings} />

              <span className={"glyphicon glyphicon-plus " + (this.props.foodList.length >= 5 ? "hidden" : "")} onClick={this.props.addToFoodList}></span>
              <SearchList
                selectFood={this.props.selectFood}
                searchList={searchList} />
              <FoodList
                foodList={this.props.foodList}
                removeFromFoodList={this.props.removeFromFoodList}/>
          
            <button className="btnstyle back">Back</button>
            <button className="btnstyle next" onClick={this.props.calculateResults}>Calculate!</button>
          </div>
        </div>
      );
  }
});

module.exports = AboutFood;
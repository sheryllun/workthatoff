"use strict";

var React = require('react');
var SearchList = require('./searchList');
var FoodList = require('./foodList');
var Input = require('../common/textinput');

var AboutFood = React.createClass({
  hideAddButton: function() {
    if(this.props.foodList.length >= 5 || this.props.searchedText === '' || this.props.servingsText === '') {
      return true;
    }
    return false;
  },
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

              <img src="../images/plus.png" className={"add-btn " + (this.hideAddButton() ? "hidden" : "")} onClick={this.props.addToFoodList} />
              <SearchList
                selectFood={this.props.selectFood}
                searchList={searchList} />
              <FoodList
                foodList={this.props.foodList}
                removeFromFoodList={this.props.removeFromFoodList}/>
            <div className="btn-div">
              <button className="btnstyle back">Back</button>
              <button className="btnstyle next" onClick={this.props.calculateResults} disabled={this.props.foodList.length <= 0}>Calculate!</button>
            </div>
          </div>
        </div>
      );
  }
});

module.exports = AboutFood;
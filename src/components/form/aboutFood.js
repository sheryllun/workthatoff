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
            <div className="holder">
              <p>Start typing to search for a food.  Add up to 5 items.</p>
              <Input
                name="food-input"
                type="text"
                min="1"
                placeholder="Search food"
                value={this.props.searchedText}
                onChange={this.props.searchFood}
                disabled={this.props.foodList.length >= 5}
                error={this.props.errors.foodinput} />

                <Input
                  name="num-svgs"
                  type="number"
                  min="1"
                  placeholder="servings"
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
            </div>
            <hr />
            <button className="btn btn-default back">Back</button>
            <button className="btn btn-default next" onClick={this.props.calculateResults}>Calculate!</button>
          </div>
        </div>
      );
  }
});

module.exports = AboutFood;
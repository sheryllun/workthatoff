"use strict";

var React = require('react');
var SearchList = require('./searchList');
var FoodList = require('./foodList');
var Input = require('../common/textinput');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

var AboutFood = React.createClass({
  hideAddButton: function() {
    if(this.props.foodList.length >= 5 || this.props.searchedText === '' || this.props.servingsText === '') {
      return true;
    }
    return false;
  },
  render: function() {
    if(this.props.currentCard !== '2') {
      return false;
    }
    var searchList = this.props.searchList;
    return (
      <ReactCSSTransitionGroup
        transitionName='card'
        transitionEnterTimeout={600}
        transitionAppearTimeout={600}
        transitionLeaveTimeout={600}
        transitionAppear={true}>
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
                showList={this.props.showList}
                hideList={this.props.hideList}
                searchShown={this.props.searchShown}
                selectFood={this.props.selectFood}
                searchList={searchList} />
              <FoodList
                foodList={this.props.foodList}
                removeFromFoodList={this.props.removeFromFoodList}/>
            <div className="btn-div">
              <button className="btnstyle back" onClick={this.props.goBack}>Back</button>
              <button className="btnstyle next" onClick={this.props.calculateResults} disabled={this.props.foodList.length <= 0}>Calculate!</button>
            </div>
          </div>
        </div>
        </ReactCSSTransitionGroup>
      );
  }
});

module.exports = AboutFood;
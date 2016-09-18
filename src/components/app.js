"use strict";

var React = require('react');
var Header = require('./header');
var Form = require('./form/formMain');
var Results = require('./results');
var update = require('react-addons-update');

var App = React.createClass({
  getInitialState: function() {
    return {
      aboutAnswers: {
        heightUnit: '1',
        weightUnit: '1',
        age: '',
        gender: '',
        weight: '',
        heightLarge: '',
        heightSmall: ''
      },
      foodList: [],
      searchList: [],
      tempSelection: {},
      searchedText: '',
      servingsText: '',
      errors: {}
    };
  },
  setAboutState: function(e) {
    var field = e.target.name;
    var value = e.target.value;
    this.state.aboutAnswers[field] = value;
    return this.setState({aboutAnswers: this.state.aboutAnswers});
  },

  validateSection: function(section) {
    var valid = true;
    var formSection = this.state[section];
    this.state.errors = {};
    for(var item in formSection) {
      if(formSection[item].length <= 0) {
        this.state.errors[item] = "Required";
        valid = false;
      }
    }
    this.setState({errors: this.state.errors});
    return valid;
  },

  goNext: function(e) {
    var sectionName = e.target.name;
    var valid = this.validateSection(sectionName);
    if(!valid) {
      return;
    }
    //show food card
  },

  searchFood: function(e) {
    var search = e.target.value;
    this.setState({searchedText: search});

    if(search.length < 2) {
      this.setState({searchList: []});
      return;
    }
    var params = {
      results: '0:10',
      fields: '*',
      appKey: '0fb276d93ce6f301cb6c0654e8a7206e',
      appId: 'b898ecf9'
    };

    $.ajax({
      url: 'https://api.nutritionix.com/v1_1/search/' + search,
      data: params,
      success: (function(data) {
        if(data.hits.length > 0) {
          var food = data.hits;
          for(var i = 0; i < food.length; i++) {
            this.state.searchList[i] = {
              name: food[i].fields.brand_name + ' ' + food[i].fields.item_name,
              calories: (food[i].fields.nf_calories).toFixed(),
              quantity: food[i].fields.nf_serving_size_qty,
              unit: food[i].fields.nf_serving_size_unit,
              id: food[i]._id,
              servings: 1
            };
          }
          this.setState({searchList: this.state.searchList});
        }
      }).bind(this),
      error: function() {
        console.log('error');
      }
    });
  },
  selectFood: function(item) {
    this.setState({
      tempSelection: {
        name: item.name,
        id: item.id,
        calories: item.calories,
        quantity: item.quantity,
        unit: item.unit,
        servings: item.servings
      },
      searchList: [],
      searchedText: item.name
    });
  },
  setServings: function(e) {
    var value = e.target.value;
    this.setState({servingsText: value});
  },
  addToFoodList: function() {
    var servings = this.state.servingsText;
    if(servings.length <= 0) {
      console.log("Please enter number of servings");
      return;
    }
    //use react addons update to manage the nested servings property of 
    //tempSelection, then update the rest of the state in a callback function
    this.setState({
      tempSelection: update(this.state.tempSelection, {servings: {$set: servings}})
    }, function() {
      this.setState({
        foodList: this.state.foodList.concat([this.state.tempSelection]),
        tempSelection: {},
        searchedText: '',
        searchedId: '',
        servingsText: ''
      });
    });
  },
  removeFromFoodList: function(e) {
    var index = e;
    this.setState({
      foodList: update(this.state.foodList, {$splice: [[index, 1]]})
    });
  },

  calculateResults: function() {
    var bmr = this.calcBMR();
    var totalCalories = this.calculateTotalCalories();
    console.log(totalCalories);
  },
  convertToKg: function(weight) {
    return parseInt((weight * 0.453592).toFixed(0));
  },
  convertToCm: function() {
    var finalHeight;
    var heightLarge = parseInt(this.state.aboutAnswers.heightLarge);
    var heightSmall = parseInt(this.state.aboutAnswers.heightSmall);
    if(this.state.aboutAnswers.heightUnit === '1') {
      var feetToInches = heightLarge * 12;
      finalHeight = ((feetToInches + heightSmall) * 2.54).toFixed(0);
    } else {
      finalHeight = (heightLarge * 100) + heightSmall;
    }
    return finalHeight;
  },
  calcBMR: function() {
    var weight = parseInt(this.state.aboutAnswers.weight);
    var height = this.convertToCm();
    var bmr;
    if(this.state.aboutAnswers.weightUnit === '1') {
      weight = this.convertToKg(weight);
    }

    if(this.state.aboutAnswers.gender === '1') {
      bmr = (13.75 * weight) + (5 * height) - (6.76 * this.state.aboutAnswers.age) + 66;
    } else {
      bmr = (9.56 * weight) + (1.85 * height) - (4.68 * this.state.aboutAnswers.age) + 655;
    }
    return bmr;
  },
  calculateTotalCalories: function() {
    var totCals = this.state.foodList.map(function(obj) {
      var qty = parseInt(obj.servings);
      var cals = parseInt(obj.calories);
      return qty * cals;
    });
    var sum = totCals.reduce(function(a,b) { return a + b; }, 0);
    return sum;
  },
  render: function() {
    return (
      <div className="main container-fluid">
        <Header />
        <Form
          max={this.state.aboutAnswers.heightUnit === "1" ? "12" : "100"}
          lengthLarge={this.state.aboutAnswers.heightUnit === "1" ? "ft" : "m"}
          lengthSmall={this.state.aboutAnswers.heightUnit === "1" ? "in" : "cm"}
          aboutAnswers={this.state.aboutAnswers}
          setAboutState={this.setAboutState}
          goNext={this.goNext}
          errors={this.state.errors}
          searchFood={this.searchFood}
          searchList={this.state.searchList}
          selectFood={this.selectFood}
          servingsText={this.state.servingsText}
          setServings={this.setServings}
          searchedText={this.state.searchedText}
          addToFoodList={this.addToFoodList}
          removeFromFoodList={this.removeFromFoodList}
          foodList={this.state.foodList}
          calculateResults={this.calculateResults}
        />
        <Results results={this.props.results} />
      </div>
    );
  }
});

module.exports = App;
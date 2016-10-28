"use strict";

var React = require('react');
var Input = require('../common/textinput');
var Radio = require('../common/radioset');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

var AboutYou = React.createClass({
  render: function() {
    if(this.props.currentCard !== '1') {
      return false;
    }
    return (
      <ReactCSSTransitionGroup 
        transitionName='card'
        transitionEnterTimeout={600}
        transitionAppearTimeout={600}
        transitionLeaveTimeout={600}
        transitionAppear={true}>
      <div className="about-you">
        <div className="form-head">
          <span className="glyphicon glyphicon-star-empty"></span>
          &nbsp; About You
        </div>
        <div className="questions">
          <div className="age">
            <Input
              name="age"
              label="Age"
              type="number"
              min="1"
              value={this.props.aboutAnswers.age}
              onChange={this.props.setAboutState}
              error={this.props.errors.age} />
          </div>

          <div className="gender">
            <label htmlFor="gender">Gender: </label>
            <Radio
              group="gender"
              value1="1"
              label1="Male"
              value2="2"
              label2="Female"
              checked1={this.props.aboutAnswers.gender === "1"}
              checked2={this.props.aboutAnswers.gender === "2"}
              onChange={this.props.setAboutState}
              error={this.props.errors.gender} />
          </div>

          <div className="weightDiv">
              <Radio
                group="weightUnit"
                value1="1"
                label1="Pounds"
                value2="2"
                label2="Kilos"
                checked1={this.props.aboutAnswers.weightUnit === "1"}
                checked2={this.props.aboutAnswers.weightUnit === "2"}
                onChange={this.props.setAboutState} />

            <Input
              name="weight"
              label="Weight"
              type="number"
              min="1"
              value={this.props.aboutAnswers.weight}
              onChange={this.props.setAboutState}
              error={this.props.errors.weight} />
          </div>
          <div className="heightDiv">
              <Radio
                group="heightUnit"
                checked1={this.props.aboutAnswers.heightUnit === "1"}
                checked2={this.props.aboutAnswers.heightUnit === "2"}
                onChange={this.props.setAboutState}
                value1="1"
                label1="Feet"
                value2="2"
                label2="Meters" />

            <Input
              name="heightLarge"
              type="number"
              min="1"
              label={this.props.lengthLarge}
              value={this.props.aboutAnswers.heightLarge}
              onChange={this.props.setAboutState}
              error={this.props.errors.heightLarge} />
            <Input
              name="heightSmall"
              type="number"
              min="0"
              max={this.props.max}
              label={this.props.lengthSmall}
              value={this.props.aboutAnswers.heightSmall}
              onChange={this.props.setAboutState}
              error={this.props.errors.heightSmall}/>
          </div>
          <button className="btnstyle next" name="aboutAnswers" onClick={this.props.goNext} >Next</button>
        </div>
      </div>
      </ReactCSSTransitionGroup>
      );
  }
});

module.exports = AboutYou;
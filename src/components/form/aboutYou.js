"use strict";

var React = require('react');
var Input = require('../common/textinput');
var Radio = require('../common/radioset');

var AboutYou = React.createClass({
  render: function() {
    return (
      <div className="about-you">
        <div className="form-head">
          <span className="glyphicon glyphicon-star-empty"></span>
          &nbsp; About You
        </div>
        <div className="questions">
          <Input
            name="age"
            label="Age:"
            type="number"
            min="1"
            value={this.props.aboutAnswers.age}
            onChange={this.props.setAboutState}
            error={this.props.errors.age} />

          <div className="gender">
            <label htmlFor="gender">Gender: </label>
            <Radio
              group="gender"
              value1="1"
              label1="Male"
              value2="2"
              label2="Female"
              onChange={this.props.setAboutState}
              error={this.props.errors.gender} />
          </div>

          <div className="weightDiv">
            <Input
              name="weight"
              label="Weight:"
              type="number"
              min="1"
              value={this.props.aboutAnswers.weight}
              onChange={this.props.setAboutState}
              error={this.props.errors.weight} />

              <Radio
                group="weightUnit"
                value1="1"
                label1="Pounds"
                value2="2"
                label2="Kilos"
                checked1={this.props.aboutAnswers.weightUnit === "1"}
                checked2={this.props.aboutAnswers.weightUnit === "2"}
                onChange={this.props.setAboutState} />
          </div>
          <div className="heightDiv">
            <Input
              name="heightLarge"
              label="Height:"
              type="number"
              min="1"
              placeholder={this.props.lengthLarge}
              value={this.props.aboutAnswers.heightLarge}
              onChange={this.props.setAboutState}
              error={this.props.errors.heightLarge} />
            <Input
              name="heightSmall"
              type="number"
              min="0"
              max={this.props.max}
              placeholder={this.props.lengthSmall}
              value={this.props.aboutAnswers.heightSmall}
              onChange={this.props.setAboutState}
              error={this.props.errors.heightSmall}/>

              <Radio
                group="heightUnit"
                checked1={this.props.aboutAnswers.heightUnit === "1"}
                checked2={this.props.aboutAnswers.heightUnit === "2"}
                onChange={this.props.setAboutState}
                value1="1"
                label1="Feet"
                value2="2"
                label2="Meters" />
          </div>
          <hr />
          <button className="btn btn-default next" name="aboutAnswers" onClick={this.props.goNext} >Next</button>
        </div>
      </div>
      );
  }
});

module.exports = AboutYou;
"use strict";

var React = require('react');
var Modal = require('react-bootstrap').Modal;

var Footer = React.createClass({
  render: function() {
    return (
      <div className="row">
        <Modal show={this.props.modalShown} onHide={this.props.hideModal}>
          <Modal.Header closeButton>
            <Modal.Title>Answers to Questions</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h3>How does this work?</h3>
            <p>First we calculate your Basal Metabolic Rate (BMR), which essentially is all the energy your body uses to stay alive.
              <em>
                <strong>Women: </strong>
                BMR = ( 9.56 x weight kg ) + ( 1.85 x height cm ) - ( 4.68 x age ) + 655
              </em>
              <em>
                <strong>Men: </strong>
                BMR = ( 13.75 x weight kg ) + ( 5 x height cm ) - ( 6.76 x age ) + 66
              </em>
            </p>
            <p>
              Using <a href="https://sites.google.com/site/compendiumofphysicalactivities/home" target="_blank">The Compendium of Physical Activities Tracking Guide 2011</a> by B.E. Ainsworth, we take the Metabolic Equivalent (MET) data to calculate the exercise results. A MET value represents the ratio of energy (calories) required to perform a particular activiy relative to your BMR. Sitting quietly is equal to 1 MET. Mountain biking is equal to 8.5 METs.
            </p>
            <p>
              A random range from 1 - 5 is picked and the corresponding number of activities are chosen at random from the compendium. The total number of calories from the list of food is evenly divided by the number of activities there are.
            </p>
            <p>
              To calculate the time needed to perform each activity in order to burn a certain number of calories, we used the following equation:
              <em>
                Time (in hours) = calories to burn / ((BMR / 24) * MET of activity)
              </em>
            </p>
            <h3>Why does this exist?</h3>
            <p>
              I was inspired to create this calculator after reading <a href="http://www.telegraph.co.uk/news/health/12101397/Food-labels-should-show-how-much-exercise-would-burn-off-calories.html" target="_blank">an article</a> about nutrition labels in the UK possibly showing how long a person would need to run to burn off the calories being consumed. I was surprised by how much work was needed to burn off a candy bar and thought it would be great to experiment with a number of different activities.
            </p>
            <p>
              I am not a trainer, physician, or nutritionist. I did a lot of research to make this calculator as accurate as possible, but the information provided is intended just for fun and not to take the place of any professional advice.
            </p>
          </Modal.Body>
        </Modal>
        <footer className="col-xs-12">
          <ul>
            <li><a href="#" onClick={this.props.showModal}>How does this work?</a> |</li>
            <li><a href="http://www.github.com/sheryllun/workthatoff" target="_blank">Made with love &hearts;</a> |</li>
            <li><a href="https://sheryllun.wordpress.com/about/" target="_blank">Contact me</a></li>
          </ul>
        </footer>
      </div>
    );
  }
});

module.exports = Footer;
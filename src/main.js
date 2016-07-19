$ = jQuery = require('jquery'); //requiring jquery in the global namespace for bootstrap
var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./components/app');

var RESULTS = [
  {activity: "Walking, 2.5 mi/hr", time: 120},
  {activity: "Snowboarding", time: 10},
  {activity: "Dancing, Latin", time: 50}
];

ReactDOM.render(<App results={RESULTS} />, document.getElementById('app'));
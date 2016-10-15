$ = jQuery = require('jquery'); //requiring jquery in the global namespace for bootstrap
var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./components/app');

ReactDOM.render(<App />, document.getElementById('app'));
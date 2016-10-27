"use strict";

var React = require('react');

var Footer = React.createClass({
  render: function() {
    return (
      <div className="row">
        <footer className="col-xs-12">
          <ul>
            <li><button>How does this work?</button> |</li>
            <li><a href="http://www.github.com/sheryllun/workthatoff" target="_blank">Made with love &hearts;</a> |</li>
            <li><a href="https://sheryllun.wordpress.com/about/" target="_blank">Contact me</a></li>
          </ul>
        </footer>
      </div>
    );
  }
});

module.exports = Footer;
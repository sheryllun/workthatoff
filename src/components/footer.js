"use strict";

var React = require('react');
var Modal = require('react-bootstrap').Modal;

var Footer = React.createClass({
  render: function() {
    return (
      <div className="row">
        <Modal show={this.props.modalShown} onHide={this.props.hideModal}>
          <Modal.Header closeButton>
            <Modal.Title>How does this work?</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
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
'use strict';

var React = require('react/addons');
var HelloWorld = require('./hello_world');

var HelloName = React.createClass({
  render() {
    return (
      <div>
        <HelloWorld name="Andrew"/>
        <HelloWorld name="Deny"/>
      </div>
    );
  }
});

module.exports = HelloName;

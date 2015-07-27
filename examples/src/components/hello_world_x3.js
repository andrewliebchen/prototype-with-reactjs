'use strict';

var React = require('react/addons');
var HelloWorld = require('./hello_world');

var HelloWorldx3 = React.createClass({
  render() {
    return (
      <div>
        <HelloWorld/>
        <HelloWorld/>
        <HelloWorld/>
      </div>
    );
  }
});

module.exports = HelloWorldx3;

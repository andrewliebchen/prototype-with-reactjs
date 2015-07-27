'use strict';

var React = require('react');

var HelloWorld = require('./hello_world');
var HelloWorldx3 = require('./hello_world_x3');
var HelloName = require('./hello_name');
var HelloWorldDefinition = require('./definition');

require('../styles/main.css');

var App = React.createClass({
  getInitialState() {
    return {
      example: 0
    };
  },

  handleNext() {
    this.setState({example: this.state.example + 1});
  },

  handleBack() {
    this.setState({example: this.state.example - 1});
  },

  render() {
    return (
      <div className="wrapper">
        {this.state.example === 0 ? <HelloWorld/> : null}
        {this.state.example === 1 ? <HelloWorldx3/> : null}
        {this.state.example === 2 ? <HelloName/> : null}
        {this.state.example === 3 ? <HelloWorldDefinition/> : null}

        {this.state.example < 3 ? <a className="page next" onClick={this.handleNext}>Next</a> : null}
        {this.state.example > 0 ? <a className="page back" onClick={this.handleBack}>Back</a> : null}
      </div>
    );
  }
});

React.render(<App/>, document.getElementById('content'));

module.exports = App;

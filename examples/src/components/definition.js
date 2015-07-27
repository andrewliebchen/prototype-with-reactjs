'use strict';

var React = require('react/addons');

var HelloWorldDefinition = React.createClass({
  getInitialState() {
    return {
      definition: false
    };
  },

  handleDefinitionToggle() {
    this.setState({definition: !this.state.definition});
  },

  render() {
    return (
      <dl className="hello-world">
        <dt>Hello World!</dt>
        {this.state.definition ?
          <dd>A computer program that outputs "Hello, World!" (or some variant thereof) on a display device. Because it is typically one of the simplest programs possible in most programming languages, it is by tradition often used to illustrate to beginners the most basic syntax of a programming language.</dd>
        : null}
        <button onClick={this.handleDefinitionToggle}>Toggle definition</button>
      </dl>
    );
  }
});

module.exports = HelloWorldDefinition;

'use strict';

var React = require('react/addons');

var HelloWorld = React.createClass({
  getDefaultProps() {
    return {
      name: 'World'
    };
  },

  render() {
    return (
      <div className="hello-world">
        <p>Hello, {this.props.name}!</p>
      </div>
    );
  }
});

module.exports = HelloWorld;

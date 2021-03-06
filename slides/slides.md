name: inverse
layout: true
class: center, middle, inverse
---
class: title
# Design prototypes with ReactJS
---
class: title
# Why Prototype?
---
## Your mockup never looks like the browser
---
## Easier to find states, paths, and “corners” you might have missed...
---
## ...Becase instead of describing things with “keyframes,” you describe them with the actual thing
---
## Screen size flexibility
---
class: title
# Why ReactJS?
---
First, do you know know what [React](https://facebook.github.io/react/) is?
---
## Prototyping applications in the browser is tough...
---
### 1. Hard to reuse stuff
---
### 2. Hard to work with data
---
### 3. Hard to make things do things
---
## React has just enough out of the box to build a real fake web app...
---
### 1. ~~Hard to reuse stuff~~
Use React components.
---
### 3. ~~Hard to work with data~~
Use React's `props`.
---
### 4. ~~Hard to make things do things~~
Use React's `state` and events.
---
class: title
# So, learn these four things...
---
## Components, props, state, and events
---

## 1. Components
---
Components are like widgets or modules: they are the building blocks of a UI. They make it easier to use stuff.
---
React encourages you to think of your UI as being composed of the smallest possible components you can define.
---
Use JSX to create components in an HTML-like syntax, make them reusable, and combine them into larger UIs.
---
```js
var HelloWorld = React.createClass({
  render() {
    return (
      <div className="hello-world">
        <p>Hello world!</p>
      </div>
    );
  }
});
```
---
```js
var HelloWorld = React.createClass({
  render() {
    return (
      <div className="hello-world">
        <p>Hello world!</p>
      </div>
    );
  }
});

var App = React.createClass({
  render() {
    return (
      <section>
        <HelloWorld/>
        <HelloWorld/>
        <HelloWorld/>
      </section>
    );
  }
});
```
---

## 2. Props
---
Props = properties
---
They’re kind of like HTML attributes
---
```html
<div class="foo" data-bar="bat">Wut</div>
```
---
Use props to pass information down to components...
---
...this information can be used to change or define content, behavior, or actions
---
Props are defined when a component is rendered
---
```js
var HelloWorld = React.createClass({
  render() {
    return (
      <div className="hello-world">
        <p>Hello {this.props.name}!</p>
      </div>
    );
  }
});
```
---
```js
var HelloWorld = React.createClass({
  render() {
    return (
      <div className="hello-world">
        <p>Hello {this.props.name}!</p>
      </div>
    );
  }
});

var App = React.createClass({
  render() {
    return (
      <section>
        <HelloWorld name="Andrew"/>
      </section>
    );
  }
});
```
---

## 3. State
---
Each component has it’s own `state`
---
`state` is _reactive_...so if you update `state`, the component re-renders
---
You can use `state` to do basic things like open/close dropdowns, or complex things like simulate a database in the browser
---
In real React applications, `state` is dangerous, and best to be avoided. In prototypes, it’s your best friend
---
```js
var Example = React.createClass({
  getInitialState() {
    return {
      definition: false
    };
  },

  render() {
    return (
      <dl className="hello-world">
        <dt>Hello World!</dt>
        {this.state.definition ?
          <dd>A computer program that outputs "Hello, World!" (or some variant thereof) on a display device. Because it is typically one of the simplest programs possible in most programming languages, it is by tradition often used to illustrate to beginners the most basic syntax of a programming language.</dd>
        : null}
      </dl>
    );
  }
});
```
---
This example isn't particularly interesting without...
---

## 4. Events
---
Events allow you to do things
---
Events can be assigned to any element, and there are a ton of event types available out of the box
---
__Common case:__ click on a button, update the component’s state
---
```js
var Example = React.createClass({
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
```
---
Forget about CSS, let the virtual DOM do the work
---
```js
// Maybe you've done it this way in the past...
$('.dropdown-menu').addClass('is-hidden');

// Or...
$('.dropdown-menu').hide();

// But in React you can...
var Dropdown = React.createClass({
  render() {
    return (
      <div className="dropdown">
        <button onClick={this.handleDropdownToggle}>More options</button>
        {this.state.dropdown ?
          <div className="dropdown-menu">...</div>
        : null}
      </div>
    );
  }
});
```
---
class: title
# Resources
---
[React's basic tutorial](https://facebook.github.io/react/docs/tutorial.html)
---
A nice [series of articles](https://medium.com/react-tutorials) on Medium
---
[React + Webpack Yeoman generator](https://github.com/newtriks/generator-react-webpack)
---
[Static site generator with React and Webpack](http://jxnblk.com/writing/posts/static-site-generation-with-react-and-webpack/) by [@jxnblk](https://twitter.com/jxnblk)
---
Ask me questions on Twitter: [@andrewliebchen](https://twitter.com/andrewliebchen)

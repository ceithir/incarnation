import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Game from './components/Game.js';

const title = `Incarnation`;
const sections = {
  "intro" : {
    "text": `<p>Test</p>`,
    "next": (goToSection) => {
      return (
        <a onClick={() => {goToSection("first");}}>Next</a>
      );
    },
  },
  "first" : {
    "text": (flags) => {return `<p>Hello ${flags.name}</p>`;},
    "next": (goToSection) => {
      return (
        <ul>
          <li><a onClick={() => {goToSection("first", {"name": Math.random().toString()});}}>Another name</a></li>
          <li><a onClick={() => {goToSection("second");}}>Next</a></li>
        </ul>
      );
    },
  },
  "second" : {
    "text": (flags) => {return `<p>To be continued</p>`;},
    "next": (goToSection) => {},
  },
};
const startingSection = "intro";
const startingFlags = {"name": "Foo"};

class App extends Component {
  render() {
    return (
      <Game
        title={title}
        sections={sections}
        startingSection={startingSection}
        startingFlags={startingFlags}
      />
    );
  }
}

export default App;

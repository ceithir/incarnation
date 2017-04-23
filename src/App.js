import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Game from './components/Game.js';
import sections from './scripts/script.js';

const title = `Incarnation`;
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

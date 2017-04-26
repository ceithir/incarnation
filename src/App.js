import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Game from './components/Game.js';
import sections from './scripts/script.js';
import flags from './scripts/flags.js';

const title = `Incarnation`;
const startingSection = "intro";

class App extends Component {
  render() {
    return (
      <Game
        title={title}
        sections={sections}
        startingSection={startingSection}
        startingFlags={flags}
      />
    );
  }
}

export default App;

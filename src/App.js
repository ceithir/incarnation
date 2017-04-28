import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Game from './components/Game.js';
import sections from './scripts/script.js';
import flags from './scripts/flags.js';
import endings from './scripts/endings.js';

const title = `Incarnation`;
const startingSection = "intro";

class App extends Component {
  loadProgress = () => {
    return Object.assign(
      {},
      {
        "section": startingSection,
        "flags": flags,
        "logs": [],
      },
      JSON.parse(window.localStorage.getItem("progress")) || {}
    );
  }

  saveProgress = (section, flags, logs) => {
    window.localStorage.setItem(
      "progress",
      JSON.stringify({
        "section": section,
        "flags": flags,
        "logs": logs,
      })
    );
  }

  clearProgress = () => {
    window.localStorage.removeItem("progress");
  }

  render() {
    const progress = this.loadProgress();

    return (
      <Game
        title={title}
        sections={sections}
        startingSection={startingSection}
        startingFlags={flags}
        currentSection={progress.section}
        currentFlags={progress.flags}
        currentLogs={progress.logs}
        saveProgress={this.saveProgress}
        endings={endings}
      />
    );
  }
}

export default App;

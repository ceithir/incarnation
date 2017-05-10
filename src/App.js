import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Game from './components/Game.js';
import sections from './scripts/script.js';
import flags from './scripts/flags.js';
import endings from './scripts/endings.js';
import Storage from './Storage.js';

const storage = new Storage("rEcqfXCg9717KmMVWkBVNa4pvv0aiE3L");

const title = `Incarnation`;
const startingSection = "intro";

class App extends Component {
  loadProgress = () => {
    return storage.load("progress") || {};
  }

  saveProgress = (section, flags, logs) => {
    storage.save(
      "progress",
      {
        "section": section,
        "flags": flags,
        "logs": logs,
      }
    );
  }

  loadSettings = ()=> {
    return storage.load("settings") || {};
  }

  saveSettings = (settings) => {
    storage.save("settings", settings);
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
        settings={this.loadSettings()}
        saveSettings={this.saveSettings}
      />
    );
  }
}

export default App;

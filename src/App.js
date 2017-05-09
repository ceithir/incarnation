import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Game from './components/Game.js';
import sections from './scripts/script.js';
import flags from './scripts/flags.js';
import endings from './scripts/endings.js';

const title = `Incarnation`;
const startingSection = "intro";

const storageKey = (parent !== window) ? document.referrer : document.location;
const getWarehouse = () => {
  return JSON.parse(window.localStorage.getItem(storageKey)) || {};
}
const load = (key) => {
  return getWarehouse()[key];
}
const save = (key, value) => {
  window.localStorage.setItem(
    storageKey,
    JSON.stringify(Object.assign(
      {},
      getWarehouse(),
      {[key]: value},
    ))
  );
}

const settings = load("settings");

class App extends Component {
  loadProgress = () => {
    return Object.assign(
      {},
      {
        "section": startingSection,
        "flags": flags,
        "logs": [],
      },
      load("progress") || {}
    );
  }

  saveProgress = (section, flags, logs) => {
    save(
      "progress",
      {
        "section": section,
        "flags": flags,
        "logs": logs,
      }
    );
  }

  saveSettings = (settings) => {
    save("settings", settings);
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
        settings={settings}
        saveSettings={this.saveSettings}
      />
    );
  }
}

export default App;

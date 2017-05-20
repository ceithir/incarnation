import React from 'react';
import PropTypes from 'prop-types';
import Crossroads from './Crossroads.js';
import Funnel from './Funnel.js';
import Menu from './Menu.js';
import Core from './Core.js';
import { Grid, Row, Col } from 'react-bootstrap';
import Endings from './Endings.js';
import Settings from './Settings.js';

class Game extends React.Component {
  constructor(props) {
    super(props);

    const currentSection = this.props.currentSection || this.props.startingSection;
    const currentFlags = Object.assign({}, this.props.startingFlags, this.props.currentFlags || {});
    const currentLogs = this.props.currentLogs || [];
    const settings = Object.assign({}, this.getDefaultSettings(), this.props.settings || {});
    const meta =  Object.assign({}, {"unlockedEndings": []}, this.props.meta || {});

    this.saveProgress(currentSection, currentFlags, currentLogs);

    this.state = {
      "section": currentSection,
      "flags": currentFlags,
      "logs": currentLogs,
      "settings": settings,
      "meta": meta,
      "display": "core",
      "snap": "top",
    };
  }

  getDefaultSettings = () => {
    return {
      "fontSize": 15,
      "justified": false,
      "skip": false,
    };
  }

  backToCoreBottom = () => {
    this.setState({"display": "core", "snap": "bottom"});
  }

  showEndings = () => {
    this.setState({"display": "endings"});
  }

  saveMeta = (meta) => {
    if (!this.props.saveMeta) {
      return;
    }

    this.props.saveMeta(meta);
  }

  goToSection = (section, flags = {}, log) => {
    this.setState((prevState, props) => {
      const updatedFlags = Object.assign({}, prevState.flags, flags);
      const updatedLogs = prevState.logs.concat(this.getLog(prevState.section, prevState.flags, log));

      this.saveProgress(section, updatedFlags, updatedLogs);

      return {
        "section": section,
        "flags": updatedFlags,
        "logs": updatedLogs,
      };
    });

    const ending = this.getSection(section)['end'];
    if (ending) {
      this.setState((prevState, props) => {
        console.log(prevState.meta.unlockedEndings.indexOf(ending));
        if (-1 !== prevState.meta.unlockedEndings.indexOf(ending)) {
          return;
        }

        const meta = Object.assign({}, prevState.meta.unlockedEndings, {"unlockedEndings": prevState.meta.unlockedEndings.concat([ending])});

        this.saveMeta(meta);

        return {
          "meta": meta,
        };
      });
    }
  }

  getSection = (sectionKey) => {
    const section = this.props.sections[sectionKey];

    if (!section) {
      console.error(`Section ${sectionKey} is not defined`);
      return {
        "text": () => {return "";},
        "next": () => {},
      };
    }

    return {
      "text": 'string' === typeof section.text ? () => {return section.text;} : section.text,
      "next": section.next,
      "end": section.end,
    };
  }

  getLog = (sectionKey, flags, override) => {
    if ('string' === typeof override) {
      return override;
    }

    const text = this.getText(sectionKey, flags);

    if ('function' === typeof override) {
      return override(text);
    }

    return text;
  }

  getText = (sectionKey, flags) => {
    return this.getSection(sectionKey).text(flags, this.state.settings.skip);
  }

  getNext = (sectionKey, flags) => {
    const section = this.getSection(sectionKey);
    if (section.end) {
      return this.endGame(section.end);
    }

    const next = section.next(this.goToSection, flags, this.state.settings.skip);

    if (React.isValidElement(next)) {
      return next;
    }

    if (Array.isArray(next)) {
      return (
        <Crossroads choices={next} />
      );
    }

    if ('object' === typeof next && next.text && next.action) {
      return (
        <Funnel text={next.text} action={next.action} />
      );
    }

    console.error(`Value "next" for section ${sectionKey} is invalid.`);
    return;
  }

  updateSettings = (values) => {
    this.setState((prevState, props) => {
      const settings = Object.assign({}, prevState.settings, values);

      if (props.saveSettings) {
        props.saveSettings(settings);
      }

      return {
        "settings": settings,
        // Hack to force bottom snapping when in a dead end
        "snap": this.getSection(prevState.section)["end"] ? "bottom": prevState.snap,
      };
    });
  }

  saveProgress = (section, flags, logs) => {
    if (!this.props.saveProgress) {
      return;
    }

    this.props.saveProgress(
      section,
      flags,
      logs,
    );
  }

  resetProgress = () => {
    this.saveProgress(
      this.props.startingSection,
      this.props.startingFlags,
      [],
    );
    this.setState({
      "section": this.props.startingSection,
      "flags": this.props.startingFlags,
      "logs": [],
      "display": "core",
      "snap": "top",
    });
  }

  shouldShowPostGame = () => {
    return this.state.meta.unlockedEndings.length >= 2;
  }

  endGame = (endingKey) => {
    const endingIndex = this.props.endings.findIndex(
      (ending) => {
        return endingKey === ending.key;
      }
    );
    if (-1 === endingIndex) {
      console.error(`Ending "${endingKey}" is undefined.`);
      return;
    }

    const title = this.props.endings[endingIndex]["name"];
    const subtitle = `Fin ${endingIndex+1} sur ${this.props.endings.length} :`;

    const buttons = [
      {
        "text": `Recommencer ${this.state.settings.skip? ` (au premier choix)`: ``}`,
        "action": this.resetProgress,
      },
      {
        "text": `Voir toutes les fins découvertes`,
        "action": this.showEndings,
      },
    ];

    return (
      <div>
        <div className="ending">
          <small>{subtitle}</small> {title}
        </div>
        {this.shouldShowPostGame() && !this.state.settings.skip && <p className="tips">
          {`Astuce : Vous pouvez dorénavant activer la fonctionnalité de relecture rapide depuis le panneau de configuration. Elle retira du texte tous les éléments que vous connaissez déjà et qui se répètent à chaque parcours. Cette option peut être désactivée à tout moment.`}
        </p>}
        <div className="lead text-center">
          <Crossroads choices={buttons} />
        </div>
      </div>
    );
  }

  getMenuItems = () => {
    const items = [];

    if (this.props.saveProgress) {
      items.push({
        "key": "autosave",
        "text": `Ce jeu sauvegarde automatiquement.`,
      });
    }

    items.push({
      "key": "reset",
      "text": `Recommencer`,
      "action": this.resetProgress,
    });

    return items;
  }

  getSettings = () => {
    return (
      <Settings
        values={this.state.settings}
        update={this.updateSettings}
        showPostGameOptions={this.shouldShowPostGame()}
      />
    );
  }

  render() {
    return (
      <div className="game">
        <Menu
          title={this.props.title}
          settings={this.getSettings()}
          items={this.getMenuItems()}
        />
        <Grid className={"font-"+this.state.settings.fontSize + (this.state.settings.justified ? " text-justify" : "")}>
          <Row>
            <Col md={8} mdOffset={2}>
              {("core" === this.state.display) && <Core
                text={this.getText(this.state.section, this.state.flags)}
                next={this.getNext(this.state.section, this.state.flags)}
                logs={this.state.logs}
                snap={this.state.snap}
              />}
              {("endings" === this.state.display) && <Endings
                title={`Fins découvertes`}
                endings={this.props.endings}
                exit={this.backToCoreBottom}
                unlocked={this.state.meta.unlockedEndings}
              />}
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

Game.propTypes = {
  title: PropTypes.string.isRequired,
  sections: PropTypes.object.isRequired,
  startingSection: PropTypes.string.isRequired,
  startingFlags: PropTypes.object.isRequired,
  currentSection: PropTypes.string,
  currentFlags: PropTypes.object,
  currentLogs: PropTypes.array,
  saveProgress: PropTypes.func,
  endings: PropTypes.arrayOf(PropTypes.object).isRequired,
  settings: PropTypes.object,
  saveSettings: PropTypes.func,
  meta: PropTypes.object,
  saveMeta: PropTypes.func,
};

export default Game;

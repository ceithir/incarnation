import React from 'react';
import PropTypes from 'prop-types';
import Text from './Text.js';
import Crossroads from './Crossroads.js';
import Funnel from './Funnel.js';
import { Grid, Row, Col } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import Menu from './Menu.js';

class Game extends React.Component {
  constructor(props) {
    super(props);

    const currentSection = this.props.currentSection || this.props.startingSection;
    const currentFlags = Object.assign({}, this.props.startingFlags, this.props.currentFlags || {});
    const currentLogs = this.props.currentLogs || [];
    const settings = Object.assign({}, this.getDefaultSettings(), this.props.settings || {});

    this.saveProgress(currentSection, currentFlags, currentLogs);

    this.state = {
      "section": currentSection,
      "flags": currentFlags,
      "logs": currentLogs,
      "settings": settings,
    };
  }

  getDefaultSettings = () => {
    return {
      "fontSize": 15,
      "justified": false,
    };
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
    return this.getSection(sectionKey).text(flags);
  }

  getNext = (sectionKey, flags) => {
    const section = this.getSection(sectionKey);
    if (section.end) {
      return this.endGame(section.end);
    }

    const next = section.next(this.goToSection, flags);

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

  scrollToText = () => {
    const element = ReactDOM.findDOMNode(this.activeContentRef);
    if (!element) {
      return;
    }

    window.scrollTo(0, element.offsetTop);
  }

  componentDidMount = () => {
    this.scrollToText();
  }

  componentDidUpdate = () => {
    this.scrollToText();
  }

  updateSettings = (values) => {
    this.setState((prevState, props) => {
      const settings = Object.assign({}, prevState.settings, values);

      if (props.saveSettings) {
        props.saveSettings(settings);
      }

      return {
        "settings": settings,
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
    });
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
        "text": `Recommencer`,
        "action": this.resetProgress,
      },
    ];

    return (
      <div className="ending-wrapper">
        <div className="ending">
          <small>{subtitle}</small> {title}
        </div>
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

  render() {
    return (
      <div className="game">
        <Menu
          title={this.props.title}
          settings={this.state.settings}
          updateSettings={this.updateSettings}
          items={this.getMenuItems()}
        />
        <Grid className={"font-"+this.state.settings.fontSize + (this.state.settings.justified ? " text-justify" : "")}>
          <Row>
            <Col md={8} mdOffset={2}>
              <div className="logs">
                {this.state.logs.map((log, index) => {
                  return (
                    <div key={index.toString()}>
                      <Text content={log} />
                      <hr/>
                    </div>
                  );
                })}
              </div>
              <Text
                content={this.getText(this.state.section, this.state.flags)}
                ref={(ref) => { this.activeContentRef = ref; }}
              />
            </Col>
          </Row>
          <Row>
            <Col md={8} mdOffset={2}>
              {this.getNext(this.state.section, this.state.flags)}
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
};

export default Game;

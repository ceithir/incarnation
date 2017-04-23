import React from 'react';
import PropTypes from 'prop-types';
import Text from './Text.js';
import Crossroads from './Crossroads.js';
import Funnel from './Funnel.js';
import { Navbar, Grid, Row, Col } from 'react-bootstrap';
import ReactDOM from 'react-dom';

class Game extends React.Component {
  constructor(props) {
    super(props);

    const currentSection = this.props.startingSection;
    const currentFlags = this.props.startingFlags;
    const currentLogs = [];

    this.state = {
      "section": currentSection,
      "flags": currentFlags,
      "logs": currentLogs,
    };
  }

  goToSection = (section, flags = {}, logs) => {
    this.setState((prevState, props) => {
      if (!logs) {
        logs = this.getText(prevState.section, prevState.flags);
      }

      return {
        "section": section,
        "flags": Object.assign({}, prevState.flags, flags),
        "logs": prevState.logs.concat(logs),
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
    };
  }

  getText = (sectionKey, flags) => {
    return this.getSection(sectionKey).text(flags);
  }

  getNext = (sectionKey, flags) => {
    const next = this.getSection(sectionKey).next(this.goToSection, flags);

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

  componentDidUpdate = () => {
    this.scrollToText();
  }

  render() {
    return (
      <div className="game">
        <Navbar fixedTop fluid>
          <Navbar.Header>
            <Navbar.Brand>{this.props.title}</Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        <Grid>
          <Row>
            <Col md={8} mdOffset={2}>
              {this.state.logs.map((log, index) => {
                return (
                  <div key={index.toString()}>
                    <Text content={log} />
                    <hr/>
                  </div>
                );
              })}
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
};

export default Game;

import React from 'react';
import PropTypes from 'prop-types';
import Text from './Text.js';
import { Navbar, Grid, Row, Col } from 'react-bootstrap';

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

  goToSection = (section, flags = {}) => {
    this.setState((prevState, props) => {
      return {
        "section": section,
        "flags": Object.assign({}, prevState.flags, flags),
        "logs": prevState.logs.concat(this.getText(prevState.section, prevState.flags)),
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

  getNext = (sectionKey) => {
    return this.getSection(sectionKey).next;
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
              <Text content={this.getText(this.state.section, this.state.flags)} />
            </Col>
          </Row>
          <Row>
            <Col md={8} mdOffset={2}>
              {this.getNext(this.state.section)(this.goToSection, this.state.flags)}
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

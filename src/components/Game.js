import React from 'react';
import PropTypes from 'prop-types';
import Text from './Text.js';
import Crossroads from './Crossroads.js';
import Funnel from './Funnel.js';
import { Navbar, Nav, NavItem, Grid, Row, Col, Modal, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import ReactDOM from 'react-dom';

class Game extends React.Component {
  constructor(props) {
    super(props);

    const currentSection = this.props.startingSection;
    const currentFlags = this.props.startingFlags;
    const currentLogs = [];
    const options = this.getDefaultOptions();

    this.state = {
      "section": currentSection,
      "flags": currentFlags,
      "logs": currentLogs,
      "showOptions": false,
      "options": options,
      "optionsForm": {},
    };
  }

  getDefaultOptions = () => {
    return {
      "fontSize": 16,
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

  showOptions = () => {
    this.setState((prevState, props) => {
      return {
        "showOptions": true,
        "optionsForm": Object.assign({}, prevState.options),
      };
    });
  }

  hideOptions = () => {
    this.setState({ "showOptions": false });
  }

  componentDidUpdate = () => {
    this.scrollToText();
  }

  onFontSizeOptionChange = (event) => {
    event.persist();
    const value = event.target.value;
    this.setState((prevState, props) => {
      return {
        "optionsForm": Object.assign({}, prevState.optionsForm, {"fontSize": value}),
        "options": Object.assign({}, prevState.options, this.isFontSizeValid(value) ? {"fontSize": value} : {}),
      };
    });
  }

  isFontSizeValid = (size) => {
    return size >= 14 && size <= 20;
  }

  render() {
    return (
      <div className="game">
        <Navbar fixedTop fluid>
          <Navbar.Header>
            <Navbar.Brand>{this.props.title}</Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem onSelect={this.showOptions}>Options</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Grid className={"font-"+this.state.options.fontSize}>
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
        <Modal show={this.state.showOptions} onHide={this.hideOptions}>
          <Modal.Header closeButton>
            <Modal.Title>Options</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={(e) => {e.preventDefault()}}>

              <FormGroup
                controlId="fontSizeOption"
                validationState={ this.isFontSizeValid(this.state.optionsForm.fontSize) ? null : 'error' }
              >
                <ControlLabel>Taille de la police</ControlLabel>
                <FormControl
                  type="number"
                  min="14"
                  max="20"
                  value={this.state.optionsForm.fontSize}
                  onChange={this.onFontSizeOptionChange}
                />
                <FormControl.Feedback />
              </FormGroup>
            </form>
          </Modal.Body>
        </Modal>
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

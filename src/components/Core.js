import React from 'react';
import PropTypes from 'prop-types';
import Text from './Text.js';
import { Grid, Row, Col } from 'react-bootstrap';
import ReactDOM from 'react-dom';

class Core extends React.Component {
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

  render() {
    return (
      <Grid className={"font-"+this.props.settings.fontSize + (this.props.settings.justified ? " text-justify" : "")}>
        <Row>
          <Col md={8} mdOffset={2}>
            <div className="logs">
              {this.props.logs.map((log, index) => {
                return (
                  <div key={index.toString()}>
                    <Text content={log} />
                    <hr/>
                  </div>
                );
              })}
            </div>
            <Text content={this.props.text} ref={(ref) => { this.activeContentRef = ref; }} />
          </Col>
        </Row>
        <Row>
          <Col md={8} mdOffset={2}>{this.props.next}</Col>
        </Row>
      </Grid>
    );
  }
}

Core.propTypes = {
  text: PropTypes.string.isRequired,
  next: PropTypes.element.isRequired,
  logs: PropTypes.arrayOf(PropTypes.string).isRequired,
  settings: PropTypes.object.isRequired,
};

export default Core;

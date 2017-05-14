import React from 'react';
import PropTypes from 'prop-types';
import Text from './Text.js';
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
      <div>
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
        {this.props.next}
      </div>
    );
  }
}

Core.propTypes = {
  text: PropTypes.string.isRequired,
  next: PropTypes.element.isRequired,
  logs: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Core;

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

  scrollToBottom = () => {
    window.scrollTo(0, document.body.scrollHeight);
  }

  scroll = () => {
    if ("top" === this.props.snap) {
      this.scrollToText();
    }

    if ("bottom" === this.props.snap) {
      this.scrollToBottom();
    }
  }

  componentDidMount = () => {
    this.scroll();
  }

  componentDidUpdate = () => {
    this.scroll();
  }

  render() {
    return (
      <div className="core">
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
  snap: PropTypes.oneOf(['top', 'bottom']),
};

export default Core;

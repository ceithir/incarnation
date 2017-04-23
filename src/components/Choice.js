import React from 'react';
import PropTypes from 'prop-types';

class Choice extends React.Component {
  render() {
    return (
    	<a className="list-group-item choice" onClick={this.props.action}>
        {this.props.text}
      </a>
    );
  }
}

Choice.propTypes = {
  text: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
};

export default Choice;

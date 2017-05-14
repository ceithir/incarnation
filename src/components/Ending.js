import React from 'react';
import PropTypes from 'prop-types';

class Ending extends React.Component {
  render() {
    return (
      <li className="unlocked">{this.props.name}</li>
    );
  }
}

Ending.propType = {
  name: PropTypes.string.isRequired,
};

export default Ending;

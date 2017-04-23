import React from 'react';
import PropTypes from 'prop-types';
import Crossroads from './Crossroads.js';

class Funnel extends React.Component {
  render() {
    const choices = [{
      "text": this.props.text,
      "action": this.props.action,
    }];

    return (
      <Crossroads choices={choices} />
    );
  }
}

Funnel.propTypes = {
  text: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
};

export default Funnel;

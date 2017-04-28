import React from 'react';
import PropTypes from 'prop-types';
import Crossroads from './Crossroads.js';

class Ending extends React.Component {
  render() {
    return (
      <div>
        <hr/>
        <div className="ending-title">
          {this.props.subtitle && <small>{this.props.subtitle} </small>}
          {this.props.title}
        </div>
        <div className="lead text-center">
          <Crossroads choices={this.props.buttons} />
        </div>
      </div>
    );
  }
}

Ending.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  buttons: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Ending;

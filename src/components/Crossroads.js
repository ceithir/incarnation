import React from 'react';
import PropTypes from 'prop-types';
import Choice from './Choice.js';

class Crossroads extends React.Component {
  render() {
    return (
      <div className="panel panel-default">
        <div className="list-group">
          {this.props.choices.map((choice, index) => {
            return (
              <Choice
                text={choice.text}
                action={choice.action}
                key={index.toString()}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

Crossroads.propTypes = {
  choices: PropTypes.arrayOf(React.PropTypes.object).isRequired,
};

export default Crossroads;

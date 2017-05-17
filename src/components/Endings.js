import React from 'react';
import PropTypes from 'prop-types';
import Ending from './Ending.js';
import LockedEnding from './LockedEnding.js';
import Funnel from './Funnel.js';

class Endings extends React.Component {
  render() {
    return (
      <div className="endings">
        <h2>{this.props.title}</h2>
        <ol>
          {this.props.endings.map((ending) => {
            if (-1 !== this.props.unlocked.indexOf(ending.key)) {
              return (
                <Ending key={ending.key} name={ending.name}/>
              );
            }

            return (
              <LockedEnding key={ending.key} name={`???`} hint={ending.hint} />
            );
          })}
        </ol>
        <div className="lead text-center">
          <Funnel text={`Retour`} action={this.props.exit} />
        </div>
      </div>
    );
  }
}

Endings.propTypes = {
  title: PropTypes.string.isRequired,
  endings: PropTypes.arrayOf(PropTypes.object).isRequired,
  exit: PropTypes.func.isRequired,
  unlocked: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Endings;

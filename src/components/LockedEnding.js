import React from 'react';
import PropTypes from 'prop-types';

class LockedEnding extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      "showHint": false,
    };
  }

  toggleHintVisibility = () => {
    this.setState((prevState) => {
      return {
        "showHint": !prevState.showHint,
      };
    });
  }

  render() {
    return (
      <li className="locked">
        {this.props.name} (<a className="hint" onClick={this.toggleHintVisibility}>{`Indice`}</a>)
        {this.state.showHint && <p>{this.props.hint}</p>}
      </li>
    );
  }
}

LockedEnding.propType = {
  name: PropTypes.string.isRequired,
  hint: PropTypes.string.isRequired,
};

export default LockedEnding;

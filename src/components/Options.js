import React from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import PropTypes from 'prop-types';

class Options extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      "form": this.props.values,
    };
  }

  isFontSizeValid = (size) => {
    return size >= 14 && size <= 20;
  }

  onFontSizeOptionChange = (event) => {
    event.persist();
    const value = event.target.value;
    this.setState((prevState, props) => {
      return {
        "form": Object.assign({}, prevState.form, {"fontSize": value}),
      };
    });
    if (this.isFontSizeValid(value)) {
      this.props.update({"fontSize": value});
    }
  }

  render() {
    return (
      <form onSubmit={(e) => {e.preventDefault()}}>
        <FormGroup
          controlId="fontSizeOption"
          validationState={ this.isFontSizeValid(this.state.form.fontSize) ? null : 'error' }
        >
          <ControlLabel>Taille de la police</ControlLabel>
          <FormControl
            type="number"
            min="14"
            max="20"
            value={this.state.form.fontSize}
            onChange={this.onFontSizeOptionChange}
          />
          <FormControl.Feedback />
        </FormGroup>
      </form>
    );
  }
}

Options.propTypes = {
  values: PropTypes.object.isRequired,
  update: PropTypes.func.isRequired,
};

export default Options;

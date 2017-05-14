import React from 'react';
import { FormGroup, ControlLabel, FormControl, Checkbox } from 'react-bootstrap';
import PropTypes from 'prop-types';

class Settings extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      "form": this.props.values,
    };
  }

  isFontSizeValid = (size) => {
    return size >= 14 && size <= 20;
  }

  updateForm = (values) => {
    this.setState((prevState, props) => {
      return {
        "form": Object.assign({}, prevState.form, values),
      };
    });
  }

  onFontSizeOptionChange = (event) => {
    event.persist();
    const value = event.target.value;
    this.updateForm({"fontSize": value});
    if (this.isFontSizeValid(value)) {
      this.props.update({"fontSize": value});
    }
  }

  onJustificationChange = (event) => {
    event.persist();
    const values = {"justified": event.target.checked};
    this.updateForm(values);
    this.props.update(values);
  }

  onSkipChange = (event) => {
    event.persist();
    const values = {"skip": event.target.checked};
    this.updateForm(values);
    this.props.update(values);
  }

  render() {
    return (
      <form onSubmit={(e) => {e.preventDefault()}}>
        <FormGroup
          controlId="fontSizeOption"
          validationState={ this.isFontSizeValid(this.state.form.fontSize) ? null : 'error' }
        >
          <ControlLabel>
            {`Taille de la police`}
          </ControlLabel>
          <FormControl
            type="number"
            min="14"
            max="20"
            value={this.state.form.fontSize}
            onChange={this.onFontSizeOptionChange}
          />
          <FormControl.Feedback />
        </FormGroup>
        <FormGroup>
          <Checkbox
            checked={this.state.form.justified}
            onChange={this.onJustificationChange}
          >
            {`Justifier le texte ?`}
          </Checkbox>
        </FormGroup>
        {this.props.showPostGameOptions && <FormGroup>
          <Checkbox
            checked={this.state.form.skip}
            onChange={this.onSkipChange}
          >
            {`Relecture rapide (ôte l’introduction et la présentation des esprits) ?`}
          </Checkbox>
        </FormGroup>}
      </form>
    );
  }
}

Settings.propTypes = {
  values: PropTypes.object.isRequired,
  update: PropTypes.func.isRequired,
  showPostGameOptions: PropTypes.bool,
};

export default Settings;

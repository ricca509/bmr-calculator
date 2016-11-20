import React from 'react';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';

const styles = {
  radioButton: {
    marginBottom: 10,
  },
};

const GenderSelector = ({ gender, onGenderChanged }) => (
  <RadioButtonGroup
    name="gender"
    defaultSelected={ gender }
    onChange={onGenderChanged}>
    <RadioButton
      value="M"
      label="Male"
      style={styles.radioButton}
    />
    <RadioButton
      value="F"
      label="Female"
      style={styles.radioButton}
    />
  </RadioButtonGroup>
);

export default GenderSelector;

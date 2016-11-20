import React, { PropTypes } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { generateRange } from '../lib/range';

const getAges = () => {
  return generateRange(18, 50).map(el =>
    <MenuItem key={el} value={el} primaryText={el} />
  );
}

const AgeSelector = ({ age, onAgeChanged }) => (
  <SelectField
    value={age}
    onChange={onAgeChanged}
    floatingLabelText="Age"
  >
    { getAges() }
  </SelectField>
);

AgeSelector.propTypes = {
  onAgeChanged: PropTypes.func
}

export default AgeSelector;

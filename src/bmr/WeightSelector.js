import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { generateRange } from '../lib/range';

const getWeight = () => {
  return generateRange(30, 100).map(el =>
    <MenuItem key={el} value={el} primaryText={el} />
  );
}

const WeightSelector = ({ weight, onWeightChanged }) => (
  <SelectField
    value={weight}
    onChange={onWeightChanged}
    floatingLabelText="Weight (Kg)"
  >
    { getWeight() }
  </SelectField>
);

export default WeightSelector;

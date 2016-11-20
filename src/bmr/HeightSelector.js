import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { generateRange } from '../lib/range';

const getHeight = () => {
  return generateRange(100, 100).map(el =>
    <MenuItem key={el} value={el} primaryText={el} />
  );
}

const HeightSelector = ({ height, onHeightChanged }) => (
  <SelectField
    value={height}
    onChange={onHeightChanged}
    floatingLabelText="Height (cm)"
  >
    { getHeight() }
  </SelectField>
);

export default HeightSelector;

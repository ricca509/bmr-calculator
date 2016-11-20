import React from 'react';
import { List, ListItem, makeSelectable } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

let SelectableList = makeSelectable(List);

const getActivityLevels = (levels) =>
  levels.map((level) =>
    <ListItem
      key={level.activity}
      value={level.id}
      primaryText={`${level.activity} (BMR x ${level.tdee})`}
      secondaryText={level.description}
    />
  );


const ActivityLevel = ({ levels, selectedLevel, onActivityLevelChanged}) => (
  <SelectableList
    value={selectedLevel}
    onChange={onActivityLevelChanged}
  >
    <Subheader>Activity Level</Subheader>
    { getActivityLevels(levels) }
  </SelectableList>
);

export default ActivityLevel;

import React, { Dispatch, SetStateAction } from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  ListItemText,
  SelectChangeEvent,
} from '@mui/material';
import { SortBy } from '../types/SortBy';

interface Props {
  name: SortBy;
  items: string[];
  setSortBy: Dispatch<SetStateAction<string>>;
  setSortedItems: Dispatch<SetStateAction<string[]>>;
  sorted: string[];
  resetAnotherForm: Dispatch<SetStateAction<string[]>>;
}

export const SelectForm: React.FC<Props> = ({
  name,
  items,
  setSortBy,
  sorted,
  setSortedItems,
  resetAnotherForm,
}) => {
  const handleSelect = (event: SelectChangeEvent<typeof sorted>) => {
    const {
      target: { value },
    } = event;

    setSortedItems(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );

    resetAnotherForm([]);
  };

  return (
    <FormControl>
      <InputLabel id="select-label">{name}</InputLabel>
      <Select
        labelId="select-label"
        id="select-label"
        label={name}
        multiple
        value={sorted}
        onOpen={() => setSortBy(name)}
        onChange={(event) => handleSelect(event)}
        renderValue={(selected: string[]) => selected.join(', ')}
      >
        {items.map((item) => (
          <MenuItem key={item} value={item}>
            <Checkbox checked={sorted.indexOf(item) > -1} />
            <ListItemText primary={item} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

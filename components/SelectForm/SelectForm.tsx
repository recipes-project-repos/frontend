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
import { SortBy } from '../../types/SortBy';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import {
  setSortedCategory,
  setSortedIngredient,
} from '@/features/query/sortBySlice';
import { Category } from '@/types/Category';

interface Props {
  name: SortBy;
  setSortBy: Dispatch<SetStateAction<string>>;
  sorted: string[];
}

export const SelectForm: React.FC<Props> = ({ name, setSortBy, sorted }) => {
  const dispatch = useAppDispatch();
  const { categories } = useAppSelector((state) => state.categories);
  const { ingredients } = useAppSelector((state) => state.ingredients);
  const isCategory = name === 'Category';

  const handleSelect = (event: SelectChangeEvent<typeof sorted>) => {
    const {
      target: { value },
    } = event;

    if (isCategory) {
      dispatch(
        setSortedCategory(typeof value === 'string' ? value.split(',') : value),
      );
      dispatch(setSortedIngredient([]));
    } else {
      dispatch(
        setSortedIngredient(
          typeof value === 'string' ? value.split(',') : value,
        ),
      );
      dispatch(setSortedCategory([]));
    }
  };

  return (
    <FormControl className="select-form">
      <InputLabel id="select-label">{name}</InputLabel>
      <Select
        labelId="select-label"
        id="select-label"
        className="select-form__input"
        label={name}
        multiple
        value={sorted}
        onOpen={() => setSortBy(name)}
        onChange={(event) => handleSelect(event)}
        renderValue={(selected: string[]) => selected.join(', ')}
      >
        {isCategory &&
          categories.map((item: Category) => (
            <MenuItem key={item.strCategory} value={item.strCategory}>
              <Checkbox checked={sorted.indexOf(item.strCategory) > -1} />
              <ListItemText primary={item.strCategory} />
            </MenuItem>
          ))}

        {!isCategory &&
          ingredients.map((item: Category) => (
            <MenuItem key={item.strCategory} value={item.strCategory}>
              <Checkbox checked={sorted.indexOf(item.strCategory) > -1} />
              <ListItemText primary={item.strCategory} />
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  );
};

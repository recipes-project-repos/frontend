/* eslint-disable curly */
import { 
  Button,
  FormControl,
  Radio,
  RadioGroup,
  FormControlLabel,
  TextField,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { SortBy } from '../types/SortBy';
import { SelectForm } from './SelectForm';

const categoriesFromServer = ['one', 'two', 'three'];
const ingredientsFromServer = ['ingr1', 'ingr2', 'ingr3'];

export const Sidebar = () => {
  const [sortBy, setSortBy] = useState('Title');
  const [hasFocus, setHasFocus] = useState<SortBy>('Title');
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<string[]>([]);
  const [ingredient, setIngredient] = useState<string[]>([]);

  useEffect(() => {
    setSortBy(hasFocus);
  }, [hasFocus]);

  const handleChange = (toChange: SortBy) => {
    setSortBy(toChange);
    setHasFocus(toChange);
    document.getElementById(toChange)?.focus();
  };

  const handleReset = () => {
    setQuery('');
    setSortBy('Title');
    setCategory([]);
    setIngredient([]);
  };

  return (
    <section className="sidebar-container">
      <div className="sidebar">
        <h4>Search by</h4>

        <FormControl sx={{width: '100%'}}>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            value={sortBy}
            name="radio-buttons-group"
          >
            <FormControlLabel
              id="title"
              value="Title"
              control={<Radio />}
              label="Title"
              onChange={() => handleChange('Title')}
            />
            <TextField
              id='Title'
              variant="outlined"
              placeholder="Title"
              value={query}
              onChange={(event) => setQuery(event?.target.value)}
              onFocus={() => setHasFocus('Title')}
              onBlur={() => setHasFocus('')}
            />
            
            <FormControlLabel
              id="category"
              value="Category"
              control={<Radio />}
              label="Category"
              onChange={() => handleChange('Category')}
            />

            <SelectForm
              name="Category"
              items={categoriesFromServer}
              setSortBy={setSortBy}
              setSortedItems={setCategory}
              sorted={category}
              onSetHasFocus={setHasFocus}
              resetAnotherForm={setIngredient}
            />

            <FormControlLabel
              id="ingredient"
              value="Ingredient"
              control={<Radio />}
              label="Ingredient"
              onChange={() => handleChange('Ingredient')}
            />

            <SelectForm
              name="Ingredient"
              items={ingredientsFromServer}
              setSortBy={setSortBy}
              setSortedItems={setIngredient}
              sorted={ingredient}
              onSetHasFocus={setHasFocus}
              resetAnotherForm={setCategory}
            />
          </RadioGroup>

          <Button type="submit" variant="outlined" className="sidebar__button sidebar__button--submit">
            Submit
          </Button>

          <Button
            type="reset"
            variant="outlined"
            className="sidebar__button sidebar__button--reset"
            onClick={handleReset}
          >
            Clear
          </Button>
        </FormControl>
      </div>
    </section>
  );
};

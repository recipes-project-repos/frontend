/* eslint-disable curly */
import {
  FormControl,
  Radio,
  RadioGroup,
  FormControlLabel,
  TextField,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { SortBy } from '../../types/SortBy';
import { ButtonMain } from '../ButtonMain';
import { SelectForm } from '../SelectForm';

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

        <FormControl sx={{ width: '100%' }}>
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
              id="Title"
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
              resetAnotherForm={setCategory}
            />
          </RadioGroup>

          <ButtonMain
            buttonType="submit"
            text="Submit"
            classVariant="sidebar__button sidebar__button--submit"
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            onHandleClick={() => {}}
          />

          <ButtonMain
            buttonType="reset"
            text="Cleat"
            classVariant="sidebar__button sidebar__button--reset"
            onHandleClick={handleReset}
          />
        </FormControl>
      </div>
    </section>
  );
};

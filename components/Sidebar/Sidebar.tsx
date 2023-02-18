import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import {
  setQuery,
  setSortedCategory,
  setSortedIngredient,
} from '@/features/query/sortBySlice';
import { FormControl, TextField } from '@mui/material';

import { SortBy } from '../../types/SortBy';
import { ButtonMain } from '../ButtonMain';
import { SelectForm } from '../SelectForm';

export const Sidebar = () => {
  const dispatch = useAppDispatch();
  const { query, sortedCategory, sortedIngredient } = useAppSelector(
    (state) => state.sortBy,
  );

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [sortBy, setSortBy] = useState('Title');
  const [hasFocus, setHasFocus] = useState<SortBy>('Title');

  useEffect(() => {
    setSortBy(hasFocus);
  }, [hasFocus]);

  // const handleChange = (toChange: SortBy) => {
  //   setSortBy(toChange);
  //   setHasFocus(toChange);
  //   document.getElementById(toChange)?.focus();
  // };

  const handleReset = () => {
    dispatch(setQuery(''));
    setSortBy('Title');
    dispatch(setSortedCategory([]));
    dispatch(setSortedIngredient([]));
  };

  return (
    <section className="sidebar-container">
      <div className="sidebar">
        <h1 className="sidebar__title">Search by</h1>

        <FormControl sx={{ width: '100%' }}>
          <TextField
            className="select-form__input"
            label="Title"
            id="Title"
            variant="outlined"
            placeholder="Title"
            value={query}
            onChange={(event) => dispatch(setQuery(event?.target.value))}
            onFocus={() => setHasFocus('Title')}
            onBlur={() => setHasFocus('')}
          />

          <SelectForm
            name="Category"
            setSortBy={setSortBy}
            sorted={sortedCategory}
          />

          <SelectForm
            name="Ingredient"
            setSortBy={setSortBy}
            sorted={sortedIngredient}
          />

          {/* <ButtonMain
            buttonType="submit"
            text="Submit"
            classVariant="sidebar__button sidebar__button--submit"
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            onHandleClick={() => {}}
          /> */}

          <ButtonMain
            buttonType="reset"
            text="Clear"
            classVariant="sidebar__button sidebar__button--reset"
            onHandleClick={handleReset}
          />
        </FormControl>
      </div>
    </section>
  );
};

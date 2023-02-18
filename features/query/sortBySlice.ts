import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface SortByState {
  query: string;
  sortedIngredient: string[];
  sortedCategory: string[];
}

const initialState: SortByState = {
  query: '',
  sortedIngredient: [],
  sortedCategory: [],
};

export const sortBySlice = createSlice({
  name: 'sortBy',
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
    setSortedIngredient: (state, action: PayloadAction<string[]>) => {
      state.sortedIngredient = action.payload;
    },
    setSortedCategory: (state, action: PayloadAction<string[]>) => {
      state.sortedCategory = action.payload;
    },
  },
});

export default sortBySlice.reducer;

export const { setQuery, setSortedIngredient, setSortedCategory } =
  sortBySlice.actions;

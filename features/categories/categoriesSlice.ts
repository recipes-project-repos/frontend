import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { getCategories } from '@/api/categories';
import { Category } from '@/types/Category';

export const loadCategories = createAsyncThunk('ingredients/get', () =>
  getCategories(),
);

interface CategoriesState {
  categories: Category[];
}

const initialState: CategoriesState = {
  categories: [],
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    set: (state, action: PayloadAction<string[]>) => {
      state.categories = action.payload;
    },
  },
});

export default categoriesSlice.reducer;

export const { set } = categoriesSlice.actions;

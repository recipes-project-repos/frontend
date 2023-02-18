import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { getIngredients } from '@/api/ingredients';
import { Category } from '@/types/Category';

export const loadIngredients = createAsyncThunk('ingredients/get', () =>
  getIngredients(),
);

interface IngredientsState {
  ingredients: Category[];
}

const initialState: IngredientsState = {
  ingredients: [],
};

export const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState,
  reducers: {
    set: (state, action: PayloadAction<Category[]>) => {
      state.ingredients = action.payload;
    },
  },
});

export default ingredientsSlice.reducer;

export const { set } = ingredientsSlice.actions;

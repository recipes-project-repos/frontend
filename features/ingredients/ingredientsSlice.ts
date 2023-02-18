import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { getIngredients } from '@/api/ingredients';

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
    set: (state, action: PayloadAction<string[]>) => {
      state.ingredients = action.payload;
    },
  },
});

export default ingredientsSlice.reducer;

export const { set } = ingredientsSlice.actions;

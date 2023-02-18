import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Meal } from '@/types/Meal';
import { getMeals } from '@/api/meals';

export const loadMeals = createAsyncThunk('meals/get', () => getMeals());

interface MealsState {
  meals: Meal[];
  meal: Meal | null;
  mealId: number;
}

const initialState: MealsState = {
  meals: [],
  meal: null,
  mealId: 0,
};

export const mealsSlice = createSlice({
  name: 'meals',
  initialState,
  reducers: {
    setAll: (state, action: PayloadAction<Meal[] | []>) => {
      state.meals = action.payload;
    },
    setOne: (state, action: PayloadAction<Meal | null>) => {
      state.meal = action.payload;
    },
    setId: (state, action: PayloadAction<number>) => {
      state.mealId = action.payload;
    },
  },
});

export default mealsSlice.reducer;

export const { setAll, setOne, setId } = mealsSlice.actions;

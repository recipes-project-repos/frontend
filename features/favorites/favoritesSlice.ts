import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Meal } from '@/types/Meal';

interface FavoritesState {
  favorites: Meal[];
}

const initialState: FavoritesState = {
  favorites: [],
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    load: (state, action: PayloadAction<Meal[] | []>) => {
      state.favorites = action.payload;
    },
    add: (state, action: PayloadAction<Meal>) => {
      if (
        state.favorites.findIndex(
          (item) => item.idMeal === action.payload.idMeal,
        ) < 0
      ) {
        state.favorites = [...state.favorites, action.payload];
      }
    },
    remove: (state, action: PayloadAction<Meal>) => {
      state.favorites = state.favorites.filter(
        (item) => item.idMeal !== action.payload.idMeal,
      );
    },
  },
});

export default favoritesSlice.reducer;

export const { add, remove, load } = favoritesSlice.actions;

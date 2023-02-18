import { configureStore } from '@reduxjs/toolkit';
import mealsReducer from '../features/meals/mealsSlice';
import sortByReducer from '../features/query/sortBySlice';
import ingredientsReducer from '../features/ingredients/ingredientsSlice';
import categoriesReducer from '../features/categories/categoriesSlice';
import favoritesSlice from '../features/favorites/favoritesSlice';

const store = configureStore({
  reducer: {
    meals: mealsReducer,
    sortBy: sortByReducer,
    ingredients: ingredientsReducer,
    categories: categoriesReducer,
    favorites: favoritesSlice,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

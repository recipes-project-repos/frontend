import React, { useEffect } from 'react';
import { Box, Grid } from '@mui/material';

import { MealCard } from '@/components/MealCard/MealCard';
import { Sidebar } from '@/components/Sidebar/Sidebar';
import { Loader } from '@/components/Loader';

import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { set as setCategories } from '@/features/categories/categoriesSlice';
import { set as setIngredients } from '@/features/ingredients/ingredientsSlice';
import { setAll } from '@/features/meals/mealsSlice';
import { Meal } from '../../types/Meal';
import { getMeals } from '@/api/meals';
import { getCategories } from '@/api/categories';
import { getIngredients } from '@/api/ingredients';
import { filterMeals } from '@/utils/helpingFunc';
import { load } from '@/features/favorites/favoritesSlice';

export const MainSection = () => {
  const dispatch = useAppDispatch();
  const { meals } = useAppSelector((state) => state.meals);
  const { query, sortedCategory, sortedIngredient } = useAppSelector(
    (state) => state.sortBy,
  );

  useEffect(() => {
    getMeals().then((mealsFromServer) => dispatch(setAll(mealsFromServer)));
  }, []);

  useEffect(() => {
    getCategories().then((res) => dispatch(setCategories(res)));

    getIngredients().then((res) => dispatch(setIngredients(res)));
  }, []);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem('favorites') || '[]');
    dispatch(load(favs));
  }, []);

  const mealsOnShow = filterMeals(
    meals,
    query,
    sortedCategory,
    sortedIngredient,
  );

  return (
    <main className="main">
      <Grid container>
        <Grid item xs={3}>
          <Sidebar />
        </Grid>

        <Grid item xs={9}>
          {meals.length === 0 ? (
            <Loader />
          ) : (
            <section className="meals-container">
              <Box className="meals-container__grid">
                {mealsOnShow.map((meal: Meal) => (
                  <Box key={meal.idMeal} className="meals-container__card">
                    <MealCard meal={meal} />
                  </Box>
                ))}
              </Box>
            </section>
          )}
        </Grid>
      </Grid>
    </main>
  );
};

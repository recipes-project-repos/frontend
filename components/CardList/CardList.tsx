import React, { useEffect } from 'react';
import Link from 'next/link';
import { Sidebar } from '@/components/Sidebar';
import { Meal } from '@/types/Meal';
import { Box, Grid } from '@mui/material';
import { Loader } from '@/components/Loader';
import { MealCard } from '@/components/MealCard';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { load } from '@/features/favorites/favoritesSlice';

export const CardList: React.FC = () => {
  const dispatch = useAppDispatch();
  const { favorites } = useAppSelector((state) => state.favorites);

  useEffect(() => {
    if (window !== undefined) {
      const favs = JSON.parse(localStorage.getItem('favorites') || '[]');
      dispatch(load(favs));
    }
  }, []);

  return (
    <Grid container>
      <Grid item xs={3}>
        <Sidebar />
      </Grid>

      <Grid item xs={9}>
        <Link
          href="/"
          className="article__title-actions--link my-list__home-link"
        >
          <ArrowBackIosIcon className="article__title-actions--arrow" />
          <h2>Back home</h2>
        </Link>
        {favorites.length === 0 ? (
          <Loader />
        ) : (
          <section className="meals-container meals-container--my-list">
            <Box className="meals-container__grid">
              {favorites.map((meal: Meal) => (
                <Box key={meal.idMeal} className="meals-container__card">
                  <MealCard meal={meal} />
                </Box>
              ))}
            </Box>
          </section>
        )}
      </Grid>
    </Grid>
  );
};

import * as React from 'react';
import Link from 'next/link';

import { Card, CardContent, CardMedia, Typography } from '@mui/material';

import { Meal } from '../../types/Meal';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { setId } from '@/features/meals/mealsSlice';
import { add, remove } from '@/features/favorites/favoritesSlice';
import { isInCollection } from '@/utils/helpingFunc';

interface Props {
  meal: Meal;
}

export const MealCard: React.FC<Props> = ({ meal }) => {
  const dispatch = useAppDispatch();
  const { idMeal, strMeal, strMealThumb, strCategory } = meal;
  const { favorites } = useAppSelector((state) => state.favorites);

  const handleClick = () => {
    dispatch(setId(Number(idMeal)));
  };

  const checkIsInFavs = isInCollection(meal, favorites);

  const handleFavClick = () => {
    if (checkIsInFavs < 0) {
      dispatch(add(meal));
    } else {
      dispatch(remove(meal));
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
  };

  return (
    <Card className="card">
      <CardContent className="card__content">
        <Link
          href={`/meal/${encodeURIComponent(idMeal)}`}
          onClick={handleClick}
        >
          <CardMedia
            component="img"
            alt={strMeal}
            height="200"
            image={strMealThumb}
            className="card__image"
          />
        </Link>

        <button
          type="button"
          className="card__add-box"
          onClick={handleFavClick}
        >
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className="card__title"
          >
            {strMeal}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {strCategory}
          </Typography>

          <div
            className={
              checkIsInFavs < 0 ? 'card__add-box--add' : 'card__add-box--remove'
            }
          >
            <a
              href="https://www.flaticon.com/free-icons/heart"
              title="heart icons"
            ></a>
          </div>
        </button>
      </CardContent>
    </Card>
  );
};

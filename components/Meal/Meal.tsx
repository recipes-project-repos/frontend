import React, { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAppDispatch, useAppSelector } from '@/app/hooks';

import { Button } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

import { getOneMeal } from '@/api/meals';
import { setOne } from '@/features/meals/mealsSlice';
import {
  normalizeProducts,
  normalizeRes,
  normalizeInstructions,
  normalizeYouLink,
} from '@/utils/helpingFunc';
// import { StarRating } from '../StarRating';
import { Loader } from '../Loader';

export const Meal = () => {
  const dispatch = useAppDispatch();
  const { meal } = useAppSelector((state) => state.meals);
  const router = useRouter();
  const { idMeal } = router.query;

  const loadData = async (id: number) => {
    const data = await getOneMeal(Number(id));

    dispatch(setOne(data[0]));
    return data[0];
  };

  useEffect(() => {
    try {
      if (idMeal) {
        loadData(Number(idMeal));
      }
    } catch {
      // eslint-disable-next-line no-console
      console.log(
        'Oops, something went wrong, try to return to the Home Page :)',
      );
    }
  }, [idMeal]);

  if (!meal) {
    return <Loader />;
  }

  const {
    strMeal,
    strCategory,
    strArea,
    strInstructions,
    strMealThumb,
    strYoutube,
  } = meal;

  const ingredients = normalizeRes('strIngredient', meal);

  const measures = normalizeRes('strMeasure', meal);

  const products = normalizeProducts(ingredients, measures);

  const instructions = normalizeInstructions(strInstructions);

  const youTubeLink = normalizeYouLink(strYoutube);

  return (
    <article className="article">
      <div className="article__container">
        <div className="article__box">
          <div className="article__title-actions">
            <Link href="/" className="article__title-actions--link">
              <ArrowBackIosIcon className="article__title-actions--arrow" />
            </Link>
            <h1 className="article__title-actions--title">{strMeal}</h1>
          </div>

          <div className="article__title-actions">
            <Button variant="text" color="inherit">
              <EditIcon sx={{ fontSize: 25 }} />
            </Button>

            <Button variant="text" color="inherit">
              <DeleteForeverIcon sx={{ fontSize: 25 }} />
            </Button>
          </div>
        </div>

        <div className="article__image-box">
          <img alt="IMG" src={strMealThumb} className="article__image" />
          <div className="article__facts">
            <h2>
              Category: <span className="article__category">{strCategory}</span>
            </h2>

            <h2>
              Area: <span className="article__category">{strArea}</span>
            </h2>

            <h2 className="article__hours">
              <AccessTimeIcon color="disabled" sx={{ fontSize: 30 }} />
              1hr
            </h2>
          </div>
        </div>

        {/* <div className="article__box article__rate">
          <div className="article__tags">
            {strTags?.split(',').map((tag: string, i: number) => (
              <Button key={i} className="article__tags--tag">
                {' '}
                {tag}
                {' '}
              </Button>
            ))}
          </div>

          <div className="article__stars stars">
            <StarRating />
          </div>
        </div> */}

        <div className="article__info">
          <h2>Ingredients:</h2>
          <div className="article__ingredients">
            <ul className="article__ingredients-list">
              {products.map((prod) => (
                <li key={prod}>{prod}</li>
              ))}
            </ul>

            <iframe
              width="700"
              height="400"
              className="article__video"
              src={youTubeLink}
            ></iframe>
          </div>

          <hr className="article__line" />

          <h2 className="article__steps">Steps</h2>
          <ol className="article__recipe">
            {instructions.map((instr) => (
              <li key={instr} className="article__recipe-steps">
                <span>{instr}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </article>
  );
};

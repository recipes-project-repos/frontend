/* eslint-disable curly */
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Meal } from '../types/Meal';

interface Props {
  meal: Meal;
}

export const MealCard: React.FC<Props> = ({ meal }) => {
  const { strMeal, strMealThumb, strCategory, strTags } = meal;

  const strTagsNomalize = () => {
    if (strTags) {
      return strTags
        .split(',')
        .slice(0, 3)
        .map((tag) => `#${tag} `);
    }

    return ['No tags yet...'];
  };

  const tags = strTagsNomalize();

  return (
    <Card className="card">
      <CardContent className="card__content">
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          className="card__title"
        >
          {strMeal}
        </Typography>

        <CardMedia
          component="img"
          alt={strMeal}
          height="200"
          image={strMealThumb}
          className="card__image"
        />

        <Typography variant="body2" color="text.secondary">
          {strCategory}
        </Typography>
      </CardContent>

      <CardActions className="card__actions card__actions--tags">
        {tags.map((tag) => (
          <a href="/" key={tag} className="card__actions--link">
            {tag}
          </a>
        ))}
      </CardActions>

      <CardActions className="card__actions">
        <Button size="small" className="card__details-button">
          Details
        </Button>
      </CardActions>
    </Card>
  );
};

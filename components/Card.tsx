import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import Grid from '@mui/material/Grid';

const cardInfo = {
  strMeal: 'name',
  strMealThumb: 'image',
  strCategory: 'Category',
  strTags: 'Tag, Tag, Tag, Tag'
};

// const BASE_URL = 'https://www.themealdb.com/api/json/v1/1/search.php?f=a&f=b&f=c';

export default function ImgMediaCard() {
  const { strMeal, strMealThumb, strCategory, strTags } = cardInfo;

  const strTagsNomalize = strTags.split(', ').map(tag => `#${tag[0].toLowerCase()}${tag.slice(1)}`);

  return (
    <Card className="card">
      <CardContent className="card__content">
        <Typography gutterBottom variant="h5" component="div" className="card__content__title">
            Lizard
        </Typography>

        <CardMedia
          component="img"
          alt={strMeal}
          height="200"
          image={strMealThumb}
          className="card__content__image"
        />
        <Typography variant="body2" color="text.secondary">
          {strCategory}
        </Typography>
      </CardContent>
      <CardActions className="card__actions card__actions--tags">
        <Grid container spacing={1}>
          {strTagsNomalize.map(tag => (
            <Grid item key={tag} xs={3}>
              <a href='/' > {tag} </a>
            </Grid>
          ))}
        </Grid>
        
      </CardActions>
      <CardActions className="card__actions">
        <Button size="small" className="card__detais-button">Details</Button>
      </CardActions>
    </Card>
  );
}

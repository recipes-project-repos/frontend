import { client } from '../utils/fetchData';
import { Meal } from '../types/Meal';

export const getMeals = () => {
  return client.get<Meal[]>('/search.php?f=a&f=b');
};

export const getOneMeal = (id: number) => {
  return client.get<Meal[]>(`/lookup.php?i=${id}`);
};

export const getMealsByTitle = (title: string) => {
  return client.get<Meal[]>(`/search.php?s=${title}`);
};

export const getMealsByIngredient = (ingredient: string) => {
  return client.get<Meal[]>(`/filter.php?i=${ingredient}`);
};

export const getMealsByCategory = (category: string) => {
  return client.get<Meal[]>(`/filter.php?c=${category}`);
};

/* eslint-disable @typescript-eslint/no-explicit-any */
import { Meal } from '@/types/Meal';

export const normalizeRes = (value: string, obj: any) => {
  const arr = [];
  let keys: typeof obj;

  for (keys in obj) {
    if (keys.includes(value) && obj[keys] && obj[keys].length) {
      const index = obj[keys].indexOf('/');

      if (index > 0) {
        arr.push(obj[keys].slice(0, index));
        continue;
      }
      arr.push(obj[keys]);
    }
  }
  return arr || [];
};

export const normalizeProducts = (arr1: string[], arr2: string[]) => {
  const arr = [];

  for (let i = 0; i < arr1.length; i++) {
    arr.push(`${arr1[i]} — ${arr2[i]}`);
  }

  return arr;
};

export const normalizeInstructions = (instruct: string) => {
  const arr = instruct.split('.\r');
  return arr;
};

export const normalizeYouLink = (link: string) => {
  const linkCopy = link.slice();

  const lastSlash = link.lastIndexOf('/');
  const equal = link.lastIndexOf('=');

  const resultLink =
    linkCopy.slice(0, lastSlash) + '/embed/' + linkCopy.slice(equal + 1);

  return resultLink;
};

export const filterMeals = (
  meals: Meal[],
  byTitle = '',
  byCategory: string[] = [],
  byIngredient: string[] = [],
) => {
  let mealsFiltered = [...meals];

  if (byTitle) {
    const normTitle = byTitle.toLowerCase();

    mealsFiltered = mealsFiltered.filter((meal: Meal) =>
      meal.strMeal.toLowerCase().includes(normTitle),
    );
  }

  if (byCategory.length) {
    mealsFiltered = mealsFiltered.filter((meal: Meal) =>
      byCategory.some((cate: string) => cate.includes(meal.strCategory)),
    );
  }

  if (byIngredient.length) {
    mealsFiltered = mealsFiltered.filter((meal: Meal) => {
      const allIngred = normalizeRes('strIngredient', meal);
      if (byIngredient.some((ingr: string) => allIngred.includes(ingr))) {
        return meal;
      }
    });
  }

  return mealsFiltered;
};

export const isInCollection = (item: Meal, collection: Meal[]) => {
  return collection.findIndex((card) => card.idMeal === item.idMeal);
};

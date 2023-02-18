import { client } from '../utils/fetchData';

export const getIngredients = () => {
  return client.get<string[]>('/list.php?i=list');
};

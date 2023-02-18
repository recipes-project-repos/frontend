import { client } from '../utils/fetchData';

export const getCategories = () => {
  return client.get<string[]>('/list.php?c=list');
};

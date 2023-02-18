import React from 'react';
import { Provider } from 'react-redux';

import ResponsiveAppBar from '@/components/AppBar/AppBar';
import { Meal } from '@/components/Meal';
import store from '@/app/store';

export default function MealPage() {
  return (
    <Provider store={store}>
      <ResponsiveAppBar barStyle="app-bar__button" />
      <Meal />
    </Provider>
  );
}

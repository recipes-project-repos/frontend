import React from 'react';
import { Provider } from 'react-redux';

import ResponsiveAppBar from '@/components/AppBar/AppBar';
import store from '@/app/store';

import { CardList } from '@/components/CardList';

export default function Favorites() {
  return (
    <Provider store={store}>
      <ResponsiveAppBar barStyle="app-bar__button app-bar__button--hover" />
      <CardList />
    </Provider>
  );
}

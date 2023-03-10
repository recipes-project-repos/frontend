/* eslint-disable max-len */
import React from 'react';
import Head from 'next/head';
import { Provider } from 'react-redux';
// import { Inter } from '@next/font/google';
import ResponsiveAppBar from '@/components/AppBar/AppBar';
import { MainSection } from '@/components/MainSection';

import store from '@/app/store';

// const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Recipes</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Provider store={store}>
        <ResponsiveAppBar barStyle="app-bar__button" />
        <MainSection />
      </Provider>
    </>
  );
}

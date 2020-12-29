import React from 'react';
import Login from './views/Login';
import Home from './views/Home';
import FilmDetail from './views/FilmDetail';

const routes = [
  {
    path: '/',
    exact: true,
    component: () => <Home />
  },
  {
    path: '/login',
    exact: true,
    component: () => <Login />
  },
  {
    path: '/film/:slug',
    exact: true,
    component: () => <FilmDetail />
  }
];

export default routes;


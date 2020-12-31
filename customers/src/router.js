import React from 'react';
import Login from './views/Login';
import Home from './views/Home';
import FilmDetail from './views/FilmDetail';
import Completed from './views/Completed';
import Booking from './views/Booking';

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
  },
  {
    path: '/completed',
    exact: true,
    component: () => <Completed />
  },
  {
    path: '/Booking/:slug',
    exact: true,
    component: () => <Booking />
  }
];

export default routes;


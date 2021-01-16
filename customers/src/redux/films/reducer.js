import UsersTypes from './types';
// import update from 'immutability-helper';

const initialState = {
  status: true,
  films: [],
  filmDetail: {}
}

export default function filmsReducer(state = initialState, action) {
  let newState;

  const { type, payload = {} } = action;
  switch (type) {
    default: 
      newState = state;
  }
  return newState
}
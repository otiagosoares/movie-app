/*eslint no-unreachable: "error"*/
import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from '../pages/Home/moviesSlice';


const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});

export default store;

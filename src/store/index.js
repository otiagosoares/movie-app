/*eslint no-unreachable: "error"*/
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice'
import moviesReducer from '../pages/Home/moviesSlice';


const store = configureStore({
  reducer: {
    counter: counterReducer,
    movies: moviesReducer,
  },
});

export default store;

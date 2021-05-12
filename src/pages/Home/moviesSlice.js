import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchMovies } from '../../services/fetchApi';

const initialState = {
  movies: [],
  favorites: [],
  loading: 0,
};

export const loadMoviesAsync = createAsyncThunk('movies/fetchMovies',
  async (title) => {
    const response = await  fetchMovies(`&s=${title}`);
    if(response.data.Response === 'True'){
      return response.data.Search;
    }
  }
);

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  
  reducers: {
    addFavorite: (state, action) => {
      state.favorites = [...state.favorites, action.payload];
    },
  
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadMoviesAsync.pending, (state) => {
        console.log('state', state.loading)
        state.loading = 1;
      })
      .addCase(loadMoviesAsync.fulfilled, (state, action) => {
        console.log('state', state.loading)
        state.loading = 0;
        state.movies = action.payload;
      });
  },
});

export const { load } = moviesSlice.actions;

export const selectLoading= (state) => state.loading;

export const selectMovies = (state) => state.movies;
export default moviesSlice.reducer;

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchMovies } from '../../services/fetchApi';

const initialState = {
  movies: [],
  favorites: [],
  loading: true,
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
  loading: true,
  
  reducers: {
    addFavorite: (state, action) => {
      state.favorites = [...state.favorites, action.payload];
    },
    loadingState: (state, action) => {
      state.loading = action.payload;
    }
  
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadMoviesAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(loadMoviesAsync.fulfilled, (state, action) => {
        state.loading = '';
        state.movies = action.payload;
      });
  },
});

export const { addFavorite, loadingState } = moviesSlice.actions;
export const isLoading= (state) => state.movies.loading;
export const selectMovies = (state) => state.movies;
export const selectFavorites = (state) => state.movies.favorites;
export default moviesSlice.reducer;

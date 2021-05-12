import React from 'react';
import { useSelector }  from 'react-redux';
import { selectFavorites } from '../Home/moviesSlice';
import CardMovies from '../../components/CardMovies'

export default function Favorites() {
  
  const favorites = useSelector(selectFavorites);

  return (
    <div>
      <h1>Favorites</h1>
      {favorites.length ? <CardMovies movies={favorites} /> : <h2> # No favorite movies</h2>}
    </div>
  )
}

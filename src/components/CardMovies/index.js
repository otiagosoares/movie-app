import React from 'react';
import P from 'prop-types';
import { Link } from 'react-router-dom'
import { BiCameraMovie, BiCalendarStar } from 'react-icons/bi';
import {ContainerMovies, Card} from './styles';
import ButtonAddFavorite  from '../ButtonAddFavorite';
import Thumb from '../../assets/images/thumb.svg';
function CardMovies({movies, isFavorite}) {
  return (
    <>
      <ContainerMovies>
        {movies && movies.map( movie => (
          <Card key={movie.imdbID}>
            <Link to={`/details/${movie.imdbID}`} >
              <div className="card-thumb">
                <img src={(movie.Poster === 'N/A') ? Thumb : movie.Poster} alt={movie.Title} />
              </div>
            </Link>
            <div className="card-content">
              <Link to={`/details/${movie.imdbID}`} >
                <h2>{movie.Title}</h2>
                <p>
                  <span><BiCameraMovie width={30}/> {movie.Type} </span> 
                  <span><BiCalendarStar width={30} /> {movie.Year}</span>  
                </p>
              </Link>
              </div>
              <ButtonAddFavorite movie={movie} isFavorite={isFavorite} />
          </Card>
      ))}
      </ContainerMovies>
    </>
  )
}

export default CardMovies;

CardMovies.defaultProps = {
  movies: [],
}

CardMovies.propTypes = {
  movies: P.array,
  isFavorite: P.bool,
}

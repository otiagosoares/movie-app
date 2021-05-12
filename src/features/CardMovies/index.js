import React from 'react';
import P from 'prop-types';
import {Link } from 'react-router-dom'
import { FaRegHeart } from 'react-icons/fa';
import { BiCameraMovie, BiCalendarStar } from 'react-icons/bi';
import {Card} from './styles';

function CardMovies(props) {

  const {movies} = props;
  return (
    <>
      {movies && movies.map( movie => (
        <Card key={movie.imdbID}>
          <Link to={`/details/${movie.imdbID}`} >
            <div className="card-thumb">
              <img src={movie.Poster} alt={movie.Title} />
            </div>
            <div className="card-content">
              <h2>{movie.Title}</h2>

              <p>
                <span><BiCameraMovie width={30}/> {movie.Type} </span> 
                <span><BiCalendarStar width={30} /> {movie.Year}</span>  
              </p>
              <span href="" className="btn-favorite">
                <FaRegHeart />
              </span>
            </div>
          </Link>
        </Card>
      ))}
    </>
  )
}

export default CardMovies;

CardMovies.defaultProps = {
  movies: [],
}

CardMovies.propTypes = {
  movies: P.array,
}

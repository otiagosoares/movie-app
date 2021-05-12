import React from 'react';
import { useDispatch }  from 'react-redux';
import P from 'prop-types';
import { Link } from 'react-router-dom'
import { FaRegHeart } from 'react-icons/fa';
import { BiCameraMovie, BiCalendarStar } from 'react-icons/bi';
import {ContainerMovies, Card} from './styles';
import { toast } from 'react-toastify';

import Thumb from '../../assets/images/thumb.svg';

import { addFavorite } from '../../pages/Home/moviesSlice';


function CardMovies(props) {
  const dispatch = useDispatch();

  const handleAddToFavorites = (movie) =>{
    console.log(movie);
    dispatch(addFavorite(movie));
    toast.dark('Added to Favorites! =D', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  const {movies} = props;

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
                <span className="btn-favorite" onClick={() => handleAddToFavorites(movie)}>
                  <FaRegHeart />
                </span>
              </div>
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
}

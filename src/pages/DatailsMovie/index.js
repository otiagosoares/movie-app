import React, { useEffect, useState, useCallback } from 'react';
import {Redirect} from 'react-router-dom';
import Loading from '../../features/Loading'
import {fetchMovies} from '../../services/fetchApi';

import {ContainerDtailMovie} from './styles';


export default function DetailsMovie(props) {
  
  const [notFound, setNotFound] = useState(false);
  const [details, setDetails] = useState({});

  const {id} = props.match.params;  

  const handleLoadMovie = useCallback(async (id) => {
    const movieLoaded = await fetchMovies(`&i=${id}`);
    if(movieLoaded.data.Error){
      setNotFound(true);
    }else{
      setDetails({...movieLoaded.data})
    }
  }, [])
  
  useEffect(() => {
    handleLoadMovie(id);
  }, [handleLoadMovie, id])

  // Actors: "Tom Cruise, Paula Patton, Simon Pegg, Jeremy Renner"
  // Awards: "5 wins & 30 nominations."
  // BoxOffice: "$209,397,903"
  // Country: "USA"
  // DVD: "06 Jun 2014"
  // Director: "Brad Bird"
  // Genre: "Action, Adventure, Thriller"
  // Language: "English, Russian, French, Arabic, Swedish"
  // Metascore: "73"
  // Plot: "The IMF is shut down when it's implicated in the bombing of the Kremlin, causing Ethan Hunt and his new team to go rogue to clear their organization's name."
  // Poster: "https://m.media-amazon.com/images/M/MV5BMTY4MTUxMjQ5OV5BMl5BanBnXkFtZTcwNTUyMzg5Ng@@._V1_SX300.jpg"
  // Production: "Bad Robot"
  // Rated: "PG-13"
  // Ratings: (3) [{…}, {…}, {…}]
  // Released: "21 Dec 2011"
  // Response: "True"
  // Runtime: "132 min"
  // Title: "Mission: Impossible - Ghost Protocol"
  // Type: "movie"
  // Website: "N/A"
  // Writer: "Bruce Geller (television series \"Mission: Impossible\"), Josh Appelbaum, André Nemec"
  // Year: "2011"
  // imdbID: "tt1229238"
  // imdbRating: "7.4"
  // imdbVotes: "460,906"

  return (
    <>
      { notFound && <Redirect to="/not-found" /> }
      { !details ? <Loading /> : 
        <ContainerDtailMovie>
            <h1>{details.Title}</h1>
            <p> Director: {details.Director} </p>
            <p> Run Time: {details.Runtime} </p>
            {/* <img src={details.Poster} alt="" /> */}
        </ContainerDtailMovie>      
      }


    </>
  )
}

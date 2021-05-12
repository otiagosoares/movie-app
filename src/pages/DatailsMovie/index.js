import React, { useEffect, useState, useCallback } from 'react';
import {Redirect} from 'react-router-dom';
import Loading from '../../features/Loading'
import {fetchMovies} from '../../services/fetchApi';

import {BsStarFill} from 'react-icons/bs';
import {CgAwards} from 'react-icons/cg';
import {BiCameraMovie, BiPencil, BiDollarCircle, BiWorld} from 'react-icons/bi';
import {GiDirectorChair} from 'react-icons/gi';
import {MdAssignmentTurnedIn, MdNewReleases} from 'react-icons/md';
import {FaUsers} from 'react-icons/fa';
import {CgTimelapse} from 'react-icons/cg';
import {ContainerDtailMovie} from './styles';


export default function DetailsMovie(props) {
  
  const [notFound, setNotFound] = useState(false);
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(true);

  const {id} = props.match.params;  

  const handleLoadMovie = useCallback(async (id) => {
    const movieLoaded = await fetchMovies(`&i=${id}`);
    if(movieLoaded.data.Error){
      setNotFound(true);
    }else{
      setDetails({...movieLoaded.data});
      setLoading(false)
    }
  }, [])
  
  useEffect(() => {
    handleLoadMovie(id);
  }, [handleLoadMovie, id])

  return (
    <>
      { notFound && <Redirect to="/not-found" /> }
      {loading && <Loading /> }
      { details ?
          <section>
            <h1><BiCameraMovie /> {details.Title} ({details.Year})</h1>
            <h2>{details.Genre}</h2>
            <ContainerDtailMovie>
              <div className="col-1">
                  <h2>Plot <span className='badge'>{details.Type}</span></h2>
                  <p>{details.Plot}</p>
                  <p><span className="label-details"><CgAwards /> Awards:</span> {details.Awards} </p>
                  <p><span className="label-details"><BiPencil /> Writer:</span> {details.Writer} </p>
                  <p><span className="label-details"><GiDirectorChair /> Director:</span> {details.Director} </p>
                  <p><span className="label-details"><MdAssignmentTurnedIn/> Production:</span> {details.Production} </p>
                  <p><span className="label-details"><BiDollarCircle/> Box Office:</span> {details.BoxOffice} </p>
                  <p><span className="label-details"><FaUsers /> Actors:</span> {details.Actors} </p>
                  <p><span className="label-details"><CgTimelapse /> Run Time:</span> {details.Runtime} </p>
                  <p><span className="label-details"><BiWorld /> Country:</span> {details.Country} </p>
                  <p><span className="label-details"><MdNewReleases /> Released:</span> {details.Released} </p>
              </div>
              <div className="col-2">
                <img src={details.Poster} alt={details.Title} />
                <h2>{details.imdbRating} <BsStarFill/> | {details.imdbVotes} <small>Votes</small></h2>
              </div>
            </ContainerDtailMovie>      
          </section>
      : ''}
    </>
  )
}

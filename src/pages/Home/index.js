import React, { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Loading from '../../features/Loading'
import CardMovies from '../../features/CardMovies';
import { ContainerMovies, ContainerFormSearch} from "./styles";
import {BiMovie} from 'react-icons/bi';

import {selectMovies, loadMoviesAsync, selectLoading } from './moviesSlice';

const Home =  () => {

  const [searchText, setSearchText] = useState('fast');
  const loading = useSelector(selectLoading);

  const {movies} = useSelector(selectMovies);
  const dispatch = useDispatch();  

  const HandleLoadMoviesByTitle = async (title) =>{
    dispatch(loadMoviesAsync(title));
  }

  const handleChangeTextSearch = (e) => {
    setSearchText(e.target.value);
  }

  const stylesH1 = {
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
  }
  
  return (
    <>
      <h1 style={stylesH1}> <BiMovie /> Movie App</h1>
      <ContainerFormSearch>
        <input type="search" 
          value={searchText} 
          placeholder="Type Title Movie"
          onChange={handleChangeTextSearch}
          />
        <button onClick={() => HandleLoadMoviesByTitle(searchText)}>
          Search Movie
        </button>
      </ContainerFormSearch>

      {(loading === 0) ? <Loading /> : 
        <ContainerMovies>
          {(movies)? <CardMovies movies={movies} /> : <h1>No Results</h1>  }
        </ContainerMovies>
      }
    </>
  )
}

export default Home;
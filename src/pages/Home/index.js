import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Loading from '../../components/Loading'
import CardMovies from '../../components/CardMovies';
import { ContainerFormSearch} from "./styles";
import {BiMovie} from 'react-icons/bi';

import {
  selectMovies, 
  loadMoviesAsync, 
  isLoading, 
  loadingState } from './moviesSlice';

const Home =  () => {

  const [searchText, setSearchText] = useState('');
  const loading = useSelector(isLoading);

  const {movies} = useSelector(selectMovies);
  const dispatch = useDispatch();  

  const HandleLoadMoviesByTitle = async (title) =>{
    dispatch(loadMoviesAsync(title));
  }

  const handleChangeTextSearch = (e) => {
    setSearchText(e.target.value);
  }

  useEffect(() => {
   dispatch(loadingState(false));
  })

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
          placeholder="Type a Title..."
          onChange={handleChangeTextSearch}
          />
        <button onClick={() => HandleLoadMoviesByTitle(searchText)}>
          Search Movie
        </button>
      </ContainerFormSearch>
      {(searchText.length > 0) ? <h2>Results for "{searchText}":</h2> : ''}

    {(movies) ? <CardMovies movies={movies} />
      : <h1>No Results</h1>  }
      {(loading) && <Loading /> }
    </>
  )
}

export default Home;
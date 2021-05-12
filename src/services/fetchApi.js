import axios from 'axios';


const baseUrlMoviesAPI = `${process.env.REACT_APP_API_OMD_BASE_URL}/?apikey=${process.env.REACT_APP_API_OMD_KEY}&`

export const fetchMovies =  axios.create({
  baseURL: baseUrlMoviesAPI
})
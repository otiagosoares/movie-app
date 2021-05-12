import React, {useState} from 'react';
import P from 'prop-types';
import { useDispatch }  from 'react-redux';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { addFavorite } from '../../pages/Home/moviesSlice';
import { toast } from 'react-toastify';
import {BtnAddFavorite} from './styles';

export default function ButtonAddFavorite({movie, isFavorite}) {
  
  const dispatch = useDispatch();
  const [clicked, setClicked] = useState(false)

  const handleAddToFavorites = (movie) =>{
    if(isFavorite){
      toast.dark('This Movie is Favorite! =D', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    
    setClicked(!clicked);
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
  return (
    <>
       <BtnAddFavorite className="btn-favorite" onClick={() => handleAddToFavorites(movie)}>
          {(clicked || isFavorite)? <FaHeart /> :  <FaRegHeart /> }
        </BtnAddFavorite>
    </>
  )
}

ButtonAddFavorite.defaultProps = {
  movie: [],
  isFavorite: false
}

ButtonAddFavorite.propTypes = {
  movie: P.object,
  isFavorite: P.bool,
}

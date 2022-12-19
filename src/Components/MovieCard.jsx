import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import StarRating from './StarRating'
import './StyleSheet.css';

const MovieCard = ({movie}) => {
    
  return (
    <div>
    <Link className='linkClass' to={`/trailer/${movie.id}`}> 
    <div className='img' >
            <h2 className='colorTitle'>   {movie.title}         </h2>
            <img src={movie.posterURL} alt='poster' height={350} width={250}/>
            <StarRating key={movie.id} rate={movie.rating} /> 
            <h3> {movie.date} </h3>
            
           
            </div>  
            </Link>      
         </div>
  )
}

export default MovieCard
import './StyleSheet.css';
import '../App.css';
import React, { useState } from 'react'
import MovieCard from './MovieCard';


const MovieList = ({films}) => {
     
 
  return (
    <div className='box' >
     
     {films.map((el)  => < MovieCard    movie={el}    key={el.id}   /> )}
     

      
  
  </div>
  )
}

export default MovieList


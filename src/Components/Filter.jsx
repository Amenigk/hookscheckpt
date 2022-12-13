import React,{useState} from 'react'
import StarRating from './StarRating';
import './StyleSheet.css';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

 
const Filter = ({films,searchedTitle,handleChange,rate,handleRating}) => {
                                                                                                   
                                                                                        
 return (
    <div>
      
      <div className="search-container">

         <label  className='colorTitle'>  App Search </label>
         <form >
         <input type="text" value={searchedTitle} onChange={handleChange} placeholder="Search by the title ..." />
         </form>
         <StarRating key={films.id} rate={rate} handleRating={handleRating}  /> 

      </div>
        


  
   </div>
    
  )
}

export default Filter
import React from 'react'



const StarRating = ({rate,handleRating}) => {
     
    function stars(x){
        let star=[]
        for (let i = 1; i <= 5 ; i++) {
             if (i<=x) { star.push(<span key={Math.random()} onClick={()=>handleRating(i)}   style={{color:'gold', fontSize:'100',cursor: 'pointer' }}>  ★ </span>)       
             }
             else star.push(<span key={Math.random()}  onClick={()=>handleRating(i)}  style={{color:'black' , fontSize:'100', cursor:'pointer' }}> ★  </span>)
            }            
         
    return star;
    }

  return (
    <div>
      {stars(rate)}
    </div>
  )
}

export default StarRating












// import React, { useState } from 'react'
// import { Rating } from 'react-simple-star-rating'

// const StarRating = ({x}) => {
//     // const [rating, setRating] = useState(x)
//     // const handleRating = (rate ) => {
//     //     setRating(rate)
    
//     //     // other logic
//     //   }
//   return (
//     <div>
//         <Rating
//         // onClick={handleRating}
//         // onPointerEnter={onPointerEnter}
//         // onPointerLeave={onPointerLeave}
//         // onPointerMove={onPointerMove}
//         /* Available Props */
//         initialValue={x}
//         readonly={true}
//       />
//     </div>
//   )
// }

// export default StarRating
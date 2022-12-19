import React from 'react'
import { useParams } from 'react-router-dom'

const Trailer = ({films}) => {
    const params=useParams()
    console.log(params)
    console.log(films)
    const elt=films.find(x=> x.id==params.id)
  return (
    <div>


        <p className='colorDescription'>
            {elt.description}
        </p>
       <iframe className='frameClass' src={elt.trailer}  width={700} height={400}   ></iframe>
       
       </div>
  )
}

export default Trailer
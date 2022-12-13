
import './App.css';
import MovieList from './Components/MovieList';
import Adding from './Components/Adding';
import Filter from './Components/Filter';
import {useState} from 'react' ;
<script src="https://kit.fontawesome.com/a1ae0fd292.js" crossorigin="anonymous"></script>
 

function App() {



  const [films,setFilms]= useState([
    {id:Math.random(), title:'Twilight 1', description:'drama', posterURL:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQk2yMIaQTDmB0_o9pwxhdEGBywECjMGYbST6HvQrJ1FeMyo4xB' ,rating:'3' ,date: '2008' },
    {id:Math.random(), title:'New Moon', description:'drama', posterURL:'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQvvM_u1fPnKxY7y1fXB5F7in1rHLn-z0_CKj5C8TaJ6LMlzS51' ,rating: '2',date: '2008' },
    {id:Math.random(), title:'Eclipse', description:'drama', posterURL:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSfjA-NQ1WZ9cYEwbUnh_b611fRkPFC4fxkjs4WHNrXQTSo0t0a' ,rating: '4',date: '2009' },
    {id:Math.random(), title:'Tome Two', description:'drama', posterURL:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmZ3xZ2LnWzencwmgZqN31_nrGUaSICTrSTymST3ce3xUFHFFU' ,rating: '2',date: '2011' },
    {id:Math.random(), title:'Final SAGA', description:'drama', posterURL:'https://www.avoir-alire.com/IMG/jpg/twilight_affiche_integrale-2.jpg' ,rating: '3' ,date: '2010' },
    {id:Math.random(), title:'Breaking Down', description:'drama', posterURL:'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRFoD3q5inVsGhOjJyxlFvrKsA7oXO4vze6LTtiTJ6L0aXV1BED' ,rating: '3',date: '2012' }
  ])
   

  
  const  hAdd=(newfilm)=>{setFilms([...films,newfilm])}
  const [searchedTitle,setSearchedTitle]= useState("")
  const handleChange =(e)=> setSearchedTitle(e.target.value)
  const [rate,setRate]= useState(1)
  const handleRating =(x) => setRate(x)

 


  return (
    <div  >
      <br></br>
      <h1 className='colorTitle App'> Movies Application   </h1>
      <br></br>
      <br></br>
      <Filter key={films.id}   films={films}  searchedTitle={searchedTitle}  handleChange={handleChange} 
                               rate={rate} handleRating={handleRating} />      
      <br></br>
      <Adding  key={films.id}   films={films}  Add={hAdd} /> <br></br>
      <MovieList  key={films.id} films={films.filter(el=> el.title.toLowerCase().includes(searchedTitle.toLowerCase())
                                                     && el.rating>= rate )} />
         
   


    </div>
  );
}

export default App;

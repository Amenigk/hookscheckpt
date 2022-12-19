
import './App.css';
import MovieList from './Components/MovieList';
import Adding from './Components/Adding';
import Filter from './Components/Filter';
import Trailer from './Components/Trailer';
import {useState} from 'react' ;
import { BrowserRouter, Routes,Route } from 'react-router-dom';
<script src="https://kit.fontawesome.com/a1ae0fd292.js" crossorigin="anonymous"></script>
 

function App() {



  const [films,setFilms]= useState([
    { id:Math.random(),
      title:'Twilight 1',
      description:'When Bella Swan relocates to Forks, Washington, to live with her father, she meets a mysterious boy, Edward Cullen, and gets drawn to him. Later, she discovers that he is a vampire.', 
      posterURL:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQk2yMIaQTDmB0_o9pwxhdEGBywECjMGYbST6HvQrJ1FeMyo4xB' ,
      rating:'3' ,
      trailer:"https://www.youtube.com/embed/QDRLSqm_WVg",
      date: '2008' },
    {id:Math.random(),
     title:'New Moon', 
     description:'When Edward realises that Bella safety is threatened because of him, he leaves her and moves away. She ends up finding solace in Jacob Black, a werewolf.', 
     posterURL:'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQvvM_u1fPnKxY7y1fXB5F7in1rHLn-z0_CKj5C8TaJ6LMlzS51' ,
     rating: '4',
     trailer:"https://www.youtube.com/embed/q58iQSHhZGg",
     date: '2009' },
    {id:Math.random(),
     title:'Eclipse',
     description:'High school student Bella is haunted by the revengeful vampire Victoria. Amid this, she is coerced to deal with her graduation and a crucial choice between love and friendship.', 
     posterURL:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSfjA-NQ1WZ9cYEwbUnh_b611fRkPFC4fxkjs4WHNrXQTSo0t0a' ,
     rating: '4',
     trailer:'https://www.youtube.com/embed/kX2DKZcDM-o',
     date: '2010' },
     {id:Math.random(), 
      title:'Breaking Down Tome 1', 
      description:'After consummating her marriage with Edward, Bella realises that she has become pregnant with a child that is half-human, half-vampire. Further, the unborn child has many enemies in the outside world.', 
      posterURL:'https://www.avoir-alire.com/IMG/jpg/twilight_affiche_integrale-2.jpg' ,
      rating: '3' ,
      trailer:'https://www.youtube.com/embed/PQNLfo-SOR4',
      date: '2011' },
    {id:Math.random(), 
      title:'Breaking Down  Tome 2', 
      description:'Bella is now a vampire and lives happily with Edward and her daughter, Renesmee. When someone misinforms the Volturi that Renesmee is immortal, they set out to kill the child and the culprit.', posterURL:'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRFoD3q5inVsGhOjJyxlFvrKsA7oXO4vze6LTtiTJ6L0aXV1BED' ,
      rating: '3',
      trailer:'https://www.youtube.com/embed/Ocz50YJOFTM',
      date: '2012' }
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
      <BrowserRouter>
      <Filter key={films.id}   films={films}  searchedTitle={searchedTitle}  handleChange={handleChange} 
                               rate={rate} handleRating={handleRating} />      
      <Routes>
     
      <Route path={"/"} element={  <MovieList  key={films.id} films={films.filter(el=> el.title.toLowerCase().includes(searchedTitle.toLowerCase())
                                                    && el.rating>= rate )} />}/>

      <Route path="/trailer/:id" element={  < Trailer    films={films}  />}/>     


      </Routes>
      <Adding  key={films.id}   films={films}  Add={hAdd} /> <br></br>
      </BrowserRouter>
    </div>
  );
}

export default App;

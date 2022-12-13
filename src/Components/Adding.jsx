import './StyleSheet.css';
import '../App.css';
import React, { useState } from 'react'
import StarRating from './StarRating';
import Modal from 'react-modal';


const Adding = ({films,Add}) => {
     

    // MODAL import//////////////////////////////////////////////////////////////////////////////////////////
    const customStyles = {
      content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
      },
    };
    
    // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
    Modal.setAppElement('#root');
  
  
    const [modalIsOpen, setIsOpen] = React.useState(false);
     function openModal() {
      setIsOpen(true);
    }
  
    function closeModal() {
      setIsOpen(false);
    }
   //////////////////////////////////////////////////////////////////////////////////////////////////////////
      
   
   ///MyStates
   
        const [title,setTitle]= useState("")
        const [desc,setDesc]= useState("")
        const [url,setURL]= useState("") 
        const [rate,setRate]= useState(1)
        const [date,setDate]= useState('')

   ////My Functions
        const handleChangeTitle =(e)=>  {setTitle(e.target.value)}
        const handleChangeDescription =(e)=>  {setDesc(e.target.value)}
        const handleChangeURL =(e)=>  {setURL(e.target.value)}
        const handleChangeDate =(e)=>  {setDate(e.target.value)}
       
        const handleAdd = (x,y,z,r,d) => {
        let newFilm ={ 
          id:Math.random(),
          title: x, 
          description:y,
          posterURL:z ,
          rating :r,
          date:d
        }
        Add(newFilm) 
        closeModal()
        }
  
        const handleSubmit=(e)=>{ e.preventDefault() 
                                   handleAdd(title,desc,url,rate,date)
                                   setTitle('')
                                   setDesc('')
                                   setURL('')
                                   setRate(1)
                                   setDate('')}
  
        const handleRating =(x) => setRate(x)
  
  
    return (
      <div className='App'>
       
       <button  className='btn add-movie-btn' onClick={openModal}> Add Film </button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
         <div className='backround App'>
             
            <h3 className='colorTitle'> Add to list </h3>
            <form onSubmit={handleSubmit}  >
          
            <input   type="text" value={title} onChange={handleChangeTitle} name="Title" placeholder="Your film title..."/>   <br></br>
            <input   type="text" value={desc}  onChange={handleChangeDescription} name="Description" placeholder="Describe it.."/>  <br></br>
            <input   type="text" value={url}   onChange={handleChangeURL} name="Poster" placeholder="Your film poster URL.."/>  <br></br>
            <input   type="date" value={date} onChange={handleChangeDate} name="Date" placeholder="Your film date of release.."/>  
      
             <StarRating  rate={rate} handleRating={handleRating}  /> 
            <input   type="submit" value="Add"></input>  <br></br>
         
            </form>   
        </div>
          
        </Modal>
  
  
  
        
    
    </div>
    )
  }
export default Adding
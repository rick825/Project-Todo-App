import React, { useState } from 'react';
import './SetEdit.css';

const SetEdit = (Props,{tName,ttoday}) => {

    const [fh,setfh] = useState("");
    const [El,setEl] = useState("");

    const handleHead=(e)=>{  
            setfh(e.target.value); 
     }
 
     const handleElab = (e) =>{ 
         setEl(e.target.value);
     }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(fh.trim().length !== 0 && El.trim().length !== 0){
            Props.onSubmit(fh,El);
        }else if(fh.trim().length !== 0){
            Props.onSubmit(fh,Props.ttoday);
        }else if(El.trim().length !== 0){
            Props.onSubmit(Props.tName,El);
        }else{
            console.log("No input");
            Props.onSubmit(Props.tName,Props.ttoday);
        }
      
    }

  return (
    <div  className='editInp'>
    <form  className='form' onSubmit={handleSubmit}>
      <input type="text" placeholder='New Head' value={fh} onChange={handleHead}/>
      <input type="text" placeholder='New Todo' value={El} onChange={handleElab}/>
      <button className='btn'>Submit</button>
      </form>
    </div>
  )
}

export default SetEdit
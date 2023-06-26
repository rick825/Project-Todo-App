import React,{useState} from 'react';
import './TodoForm.css';

const TodoForm = (props) => {

    const [fHead, setfHead] = useState("");
    const [Elab,setElab] = useState("");

    const handleHead=(e)=>{
       setfHead(e.target.value);
    }

    const handleElab = (e) =>{
        setElab(e.target.value);
    }

    // sending data to Parent component
    const handleSubmit = (e) =>{
        e.preventDefault();
        props.onSubmit(fHead,Elab);
    }


  return (
    <div className='mainInput'>
    <h2>Add Your Todos</h2>
    <form className='form' onSubmit={handleSubmit}>
     <input type="text" placeholder='Todo Head' value={fHead} onChange={handleHead}/>
     <input type="text" placeholder='Elaborate Todo' value={Elab} onChange={handleElab}/>
     <button className='btn'>Submit</button>
     </form>
    </div>
  )
}

export default TodoForm
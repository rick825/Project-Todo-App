
import React,{useState} from 'react'
import './Main.css';
import TodoForm from './TodoForm';
import TodoIcon from './TodoIcon';
import SetEdit from './SetEdit';
import './responsive.css';
import check from './images/check.png';
import unchecked from './images/unchecked.png';

const Main = () => {
   
    const todoData = [
        
        {id:0,todoname:"Study",todotoday:"Completing CSS today"},
        {id:1,todoname:"Coding",todotoday:"Leetcode 2 Problems"}
    ];

    const [myArray,setmyArray] = useState(todoData);
    const [isActive, setIsActive] = useState(true);
    const [isChecked, setIsChecked] = useState([]);
    const [checkedItems, setCheckedItems] = useState([]);
    const [onEdit,setonEdit] = useState([]);



    const handleClick = () =>{
        setIsActive(current => !current);
    }


    // getting data from child form
    const getData = (Head,Elab) =>{
    const new_data = {
      id:Math.random(),
      todoname: Head,
      todotoday: Elab
    }
    console.log("from =>"+Head);
    setmyArray([...myArray,new_data]);
    };

    // check 
    const handleCheck = (id) =>{
        console.log(id);
      // setIsChecked(id);
      if (checkedItems.includes(id)) {
        setCheckedItems(checkedItems.filter(i => i !== id));
        setIsChecked(isChecked.filter(i => i !== id));
      } else {
        setCheckedItems([...checkedItems, id]);
        setIsChecked([...isChecked,id]);
      }
    }

    const removeElm = (id) =>{
      setmyArray(myArray.filter((currElm)=>{
          return currElm.id !== id;
      }))

  }

// on Edit drop down Edit Form
  const updateElm = (id) =>{
    if(onEdit.includes(id)){
      setonEdit(onEdit.filter(i => i !== id));
     
    } else {
      setonEdit([...onEdit,id]);
      
  }
}

// Fetching data from Edit form

const editData = (id,ehe,ela) =>{
 
setmyArray(myArray.map(obj =>{

if(obj.id === id){
 return {...obj,todoname:ehe,todotoday : ela}
}else{
 return obj;
}  
}));
}



    

  return (
    <div className='main'>
    <h2 className='c-head'>Todo App</h2>
    <div className='todobtninput'>
    <button className='btn add-btn' onClick={handleClick}>Add Todo</button>
    <div className={`inputcontainer ${isActive ? 'bg-hide' : ''}`}>
      <TodoForm onSubmit={getData}/>
    </div>
    </div> 
    <div className= {`todomain ${isActive ? 'todo-trans' : ''}`} >
    {
         myArray.map((obj)=>{
          return ( 
              <div className="todocont" key={obj.id}>
            <div className="todobox"  style={{opacity: checkedItems.includes(obj.id) ? 0.2 : '' }}>
          <div className="checkcont" onClick={() => handleCheck(obj.id)} style = {{border: isChecked.includes(obj.id) ? "2px": ''}} >
           <img src={check} alt="unCheck" className="chkbtn btn"  style = {{opacity: isChecked.includes(obj.id) ? 1: 0}}  />
           <img src={unchecked} alt="check" className="unchkbtn btn" style = {{opacity: isChecked.includes(obj.id) ? 0: 1}} />
           </div>
            <h2 className="head" >Todo: {obj.todoname}</h2>
            <h3 className="todocont">{obj.todotoday}</h3>
            <div className="todoboxbtn">
             <TodoIcon onEdit={() => updateElm(obj.id)} onDelete={() => removeElm(obj.id)} />
            </div>
            </div>
            <div className="editInput" style={{transform: onEdit.includes(obj.id) ? 'translateY(-5rem)' : 'translateY(-15rem)',opacity: onEdit.includes(obj.id) ? 1: 0,position: onEdit.includes(obj.id) ? 'relative' : 'absolute'}}>
            <SetEdit className="editComp" tName = {obj.todoname} ttoday = {obj.todotoday} onSubmit={(input1,input2) => editData(obj.id,input1,input2)} />
            </div>
            </div>
            )
        })
      }
      </div>
    </div>
  )
}

export default Main;
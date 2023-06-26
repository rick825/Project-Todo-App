import React from 'react';
import edit from './images/edit.png';
import del from './images/delete.png'
import './TodoIcon.css';

const TodoIcon = ({onDelete,onEdit}) => {

    
  return (
    <div className="todoicon">
     <div className='todobtn' >
     <img src={edit} alt="Edit" className='editBtn btn' onClick={onEdit}/>
    <img src={del}
    alt="Delete"
    className="deleteBtn btn"
    onClick={onDelete}/>
    </div>

    </div>
  )
  }
export default TodoIcon;
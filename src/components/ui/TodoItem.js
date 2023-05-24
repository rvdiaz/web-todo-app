import React, { useContext, useState } from 'react'
import { TodoContext } from '../../context/TodosContext';
import { CheckBox } from './CheckBox';

export const TodoItem = (props) => {
    const {todo}=props;
    const {updateTodo}=useContext(TodoContext);

    const handlerUpdateTodo=(completed)=>{
        const newTodo={...todo,completed:completed};
        updateTodo(newTodo);
    }

  return (
    <li
        className='todoitem-wrapper'    
    >
        <label 
            className='todoitem-title'>
            <CheckBox 
                checked={todo.completed}
                updateTodo={handlerUpdateTodo}
                />
            {todo.title}
        </label>
    </li>
  )
}

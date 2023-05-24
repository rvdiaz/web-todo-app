import React, { useContext } from 'react'
import { TodoContext } from '../../context/TodosContext';
import { TodoItem } from './TodoItem';

export const FilteredList = () => {
  const {initialTodos}=useContext(TodoContext);
  return (
    <ul className='list'>
        {initialTodos.map((value)=>(
          <TodoItem 
            key={value.id}
            todo={value}
            />
        ))}
    </ul>
  )
}
